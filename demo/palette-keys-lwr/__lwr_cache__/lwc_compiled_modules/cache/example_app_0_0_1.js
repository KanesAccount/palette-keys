import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";
import hotkeys from "hotkeys";
class PaletteKeysDemo extends LightningElement {
  constructor() {
    super();
    this.action_data = [];
    this.configureActionData();
  }
  configureActionData() {
    this.action_data = [{
      id: 'products',
      title: 'Search Products...',
      hotkey: 'ctrl+P',
      icon: 'apps',
      section: 'Products',
      handler: () => {
        this.showNotification({
          title: 'Search Products',
          message: 'searching for a product',
          variant: 'info'
        });
        this.resetDataActions();
      }
    }, {
      id: 'bookings',
      title: 'Search Bookings...',
      hotkey: 'ctrl+B',
      icon: 'apps',
      section: 'Bookings',
      handler: () => {
        this.showNotification({
          title: 'Search Bookings',
          message: 'searching for a booking',
          variant: 'info'
        });
        this.resetDataActions();
      }
    }, {
      id: 'customers',
      title: 'Search Customers...',
      hotkey: 'ctrl+G',
      icon: 'apps',
      section: 'Customers',
      handler: () => {
        this.showNotification({
          title: 'Search Customers',
          message: 'searching for customer',
          variant: 'info'
        });
        this.resetDataActions();
      }
    }, {
      id: 'dark_theme',
      title: 'Change theme to Dark',
      icon: 'dark_mode',
      parent: 'Theme',
      handler: () => {
        let ninja = this.template.querySelector('[data-id="NinjaKeys"]');
        ninja.classList.add('dark');
        this.resetDataActions();
        return {
          keepOpen: true
        };
      }
    }, {
      id: 'light_theme',
      title: 'Change theme to Light',
      icon: 'light_mode',
      parent: 'Theme',
      handler: () => {
        let ninja = this.template.querySelector('[data-id="NinjaKeys"]');
        ninja.classList.remove('dark');
        this.resetDataActions();
        return {
          keepOpen: true
        };
      }
    }, {
      id: 'theme',
      title: 'Change theme...',
      icon: 'desktop_windows',
      children: ['Light Theme', 'Dark Theme', 'System Theme'],
      // children: [
      // 	{ id: 'light', title: 'light_mode', },
      // 	{ id: 'dark', title: 'light_mode', },
      // 	{ id: 'System Theme',
      // 		children: [
      // 			{ title: 'cool kids theme' },
      // 			{ title: 'normie theme' }
      // 		]
      // 	}
      // ],
      hotkey: 'ctrl+T',
      handler: () => {
        // open menu if closed. Because you can open directly that menu from it's hotkey
        let ninja = this.template.querySelector('[data-id="NinjaKeys"]');
        ninja.open({
          parent: 'Theme'
        });
        // if menu opened that prevent it from closing on select that action, no need if you don't have child actions
        this.resetDataActions();
        return {
          keepOpen: true
        };
      }
    }];
    this.filtered_data_actions = this.action_data;
  }
  resetDataActions() {
    //this.filtered_data_actions = this.action_data;
  }
  handleDataUpdate(event) {
    let response = event.detail;
    // TODO: Add response.eearch filtering here
    //this.filtered_data_actions = this.action_data.filter((action) => response.actions.filter((returned_action) => returned_action.id == action.id).length );
  }
  /*LWC compiler v5.0.0*/
}
_registerDecorators(PaletteKeysDemo, {
  fields: ["action_data"]
});
export default _registerComponent(PaletteKeysDemo, {
  tmpl: _tmpl,
  sel: "example-app",
  apiVersion: 60
});