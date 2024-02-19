import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./keys.css";

import _implicitScopedStylesheets from "./keys.scoped.css?scoped=true";

import _paletteHeader from "palette/header";
import _paletteActions from "palette/actions";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span class="help${0}"${2}><svg version="1.0" class="palette-examplekey${0}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280"${2}><path d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"${3}/></svg>to select</span>`;
const $fragment2 = parseFragment`<span class="help${0}"${2}><svg xmlns="http://www.w3.org/2000/svg" class="palette-examplekey${0}" viewBox="0 0 24 24"${2}><path d="M0 0h24v24H0V0z" fill="none"${3}/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"${3}/></svg><svg xmlns="http://www.w3.org/2000/svg" class="palette-examplekey${0}" viewBox="0 0 24 24"${2}><path d="M0 0h24v24H0V0z" fill="none"${3}/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"${3}/></svg>to navigate</span>`;
const $fragment3 = parseFragment`<span class="help${0}"${2}><span class="palette-examplekey esc${0}"${2}>esc</span>to close</span>`;
const $fragment4 = parseFragment`<span class="help${0}"${2}><svg xmlns="http://www.w3.org/2000/svg" class="palette-examplekey backspace${0}" viewBox="0 0 20 20" fill="currentColor"${2}><path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd"${3}/></svg>move to parent</span>`;
const stc0 = {
  "data-id": "palette_header",
  "exportparts": "palette-input,palette-input-wrapper"
};
const stc1 = {
  classMap: {
    "modal-body": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "actions-list": true
  },
  attrs: {
    "part": "actions-list"
  },
  key: 4
};
const stc3 = {
  "section": true
};
const stc4 = {
  classMap: {
    "group-header": true
  },
  key: 6
};
const stc5 = {
  classMap: {
    "action": true
  },
  key: 7
};
const stc6 = {
  attrs: {
    "name": "footer"
  },
  key: 9
};
const stc7 = {
  classMap: {
    "modal-footer": true
  },
  attrs: {
    "slot": "footer"
  },
  key: "@footer:10"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, k: api_key, d: api_dynamic_text, t: api_text, h: api_element, i: api_iterator, st: api_static_fragment, s: api_slot} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7} = $ctx;
  return [api_element("div", {
    className: $cmp.menuClasses,
    key: 0,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp._overlayClick))
    }
  }, [api_element("div", {
    className: $cmp.standardClasses,
    key: 1,
    on: {
      "animationend": _m1 || ($ctx._m1 = api_bind($cmp._onTransitionEnd))
    }
  }, [api_custom_element("palette-header", _paletteHeader, {
    attrs: stc0,
    props: {
      "placeholder": $cmp.placeholder,
      "hide_breadcrumbs": $cmp.hide_breadcrumbs,
      "breadcrumbs": $cmp.breadcrumbs
    },
    key: 2,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp._handleInput)),
      "close": _m3 || ($ctx._m3 = api_bind($cmp.close)),
      "setparent": _m4 || ($ctx._m4 = api_bind($cmp.setParentViaEvent))
    }
  }), api_element("div", stc1, [api_element("div", stc2, api_iterator($cmp.groupedActions, function (section) {
    return api_element("div", {
      classMap: stc3,
      key: api_key(5, section.id)
    }, [section.section ? api_element("div", stc4, [api_text(api_dynamic_text(section.section))]) : null, api_element("div", stc5, [api_custom_element("palette-actions", _paletteActions, {
      attrs: {
        "data-id": section.id,
        "exportparts": "palette-action,palette-selected,palette-icon"
      },
      props: {
        "hotKeysJoinedView": $cmp.hotKeysJoinedView,
        "action": section
      },
      key: 8,
      on: {
        "mouseover": _m5 || ($ctx._m5 = api_bind($cmp._actionFocused)),
        "mouseout": _m6 || ($ctx._m6 = api_bind($cmp._actionUnfocused)),
        "actionselected": _m7 || ($ctx._m7 = api_bind($cmp._actionSelectedViaEvent))
      }
    })])]);
  }))]), api_slot("footer", stc6, [api_element("div", stc7, [api_static_fragment($fragment1(), 12), api_static_fragment($fragment2(), 14), api_static_fragment($fragment3(), 16), api_static_fragment($fragment4(), 18)])], $slotset)])])];
  /*LWC compiler v5.0.0*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["footer"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-4jbjjoqrnsk";
tmpl.legacyStylesheetToken = "palette-keys_keys";
freezeTemplate(tmpl);
