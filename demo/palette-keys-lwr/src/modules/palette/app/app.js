import { LightningElement } from 'lwc';

import hotkeys from "hotkeys";

export default class PaletteKeysDemo extends LightningElement {
	action_data = [];

	constructor() {
		super();
		this.configureActionData();
	}

	openPalette(){
		this.template.querySelector('[data-id="PaletteKeys"]').open();
	}

	configureActionData(){
		this.action_data = [
			{
				id: 'Projects',
				title: 'Open Projects',
				hotkey: 'ctrl+N',
				icon: 'apps',
				section: 'Projects',
				handler: () => {
					// auto registered the above hotkey with this handler
					alert('Your logic to handle');
				},
			},
			{
				id: 'theme',
				title: 'Change theme...',
				icon: 'desktop_windows',
				section: 'Theme',
				children: [
					{
						id: 'light_mode',
						title: 'Light Mode',
						parent: 'Theme',
						handler: () => {
							let palette = this.template.querySelector('[data-id="PaletteKeys"]');
							palette.classList.remove('dark');
							return {keepOpen: true};
						},
					},
					{
						id: 'dark_mode',
						title: 'Dark Mode',
						parent: 'Theme',
						handler: () => {
							let palette = this.template.querySelector('[data-id="PaletteKeys"]');
							palette.classList.add('dark');
							return {keepOpen: true};
						},
					},
				],
				hotkey: 'ctrl+T',
				handler: () => {
					// open menu if closed. Because you can open directly that menu from it's hotkey
					let palette = this.template.querySelector('[data-id="PaletteKeys"]');
					palette.open({ parent: 'Theme' });
					//this.resetDataActions();
					// if menu opened that prevent it from closing on select that action, no need if you don't have child actions
					return {keepOpen: true};
				},
			},
			{
				id: 'default',
				title: 'Default Action',
				default: true,
				handler: () => {
					alert('Your default logic to handle');	
					let palette = this.template.querySelector('[data-id="PaletteKeys"]');
					palette.resetDefault();
				}
			}
		];

		this.filtered_data_actions = this.action_data;
	}
}
