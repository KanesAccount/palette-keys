import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./header.css";

import _implicitScopedStylesheets from "./header.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "breadcrumb-list": true
  },
  key: 0
};
const stc1 = {
  "breadcrumb": true
};
const stc2 = {
  "tabindex": "-1"
};
const stc3 = {
  classMap: {
    "search-wrapper": true
  },
  attrs: {
    "part": "palette-input-wrapper"
  },
  key: 3
};
const stc4 = {
  "search": true
};
const stc5 = {
  "value": "test"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, k: api_key, i: api_iterator, f: api_flatten, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [!$cmp.hide_breadcrumbs ? api_element("div", stc0, api_flatten([api_element("button", {
    classMap: stc1,
    attrs: stc2,
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.selectParent))
    }
  }, [api_text(api_dynamic_text($cmp.breadcrumbHome))]), api_iterator($cmp.breadcrumbs, function (breadcrumb) {
    return api_element("button", {
      classMap: stc1,
      attrs: {
        "tabindex": "-1",
        "data-breadcrumb": breadcrumb
      },
      key: api_key(2, breadcrumb),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.selectParent))
      }
    }, [api_text(api_dynamic_text(breadcrumb))]);
  })])) : null, api_element("div", stc3, [api_element("input", {
    classMap: stc4,
    attrs: {
      "part": "palette-input",
      "type": "text",
      "id": api_scoped_id("search"),
      "data-id": "palette_input",
      "spellcheck": false,
      "autocomplete": "off",
      "placeholder": $cmp.placeholder
    },
    props: stc5,
    key: 4,
    on: {
      "input": _m2 || ($ctx._m2 = api_bind($cmp._handleInput))
    }
  })])];
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
tmpl.stylesheetToken = "lwc-ivntejhu15";
tmpl.legacyStylesheetToken = "palette-header_header";
freezeTemplate(tmpl);
