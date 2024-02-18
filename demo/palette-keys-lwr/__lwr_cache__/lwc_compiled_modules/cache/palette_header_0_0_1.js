import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./header.html";
class Header extends LightningElement {
  constructor() {
    super(...arguments);
    this.placeholder = '';
    this.hide_breadcrumbs = false;
    this.breadcrumbHome = 'Home';
    this.breadcrumbs = [];
  }
  setSearch(value) {
    let input = this.template.querySelector('[data-id="palette_input"]');
    input.value = value;
  }
  focusSearch() {
    let input = this.template.querySelector('[data-id="palette_input"]');
    requestAnimationFrame(() => input.focus());
  }
  _handleInput(event) {
    const input = event.target;
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        search: input.value
      }
    }));
  }
  selectParent(event) {
    let breadcrumb = event.currentTarget.dataset.breadcrumb;
    this.dispatchEvent(new CustomEvent('setparent', {
      detail: breadcrumb
    }));
  }
  firstUpdated() {
    this.focusSearch();
  }
  _close() {
    this.dispatchEvent(new CustomEvent('close'));
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(Header, {
  publicProps: {
    placeholder: {
      config: 0
    },
    hide_breadcrumbs: {
      config: 0
    },
    breadcrumbHome: {
      config: 0
    },
    breadcrumbs: {
      config: 0
    }
  },
  publicMethods: ["setSearch", "focusSearch"]
});
export default _registerComponent(Header, {
  tmpl: _tmpl,
  sel: "palette-header",
  apiVersion: 60
});