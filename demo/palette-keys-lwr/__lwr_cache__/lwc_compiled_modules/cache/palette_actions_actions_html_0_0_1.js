import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./actions.css";

import _implicitScopedStylesheets from "./actions.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "palette-title": true
  },
  key: 1
};
const stc1 = {
  classMap: {
    "palette-hotkeys": true
  },
  key: 2
};
const stc2 = [["display", "content", false]];
const stc3 = {
  classMap: {
    "palette-hotkey": true
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, k: api_key, i: api_iterator} = $api;
  return [api_element("div", {
    className: $cmp.actionClass,
    attrs: {
      "part": $cmp.partStyle,
      "data-id": "palette_action"
    },
    key: 0
  }, [api_element("div", stc0, [api_text(api_dynamic_text($cmp.action.title))]), api_element("kbd", stc1, api_iterator($cmp.split_hotkeys, function (key) {
    return api_element("div", {
      styleDecls: stc2,
      key: api_key(3, key)
    }, [api_element("kbd", stc3, [api_text(api_dynamic_text(key))])]);
  }))])];
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
tmpl.stylesheetToken = "lwc-4sut1l76dvm";
tmpl.legacyStylesheetToken = "palette-actions_actions";
freezeTemplate(tmpl);
