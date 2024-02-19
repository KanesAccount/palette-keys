function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ["main", shadowSelector, " {margin: 30px;display: flex;flex-direction: column;align-items: center;font-family: monospace;}h1", shadowSelector, " {color: #1798c1;}*", shadowSelector, ",", shadowSelector, "::before,", shadowSelector, "::after {box-sizing: border-box;}html", shadowSelector, " {-moz-tab-size: 4;-o-tab-size: 4;tab-size: 4;}html", shadowSelector, " {line-height: 1.15;-webkit-text-size-adjust: 100%;}body", shadowSelector, " {margin: 0;}body", shadowSelector, " {font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';}hr", shadowSelector, " {height: 0;color: inherit;}abbr[title]", shadowSelector, " {-webkit-text-decoration: underline dotted;text-decoration: underline dotted;}b", shadowSelector, ",strong", shadowSelector, " {font-weight: bolder;}code", shadowSelector, ",kbd", shadowSelector, ",samp", shadowSelector, ",pre", shadowSelector, " {font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace;font-size: 1em;}small", shadowSelector, " {font-size: 80%;}sub", shadowSelector, ",sup", shadowSelector, " {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}sub", shadowSelector, " {bottom: -0.25em;}sup", shadowSelector, " {top: -0.5em;}table", shadowSelector, " {text-indent: 0;border-color: inherit;}button", shadowSelector, ",input", shadowSelector, ",optgroup", shadowSelector, ",select", shadowSelector, ",textarea", shadowSelector, " {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;}button", shadowSelector, ",select", shadowSelector, " {text-transform: none;}button", shadowSelector, ",[type='button']", shadowSelector, " {-webkit-appearance: button;}legend", shadowSelector, " {padding: 0;}progress", shadowSelector, " {vertical-align: baseline;}summary", shadowSelector, " {display: list-item;}blockquote", shadowSelector, ",dl", shadowSelector, ",dd", shadowSelector, ",h1", shadowSelector, ",h2", shadowSelector, ",h3", shadowSelector, ",h4", shadowSelector, ",h5", shadowSelector, ",h6", shadowSelector, ",hr", shadowSelector, ",figure", shadowSelector, ",p", shadowSelector, ",pre", shadowSelector, " {margin: 0;}button", shadowSelector, " {background-color: transparent;background-image: none;}fieldset", shadowSelector, " {margin: 0;padding: 0;}ol", shadowSelector, ",ul", shadowSelector, " {list-style: none;margin: 0;padding: 0;}html", shadowSelector, " {font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";line-height: 1.5;}body", shadowSelector, " {font-family: inherit;line-height: inherit;}*", shadowSelector, ",", shadowSelector, "::before,", shadowSelector, "::after {box-sizing: border-box;border-width: 0;border-style: solid;border-color: currentColor;}hr", shadowSelector, " {border-top-width: 1px;}img", shadowSelector, " {border-style: solid;}textarea", shadowSelector, " {resize: vertical;}input", shadowSelector, "::-moz-placeholder, textarea", shadowSelector, "::-moz-placeholder {opacity: 1;color: #9ca3af;}input:-ms-input-placeholder", shadowSelector, ", textarea:-ms-input-placeholder", shadowSelector, " {opacity: 1;color: #9ca3af;}input", shadowSelector, "::placeholder,textarea", shadowSelector, "::placeholder {opacity: 1;color: #9ca3af;}button", shadowSelector, " {cursor: pointer;}table", shadowSelector, " {border-collapse: collapse;}h1", shadowSelector, ",h2", shadowSelector, ",h3", shadowSelector, ",h4", shadowSelector, ",h5", shadowSelector, ",h6", shadowSelector, " {font-size: inherit;font-weight: inherit;}a", shadowSelector, " {color: inherit;text-decoration: inherit;}button", shadowSelector, ",input", shadowSelector, ",optgroup", shadowSelector, ",select", shadowSelector, ",textarea", shadowSelector, " {padding: 0;line-height: inherit;color: inherit;}pre", shadowSelector, ",code", shadowSelector, ",kbd", shadowSelector, ",samp", shadowSelector, " {font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;}img", shadowSelector, ",svg", shadowSelector, ",video", shadowSelector, ",canvas", shadowSelector, ",audio", shadowSelector, ",iframe", shadowSelector, ",embed", shadowSelector, ",object", shadowSelector, " {display: block;vertical-align: middle;}img", shadowSelector, ",video", shadowSelector, " {max-width: 100%;height: auto;}*", shadowSelector, ", ", shadowSelector, "::before, ", shadowSelector, "::after {--tw-border-opacity: 1;border-color: rgba(229, 231, 235, var(--tw-border-opacity));}.m-auto", shadowSelector, " {margin: auto;}.mb-4", shadowSelector, " {margin-bottom: 1rem;}.block", shadowSelector, " {display: block;}.table", shadowSelector, " {display: table;}.w-32", shadowSelector, " {width: 8rem;}@-webkit-keyframes spin {to", shadowSelector, " {transform: rotate(360deg);}}@keyframes spin", suffixToken, " {to {transform: rotate(360deg);}}@-webkit-keyframes ping {75%", shadowSelector, ", 100%", shadowSelector, " {transform: scale(2);opacity: 0;}}@keyframes ping", suffixToken, " {75%, 100% {transform: scale(2);opacity: 0;}}@-webkit-keyframes pulse {50%", shadowSelector, " {opacity: .5;}}@keyframes pulse", suffixToken, " {50% {opacity: .5;}}@-webkit-keyframes bounce {0%", shadowSelector, ", 100%", shadowSelector, " {transform: translateY(-25%);-webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);animation-timing-function: cubic-bezier(0.8,0,1,1);}50%", shadowSelector, " {transform: none;-webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);animation-timing-function: cubic-bezier(0,0,0.2,1);}}@keyframes bounce", suffixToken, " {0%, 100% {transform: translateY(-25%);-webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);animation-timing-function: cubic-bezier(0.8,0,1,1);}50% {transform: none;-webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);animation-timing-function: cubic-bezier(0,0,0.2,1);}}.rounded", shadowSelector, " {border-radius: 0.25rem;}.rounded-xl", shadowSelector, " {border-radius: 0.75rem;}.border", shadowSelector, " {border-width: 1px;}.border-gray-200", shadowSelector, " {--tw-border-opacity: 1;border-color: rgba(229, 231, 235, var(--tw-border-opacity));}.bg-white", shadowSelector, " {--tw-bg-opacity: 1;background-color: rgba(255, 255, 255, var(--tw-bg-opacity));}.bg-gray-50", shadowSelector, " {--tw-bg-opacity: 1;background-color: rgba(249, 250, 251, var(--tw-bg-opacity));}.dark", shadowSelector, " .dark\\:bg-gray-800", shadowSelector, " {--tw-bg-opacity: 1;background-color: rgba(31, 41, 55, var(--tw-bg-opacity));}.bg-gradient-to-r", shadowSelector, " {background-image: linear-gradient(to right, var(--tw-gradient-stops));}.from-blue-500", shadowSelector, " {--tw-gradient-from: #3b82f6;--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0));}.to-indigo-400", shadowSelector, " {--tw-gradient-to: #818cf8;}.bg-clip-text", shadowSelector, " {-webkit-background-clip: text;background-clip: text;}.px-4", shadowSelector, " {padding-left: 1rem;padding-right: 1rem;}.py-2", shadowSelector, " {padding-top: 0.5rem;padding-bottom: 0.5rem;}.py-8", shadowSelector, " {padding-top: 2rem;padding-bottom: 2rem;}.pt-2", shadowSelector, " {padding-top: 0.5rem;}.pb-2", shadowSelector, " {padding-bottom: 0.5rem;}.text-center", shadowSelector, " {text-align: center;}.text-xs", shadowSelector, " {font-size: 0.75rem;line-height: 1rem;}.text-lg", shadowSelector, " {font-size: 1.125rem;line-height: 1.75rem;}.text-2xl", shadowSelector, " {font-size: 1.5rem;line-height: 2rem;}.text-3xl", shadowSelector, " {font-size: 1.875rem;line-height: 2.25rem;}.text-4xl", shadowSelector, " {font-size: 2.25rem;line-height: 2.5rem;}.font-semibold", shadowSelector, " {font-weight: 600;}.font-bold", shadowSelector, " {font-weight: 700;}.font-extrabold", shadowSelector, " {font-weight: 800;}.tracking-tighter", shadowSelector, " {letter-spacing: -0.05em;}.tracking-tight", shadowSelector, " {letter-spacing: -0.025em;}.text-transparent", shadowSelector, " {color: transparent;}.text-gray-400", shadowSelector, " {--tw-text-opacity: 1;color: rgba(156, 163, 175, var(--tw-text-opacity));}.text-gray-700", shadowSelector, " {--tw-text-opacity: 1;color: rgba(55, 65, 81, var(--tw-text-opacity));}.text-gray-900", shadowSelector, " {--tw-text-opacity: 1;color: rgba(17, 24, 39, var(--tw-text-opacity));}.hover\\:text-gray-900:hover", shadowSelector, " {--tw-text-opacity: 1;color: rgba(17, 24, 39, var(--tw-text-opacity));}.dark", shadowSelector, " .dark\\:text-gray-200", shadowSelector, " {--tw-text-opacity: 1;color: rgba(229, 231, 235, var(--tw-text-opacity));}.antialiased", shadowSelector, " {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}*", shadowSelector, ", ", shadowSelector, "::before, ", shadowSelector, "::after {--tw-shadow: 0 0 #0000;}*", shadowSelector, ", ", shadowSelector, "::before, ", shadowSelector, "::after {--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;}html", shadowSelector, " {max-width: 38rem;padding: 2rem;margin: auto;font-size: 24px;}pre", shadowSelector, " code.hljs", shadowSelector, " {padding: 0.5em;margin: 0.5em 0;}@media (min-width: 640px) {}@media (min-width: 768px) {.md\\:text-4xl", shadowSelector, " {font-size: 2.25rem;line-height: 2.5rem;}.md\\:text-5xl", shadowSelector, " {font-size: 3rem;line-height: 1;}}@media (min-width: 1024px) {}@media (min-width: 1280px) {}@media (min-width: 1536px) {}"].join('');
  /*LWC compiler v5.0.0*/
}
export default [stylesheet];