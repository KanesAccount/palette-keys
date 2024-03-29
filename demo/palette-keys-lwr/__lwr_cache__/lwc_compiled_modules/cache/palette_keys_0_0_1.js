import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./keys.html";
import hotkeys from "hotkeys";
class Keys extends LightningElement {
  constructor() {
    super();
    this.placeholder = 'Type a command or search...';
    // Search placeholder text
    this.disableHotkeys = false;
    // If true will register all hotkey for all actions
    this.hide_breadcrumbs = false;
    // Show or hide breadcrumbs on header
    this.open_hot_key = 'cmd+k,ctrl+k';
    // Open or hide shorcut
    this.navigationUpHotkey = 'up,shift+tab,shift+k';
    // Navigation Up hotkey
    this.navigationDownHotkey = 'down,tab,shift+j';
    // Navigation Down hotkey
    this.closeHotkey = 'esc';
    // Close hotkey
    this.goBackHotkey = 'backspace';
    // Go back hotkey, goes back on one level if has parent menu
    this.selectHotkey = 'enter';
    // Select hotkey, Select action and execute handler or open submenu
    this.hotKeysJoinedView = false;
    // Show or hide breadcrumbs on header
    this.noAutoLoadMdIcons = false;
    // Disable load material icons font on connect if you use custom icons.
    this.action_data = [];
    // Array of actions
    this._bump = true;
    // Temproray used for animation effect. TODO: change to animate logic
    this._actionMatches = [];
    this._search = '';
    this._selected = void 0;
    this._currentRoot = void 0;
    this._flatData = [];
    // Array of actions in flat structure
    this._selectedIndex = -1;
    this._section_data = [];
    this.sections = [];
    this.visible = false;
    // Show or hide element
    this.rendered = false;
    this.show_default = false;
  }
  connectedCallback() {
    this._registerInternalHotkeys();
    //this.updateSectionData();
  }
  disconnectedCallback() {
    this._unregisterInternalHotkeys();
  }
  renderedCallback() {
    if (!this.rendered) {
      this.rendered = true;
      this._flatData = this.action_data;
      this._flatData.filter(action => !!action.hotkey).forEach(action => {
        hotkeys(action.hotkey, event => {
          event.preventDefault();
          if (action.handler) {
            action.handler(action);
          }
        });
      });
      this.filterActionsOnInput();
      if (this._actionMatches.length === 0) {
        this._selected = undefined;
      }
    }
  }

  // Show the modal
  open(options = {}) {
    this._bump = true;
    this.visible = true;
    let header = this.template.querySelector("[data-id='palette_header']");
    if (header) {
      header.focusSearch();
    }
    if (this._actionMatches.length > 0) {
      this._selected = this._actionMatches[0];
    }
    this.setParent(options.parent);
  }
  close() {
    this._bump = false;
    this.visible = false;
  }
  setParentViaEvent(event) {
    this.setParent(event.detail);
  }

  /**
  * Navigate to group of actions
  * @param parent id of parent group/action
  */
  setParent(parent) {
    if (!parent) {
      this._currentRoot = undefined;
      this._selected = undefined;
    } else {
      this._currentRoot = parent;
    }
    this._search = '';
    let header = this.template.querySelector("[data-id='palette_header']");
    if (header) {
      header.setSearch('');
    }
  }
  _registerInternalHotkeys() {
    if (this.open_hot_key) {
      hotkeys(this.open_hot_key, event => {
        event.preventDefault();
        this.visible ? this.close() : this.open();
      });
    }
    if (this.selectHotkey) {
      hotkeys(this.selectHotkey, event => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        this._actionSelected(this.grouped_actions[this._selectedIndex]);
      });
    }
    if (this.goBackHotkey) {
      hotkeys(this.goBackHotkey, event => {
        if (!this.visible) {
          return;
        }
        if (!this._search) {
          event.preventDefault();
          this._goBack();
        }
      });
    }
    if (this.navigationDownHotkey) {
      hotkeys(this.navigationDownHotkey, event => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        if (this._selectedIndex >= this.grouped_actions.length - 1) {
          this._selected = this.grouped_actions[0];
          this._selectedIndex = 0;
        } else {
          this._selected = this.grouped_actions[this._selectedIndex + 1];
          this._selectedIndex = this._selectedIndex + 1;
        }
        let all_action_elements = this.template.querySelectorAll('palette-actions');
        all_action_elements.forEach(action_element => {
          action_element.deselected();
        });
        let action_element = this.template.querySelector(`[data-id="${this._selected.id}"]`);
        action_element.actionSelection();
      });
    }
    if (this.navigationUpHotkey) {
      hotkeys(this.navigationUpHotkey, event => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        if (this._selectedIndex === -1 || this._selectedIndex === 0) {
          this._selected = this.grouped_actions[this.grouped_actions.length - 1];
          this._selectedIndex = this.grouped_actions.length - 1;
        } else {
          this._selected = this.grouped_actions[this._selectedIndex - 1];
          this._selectedIndex = this._selectedIndex - 1;
        }
        let all_action_elements = this.template.querySelectorAll('palette-actions');
        all_action_elements.forEach(action_element => {
          action_element.deselected();
        });
        let action_element = this.template.querySelector(`[data-id="${this._selected.id}"]`);
        action_element.actionSelection();
      });
    }
    if (this.closeHotkey) {
      hotkeys(this.closeHotkey, () => {
        if (!this.visible) {
          return;
        }
        this.close();
      });
    }
  }
  _unregisterInternalHotkeys() {
    if (this.open_hot_key) {
      hotkeys.unbind(this.open_hot_key);
    }
    if (this.selectHotkey) {
      hotkeys.unbind(this.selectHotkey);
    }
    if (this.goBackHotkey) {
      hotkeys.unbind(this.goBackHotkey);
    }
    if (this.navigationDownHotkey) {
      hotkeys.unbind(this.navigationDownHotkey);
    }
    if (this.navigationUpHotkey) {
      hotkeys.unbind(this.navigationUpHotkey);
    }
    if (this.closeHotkey) {
      hotkeys.unbind(this.closeHotkey);
    }
  }
  _actionFocused(event) {
    // this.selectedIndex = index;
    let action_id = event.currentTarget.dataset.id;
    this._selected = this.grouped_actions.filter(action => action_id === action.id)[0];
    let action = this.template.querySelector(`[data-id="${action_id}"]`);
    if (action) {
      action.actionSelection();
    }
  }
  _actionUnfocused(event) {
    let index = event.currentTarget.dataset.id;
    this._selected = undefined;
    let action = this.template.querySelector(`[data-id="${index}"]`);
    if (action) {
      action.deselected();
    }
  }
  _onTransitionEnd() {
    this._bump = false;
  }
  _goBack() {
    const parent = this.breadcrumbs.length > 1 ? this.breadcrumbs[this.breadcrumbs.length - 2] : undefined;
    this.setParent(parent);
  }
  _actionSelectedViaEvent(event) {
    let action_id = event.currentTarget.dataset.id;
    let action = this.action_data.filter(action => action.id === action_id)[0];
    if (action) {
      this._actionSelected(action);
    } else {
      // Search children actions
      let child_action;
      this.action_data.forEach(action => {
        if (action.children) {
          action.children.forEach(child => {
            if (child.id === action_id) {
              child_action = child;
            }
          });
        }
      });
      if (child_action) {
        this._actionSelected(child_action);
      } else {
        console.warn(`Action ${action_id} not found`);
      }
    }
  }
  _actionSelected(action) {
    var _a;

    // fire selected event even when action is empty/not selected,
    // so possible handle api search for example
    this.dispatchEvent(new CustomEvent('selected', {
      detail: {
        search: this._search,
        action
      },
      bubbles: true,
      composed: true
    }));
    if (!action) {
      return;
    }
    if (action.children && ((_a = action.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
      this._currentRoot = action.id;
      this._search = '';
    }
    let header = this.template.querySelector("[data-id='palette_header']");
    header.setSearch('');
    header.focusSearch();
    if (action.handler) {
      const result = action.handler(action);
      if (!(result === null || result === void 0 ? void 0 : result.keepOpen)) {
        this.close();
      }
    }
    this._bump = true;
  }
  _handleInput(event) {
    this._search = event.detail.search;
    this.filterActionsOnInput();
  }
  _overlayClick(event) {
    var _a;
    if ((_a = event.target) === null || _a === void 0 ? void 0 : _a.classList.contains('modal')) {
      this.close();
    }
  }
  filterActionsOnInput() {
    const actionMatches = this._flatData.filter(action => {
      var _a;
      const regex = new RegExp(this._search, 'gi');
      if (action.title) {
        const matcher = action.title.match(regex) || ((_a = action.keywords) === null || _a === void 0 ? void 0 : _a.match(regex));
        if (!this._currentRoot && this._search) {
          // global search for items on root
          return matcher;
        }
        return action.parent === this._currentRoot && matcher;
      }
      return false;
    });
    const sections = actionMatches.reduce((entryMap, e) => entryMap.set(e.section, [...(entryMap.get(e.section) || []), e]), new Map());
    this._actionMatches = [...sections.values()].flat();
    let default_action = this.action_data.filter(action => action.default);
    if (!this._actionMatches.length && default_action.length) {
      this._actionMatches = default_action;
      this._selected = default_action[0];
      this.show_default = true;
    }
  }
  get groupedActions() {
    let grouped_actions = [];
    let sections = this._actionMatches.filter(action => action.section && !action.default);
    if (this._currentRoot) {
      let current_section = this._actionMatches.filter(action => action.section === this._currentRoot);
      let children = current_section.length && current_section[0].children ? current_section[0].children : [];
      sections = sections.filter(action => action.parent === this._currentRoot);
      grouped_actions = [...sections, ...children];
    } else {
      grouped_actions = this._actionMatches.filter(action => !action.default);
    }
    if (this.show_default) {
      grouped_actions = [this.action_data.filter(action => action.default)];
    }
    this.grouped_actions = grouped_actions;
    return grouped_actions;
  }
  get breadcrumbs() {
    const path = [];
    let parentAction = this._selected === null || this._selected === void 0 ? void 0 : this._selected.parent;
    if (parentAction) {
      path.push(parentAction);
      while (parentAction) {
        const action = this._flatData.find(a => a.id === parentAction);
        if (action === null || action === void 0 ? void 0 : action.parent) {
          path.push(action.parent);
        }
        parentAction = action ? action.parent : undefined;
      }
    }
    return path.reverse();
  }
  get menuClasses() {
    return this.visible ? 'visible modal' : 'modal';
  }
  get standardClasses() {
    return this._bump ? 'bump modal-content' : 'modal-content';
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Keys, {
  publicProps: {
    placeholder: {
      config: 0
    },
    disableHotkeys: {
      config: 0
    },
    hide_breadcrumbs: {
      config: 0
    },
    open_hot_key: {
      config: 0
    },
    navigationUpHotkey: {
      config: 0
    },
    navigationDownHotkey: {
      config: 0
    },
    closeHotkey: {
      config: 0
    },
    goBackHotkey: {
      config: 0
    },
    selectHotkey: {
      config: 0
    },
    hotKeysJoinedView: {
      config: 0
    },
    noAutoLoadMdIcons: {
      config: 0
    },
    action_data: {
      config: 0
    }
  },
  publicMethods: ["open", "close"],
  fields: ["_bump", "_actionMatches", "_search", "_selected", "_currentRoot", "_flatData", "_selectedIndex", "_section_data", "sections", "visible", "rendered", "show_default"]
});
export default _registerComponent(Keys, {
  tmpl: _tmpl,
  sel: "palette-keys",
  apiVersion: 60
});