import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _paletteKeys from "palette/keys";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<button class=" bg-gray-50 m-auto text-gray-400 text-2xl hover:text-gray-900 border border-gray-200 rounded-xl px-4 py-2${0}"${2}>⌘ + K</button>`;
const stc0 = {
  classMap: {
    "flex": true,
    "items-center": true,
    "justify-center": true,
    "w-full": true,
    "h-full": true
  },
  key: 0
};
const stc1 = {
  "data-id": "PaletteKeys"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("main", stc0, [api_static_fragment($fragment1(), 2, [api_static_part(0, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.openPalette))
    }
  })]), $cmp.action_data ? api_custom_element("palette-keys", _paletteKeys, {
    attrs: stc1,
    props: {
      "action_data": $cmp.filtered_data_actions
    },
    key: 3
  }) : null])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6djijii36eo";
tmpl.legacyStylesheetToken = "palette-app_app";
freezeTemplate(tmpl);
