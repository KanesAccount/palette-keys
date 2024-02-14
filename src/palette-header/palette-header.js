import { LightningElement, api } from 'lwc';

export default class PaletteHeader extends LightningElement {
	@api placeholder = '';
	@api hide_breadcrumbs = false;
	@api breadcrumbHome = 'Home';
	@api breadcrumbs = [];

    constructor() {
        super(...arguments);
    }

	@api
    setSearch(value) {
		let input = this.template.querySelector('[data-id="palette_input"]');
		input.value = value;
    }

	@api
    focusSearch() {
		let input = this.template.querySelector('[data-id="palette_input"]');
        requestAnimationFrame(() => input.focus());
    }

    _handleInput(event) {
        const input = event.target;
        this.dispatchEvent(new CustomEvent('change', {
            detail: { search: input.value },
            bubbles: false,
            composed: false,
        }));
    }

    selectParent(event) {
		let breadcrumb = event.currentTarget.dataset.breadcrumb;

        this.dispatchEvent(new CustomEvent('setparent', {
            detail: { parent: breadcrumb },
            bubbles: true,
            composed: true,
        }));
    }

    firstUpdated() {
        this.focusSearch();
    }

    _close() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
}
