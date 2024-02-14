import { LightningElement, api } from 'lwc';
import hotkeys from "c/hotkeys";

export default class PaletteKeys extends LightningElement {
	@api placeholder = 'Type a command or search...'; // Search placeholder text
	@api disableHotkeys = false; // If true will register all hotkey for all actions
	@api hide_breadcrumbs = false; // Show or hide breadcrumbs on header
	@api open_hot_key = 'cmd+k,ctrl+k'; // Open or hide shorcut
	@api navigationUpHotkey = 'up,shift+tab,shift+k'; // Navigation Up hotkey
	@api navigationDownHotkey = 'down,tab,shift+j'; // Navigation Down hotkey
	@api closeHotkey = 'esc'; // Close hotkey
	@api goBackHotkey = 'backspace'; // Go back hotkey, goes back on one level if has parent menu
	@api selectHotkey = 'enter'; // Select hotkey, Select action and execute handler or open submenu
	@api hotKeysJoinedView = false; // Show or hide breadcrumbs on header
	@api noAutoLoadMdIcons = false; // Disable load material icons font on connect if you use custom icons.
	@api action_data = []; // Array of actions

	_bump = true; // Temproray used for animation effect. TODO: change to animate logic
	_actionMatches = [];
	_search = '';
	_selected;
	_currentRoot;
	_flatData = []; // Array of actions in flat structure

	sections = [];
	visible = false; // Show or hide element

	constructor() {
		super();
	}

	connectedCallback() {
		this._registerInternalHotkeys();
	}

	disconnectedCallback() {
		let styleSheet = document.getElementById('host_styles');
        styleSheet.remove();

		this._unregisterInternalHotkeys();
	}

	renderedCallback() {
		this._flatData = this._flattern(this.action_data);
		this._flatData.filter(action => !!action.hotkey).forEach(action => {
			hotkeys(action.hotkey, event => {
				event.preventDefault();
				if (action.handler) {
					action.handler(action);
				}
			});
		});

		const actionMatches = this._flatData.filter(action => {
			var _a;
			const regex = new RegExp(this._search, 'gi');

			if(action.title){
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

		if (this._actionMatches.length > 0 && this._selectedIndex === -1) {
			this._selected = this._actionMatches[0];
		}

		if (this._actionMatches.length === 0) {
			this._selected = undefined;
		}
	}

	// Show the modal
	@api
	open(options = {}) {
		this._bump = true;
		this.visible = true;

		let header = this.template.querySelector("[data-id='palette_header']");
		if(header){
			header.focusSearch();
		}

		if (this._actionMatches.length > 0) {
			this._selected = this._actionMatches[0];
		}

		this.setParent(options.parent);
	}

	@api
	close() {
		this._bump = false;
		this.visible = false;
	}

	/**
	* Navigate to group of actions
	* @param parent id of parent group/action
	*/
	setParent(parent) {
		if (!parent) {
			this._currentRoot = undefined;
			// this.breadcrumbs = [];
		} else {
			this._currentRoot = parent;
		}

		this._selected = undefined;
		this._search = '';

		let header = this.template.querySelector("[data-id='palette_header']");
		if(header){
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
				this._actionSelected(this._actionMatches[this._selectedIndex]);
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

				if (this._selectedIndex >= this._actionMatches.length - 1) {
					this._selected = this._actionMatches[0];
				} else {
					this._selected = this._actionMatches[this._selectedIndex + 1];
				}
			});
		}

		if (this.navigationUpHotkey) {
			hotkeys(this.navigationUpHotkey, event => {
				if (!this.visible) {
					return;
				}

				event.preventDefault();

				if (this._selectedIndex === 0) {
					this._selected = this._actionMatches[this._actionMatches.length - 1];
				} else {
					this._selected = this._actionMatches[this._selectedIndex - 1];
				}
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

	_flattern(members, parent) {
		let children = [];
		if (!members) {
			members = [];
		}

		return members.map(mem => {
			const alreadyFlatternByUser = mem.children && mem.children.some(value => {
				return typeof value == 'string';
			});

			const m = { ...mem, parent: mem.parent || parent };

			if (alreadyFlatternByUser) {
				return m;
			} else {
				if (m.children && m.children.length) {
					parent = mem.id;
					children = [...children, ...m.children];
				}

				m.children = m.children ? m.children.map(c => c.id) : [];
				return m;
			}
		}).concat(children.length ? this._flattern(children, parent) : children);
	}

	_actionFocused(event) {
		// this.selectedIndex = index;
		let index = event.currentTarget.dataset.id;
		this._selected = index;
		let action = this.template.querySelector(`[data-id="${index}"]`);
		action.actionSelection();
	}

	_actionUnfocused(event) {
		let index = event.currentTarget.dataset.id;
		this._selected = undefined;
		let action = this.template.querySelector(`[data-id="${index}"]`);
		action.deselected();
	}

	_onTransitionEnd() {
		this._bump = false;
	}

	_goBack() {
		const parent = this.breadcrumbs.length > 1 ?
		this.breadcrumbs[this.breadcrumbs.length - 2] :
		undefined;
		this.setParent(parent);
	}

	/**
		*
		* 	update(changedProperties) {
		if (changedProperties.has('data') && !this.disableHotkeys) {
			this._flatData = this._flattern(this.data);
			this._flatData.filter(action => !!action.hotkey).forEach(action => {
				hotkeys(action.hotkey, event => {
				event.preventDefault();
				if (action.handler) {
					action.handler(action);
				}
				});
			});
		}
		super.update(changedProperties);
	}
	* **/

	_actionSelectedViaEvent(event){
		let action_id = event.currentTarget.dataset.id;
		let action = this.action_data.filter((action) => action.id === action_id)[0];
		this._actionSelected(action);
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

	async _handleInput(event) {
		this._search = event.detail.search;
		await Promise.resolve();

		this.dispatchEvent(new CustomEvent('inputchange', {
			detail: {
				search: this._search,
				actions: this._actionMatches
			},
			bubbles: true,
			composed: true
		}));
	}

	_overlayClick(event) {
		var _a;
		if ((_a = event.target) === null || _a === void 0 ? void 0 : _a.classList.contains('modal')) {
			this.close();
		}
	};

	get breadcrumbs() {
		var _a;
		const path = [];
		let parentAction = (_a = this._selected) === null || _a === void 0 ? void 0 : _a.parent;

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

	get _selectedindex() {
		if (!this._selected) {
			return -1;
		}
		return this._actionmatches.indexof(this._selected);
	}

	get menuClasses(){
		return this.visible ? 'visible modal' : 'modal';
	}

	get standardClasses(){
		return this._bump ? 'bump modal-content' : 'modal-content';
	}
}
