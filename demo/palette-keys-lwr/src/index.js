import { createElement } from 'lwc';
import PaletteKeys from 'palette/keys';

const app = createElement('palette-keys', { is: PaletteKeys });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
