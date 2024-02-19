import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./actions.html";
class Actions extends LightningElement {
  constructor() {
    super();
    this.hotKeysJoinedView = void 0;
    // Display hotkey as separate buttons on UI or as is
    this.action = void 0;
    this.selected = false;
    this.split_hotkeys = [];
    this.addEventListener('click', () => {
      this.click();
    });
  }
  connectedCallback() {
    if (this.action.hotkey) {
      let keys = this.action.hotkey.includes('+') ? this.action.hotkey.split('+') : this.action.hotkey;
      keys.forEach(key => {
        this.split_hotkeys.push(key);
      });
    }
  }
  click() {
    this.dispatchEvent(new CustomEvent('actionselected', {
      detail: this.action,
      bubbles: true,
      composed: true
    }));
  }
  actionSelection() {
    this.selected = true;
    this.ensureInView();
  }
  deselected() {
    this.selected = false;
  }

  // Scroll to show element
  ensureInView() {
    let body = this.template.querySelector('[data-id="palette_action"');
    requestAnimationFrame(() => body.scrollIntoView({
      block: 'nearest'
    }));
  }
  get actionClass() {
    return this.selected ? "selected palette-action" : "palette-action";
  }
  get partStyle() {
    return this.selected ? "palette-action palette-selected" : "palette-action";
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Actions, {
  publicProps: {
    hotKeysJoinedView: {
      config: 0
    },
    action: {
      config: 0
    }
  },
  publicMethods: ["actionSelection", "deselected", "ensureInView"],
  fields: ["selected", "split_hotkeys"]
});
export default _registerComponent(Actions, {
  tmpl: _tmpl,
  sel: "palette-actions",
  apiVersion: 60
});