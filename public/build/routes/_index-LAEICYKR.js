import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/_index.jsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.jsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [
    { title: "Spicy Traders" },
    { name: "description", content: "Welcome to Spicy Traders!" }
  ];
};
function Index() {
  const [user, setUser] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Main Page" }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-LAEICYKR.js.map
