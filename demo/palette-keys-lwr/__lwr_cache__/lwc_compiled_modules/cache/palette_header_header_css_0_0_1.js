function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".search" + shadowSelector + " {padding: 1.25em;flex-grow: 1;flex-shrink: 0;margin: 0px;border: none;appearance: none;font-size: 1.125em;background: transparent;color: var(--palette-text-color);outline: none;font-family: var(--palette-font-family);}.search" + shadowSelector + "::placeholder {color: var(--palette-placeholder-color);}.breadcrumb-list" + shadowSelector + " {padding: 1em 4em 0 1em;display: flex;flex-direction: row;align-items: stretch;justify-content: flex-start;flex: initial;}.breadcrumb" + shadowSelector + " {background: var(--palette-secondary-background-color);text-align: center;line-height: 1.2em;border-radius: var(--palette-key-border-radius);border: 0;cursor: pointer;padding: 0.1em 0.5em;color: var(--palette-secondary-text-color);margin-right: 0.5em;outline: none;font-family: var(--palette-font-family);}.search-wrapper" + shadowSelector + " {display: flex;border-bottom: var(--palette-separate-border);}";
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];