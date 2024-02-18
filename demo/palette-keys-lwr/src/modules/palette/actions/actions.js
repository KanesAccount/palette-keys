import { LightningElement, api } from 'lwc';

export default class Actions extends LightningElement {
	@api hotKeysJoinedView; // Display hotkey as separate buttons on UI or as is
	@api action;

	selected = false;

	split_hotkeys = [];

    constructor() {
        super();
        this.addEventListener('click', () => { this.click() });
    }
	
	connectedCallback(){
		if(this.action.hotkey){
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
            composed: true,
        }));
    }

	@api actionSelection(){
		this.selected = true;
		this.ensureInView();
	}

	@api deselected(){
		this.selected = false;
	}

    // Scroll to show element
	@api
    ensureInView() {
		let body = this.template.querySelector('[data-id="palette_action"');
        requestAnimationFrame(() => body.scrollIntoView({ block: 'nearest' }));
    }
	
	get actionClass() {
		return this.selected ? "selected palette-action" : "palette-action";
	}
	
	get partStyle() {
		return this.selected ? "palette-action palette-selected" : "palette-action";
	}
}
