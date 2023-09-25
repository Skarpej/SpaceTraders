var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PZG6JPME.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "bg-slate-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Spicy Traders" },
  { name: "description", content: "Welcome to Spicy Traders!" }
];
function Index() {
  let [user, setUser] = (0, import_react3.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Main Page" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => login,
  meta: () => meta2
});
var import_react4 = require("react"), import_node2 = require("@remix-run/node");

// app/lib/account/login.js
var registerUser = async (newUserName) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      symbol: newUserName,
      faction: "COSMIC"
    })
  };
  return await fetch("https://api.spacetraders.io/v2/register", options).then((response) => response.json()).then((response) => console.log(response)).catch((err) => console.error(err));
};

// app/components/Login/Login.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { className: "login-box", method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "login-box__header", children: "Create a new Corporation" }, void 0, !1, {
      fileName: "app/components/Login/Login.jsx",
      lineNumber: 5,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { name: "username", required: !0, maxLength: 15, type: "text" }, void 0, !1, {
      fileName: "app/components/Login/Login.jsx",
      lineNumber: 6,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/components/Login/Login.jsx",
      lineNumber: 7,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "login-box__button", type: "submit", children: "Register" }, void 0, !1, {
      fileName: "app/components/Login/Login.jsx",
      lineNumber: 8,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Login/Login.jsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Login/Login.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/components/Header/Header.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-3xl font-bold underline", children: "Spicy Traders" }, void 0, !1, {
    fileName: "app/components/Header/Header.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/login.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Spicy Traders" },
  { name: "description", content: "Welcome to Spicy Traders!" }
], action = async ({ request }) => {
  let username = new URLSearchParams(await request.text()).get("username");
  try {
    let user = await registerUser(username);
    return (0, import_node2.redirect)("/mainPage");
  } catch {
    return (0, import_node2.json)({ message: "Registration failed. Please try again." }, { status: 400 });
  }
};
function login() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/login.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Login, {}, void 0, !1, {
      fileName: "app/routes/login.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => Index2,
  loader: () => loader,
  meta: () => meta3
});
var import_react6 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/components/UserCard/UserCard.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function UserCard({ symbol, headquarters, credits, startingFaction }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "usercard", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-orange-900", children: "Name" }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 4,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: symbol }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 5,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Headquarters" }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: headquarters }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Credits" }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: credits }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Faction" }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: startingFaction }, void 0, !1, {
      fileName: "app/components/UserCard/UserCard.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UserCard/UserCard.jsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/lib/account/getUser.js
var getUser = async (token) => {
  let options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  return await fetch("https://api.spacetraders.io/v2/my/agent", options).then((response) => response.json()).catch((err) => console.error(err));
}, getUserCord = async (token, systemSymbol, symbol) => {
  let options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  return await fetch(`https://api.spacetraders.io/v2/systems/${systemSymbol}/waypoints/${symbol}`, options).then((response) => response.json()).catch((err) => console.error(err));
}, getContracts = async (token) => {
  let options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  return await fetch("https://api.spacetraders.io/v2/my/contracts", options).then((response) => response.json()).catch((err) => console.error(err));
};

// app/components/Nav/Nav.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Nav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("nav", { className: "relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg md:flex-wrap md:justify-start", "data-te-navbar-ref": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex w-full flex-wrap items-center justify-between px-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        className: "border-0 bg-transparent px-2 text-xl leading-none lg:hidden",
        type: "button",
        "data-te-collapse-init": !0,
        "data-te-target": "#navbarSupportedContentY",
        "aria-controls": "navbarSupportedContentY",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "[&>svg]:w-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: "1.5",
            stroke: "currentColor",
            className: "h-7 w-7",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "path",
              {
                strokeinecap: "round",
                strokeLinejoin: "round",
                d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Nav/Nav.jsx",
                lineNumber: 24,
                columnNumber: 19
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Nav/Nav.jsx",
            lineNumber: 17,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Nav/Nav.jsx",
          lineNumber: 16,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Nav/Nav.jsx",
        lineNumber: 8,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Nav/Nav.jsx",
      lineNumber: 7,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto", id: "navbarSupportedContentY", "data-te-collapse-item": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { className: "mr-auto flex flex-col lg:flex-row", "data-te-navbar-nav-ref": !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "mb-4 lg:mb-0 lg:pr-2 hover:drop-shadow-2xl", "data-te-nav-item-ref": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "block lg:p-2 font-bold", href: "mainPage", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { style: { color: "red" }, children: "Spicy" }, void 0, !1, {
          fileName: "app/components/Nav/Nav.jsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        " Traders"
      ] }, void 0, !0, {
        fileName: "app/components/Nav/Nav.jsx",
        lineNumber: 36,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/Nav/Nav.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "mb-4 lg:mb-0 lg:pr-2", "data-te-nav-item-ref": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          className: "block transition duration-150 ease-in-out dark:hover:text-red-600 lg:p-2",
          href: "dashboard",
          children: "Dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav/Nav.jsx",
          lineNumber: 42,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav/Nav.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "mb-4 lg:mb-0 lg:pr-2", "data-te-nav-item-ref": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          className: "block transition duration-150 ease-in-out dark:hover:text-red-600 lg:p-2",
          href: "contracts",
          children: "Contracts"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav/Nav.jsx",
          lineNumber: 49,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav/Nav.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { className: "mb-4 lg:mb-0 lg:pr-2", "data-te-nav-item-ref": !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          className: "block transition duration-150 ease-in-out dark:hover:text-red-600 lg:p-2",
          href: "marketplaces",
          children: "Marketplaces"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Nav/Nav.jsx",
          lineNumber: 56,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Nav/Nav.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Nav/Nav.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Nav/Nav.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute top-0 right-0 m-3 text-lg", children: "MEDIUMCAKE" }, void 0, !1, {
      fileName: "app/components/Nav/Nav.jsx",
      lineNumber: 65,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Nav/Nav.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Nav/Nav.jsx",
    lineNumber: 5,
    columnNumber: 7
  }, this);
}

// app/components/Contracts/Contract.jsx
var import_react5 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Contract(data) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-black mb-2", children: "Ongoing contracts" }, void 0, !1, {
      fileName: "app/components/Contracts/Contract.jsx",
      lineNumber: 6,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "div",
      {
        className: "block max-w-[22rem] rounded-lg text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "h5",
            {
              className: "mb-2 text-lg font-medium leading-tight text-neutral-50",
              children: [
                data.factionSymbol,
                " - ",
                data.type
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 10,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "text-base  leading-normal text-neutral-200 " + (data.fufilled ? "text-blue-500" : data.accepted ? "text-orange-500" : "text-green-500"),
              children: data.fufilled ? "Completed" : data.accepted ? "Ongoing" : "Available"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 14,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "text-base  leading-normal text-neutral-200",
              children: [
                "Deliver: ",
                data.terms.deliver[0].tradeSymbol.replace(/_/, " "),
                " ",
                data.terms.deliver[0].unitsFulfilled,
                " / ",
                data.terms.deliver[0].unitsRequired
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 18,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "text-base  leading-normal text-neutral-200",
              children: [
                "Destination: ",
                data.terms.deliver[0].destinationSymbol
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 22,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "text-base  leading-normal text-neutral-200",
              children: [
                "Deadline: ",
                new Date(data.terms.deadline).toLocaleString()
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 26,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "text-base  leading-normal text-neutral-200",
              children: [
                "On accepting: ",
                data.terms.payment.onAccepted,
                " \u20AC"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 30,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "p",
            {
              className: "text-base  leading-normal text-neutral-200",
              children: [
                "Fufilling: ",
                data.terms.payment.onFulfilled,
                " \u20AC"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/Contracts/Contract.jsx",
              lineNumber: 34,
              columnNumber: 5
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "bg-white p-1 mt-2 hover:bg-gray-400", children: "Accept" }, void 0, !1, {
            fileName: "app/components/Contracts/Contract.jsx",
            lineNumber: 38,
            columnNumber: 5
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Contracts/Contract.jsx",
          lineNumber: 9,
          columnNumber: 3
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Contracts/Contract.jsx",
        lineNumber: 7,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Contracts/Contract.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Contracts/Contracts.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Contracts({ contracts }) {
  return !contracts || !contracts.data ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: "Loading contracts..." }, void 0, !1, {
    fileName: "app/components/Contracts/Contracts.jsx",
    lineNumber: 5,
    columnNumber: 16
  }, this) : (console.log(contracts), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ml-8 mt-3 usercard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: contracts.data.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Contract, { ...data }, void 0, !1, {
    fileName: "app/components/Contracts/Contracts.jsx",
    lineNumber: 13,
    columnNumber: 28
  }, this)) }, void 0, !1, {
    fileName: "app/components/Contracts/Contracts.jsx",
    lineNumber: 10,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/Contracts/Contracts.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this));
}

// app/routes/$.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Spicy Traders" },
  { name: "description", content: "Welcome to Spicy Traders!" }
], loader = async ({ request }) => {
  let token = process.env.TOKEN, { pathname } = new URL(request.url), rootData = await getUser(token), { data: { headquarters } } = rootData, userCord = await getUserCord(token, headquarters.match(/..-..../), headquarters), contracts = await getContracts(token);
  return (0, import_node3.json)({ pathname, rootData, userCord, contracts });
};
function Index2() {
  let { contracts, pathname, rootData: { data: { symbol, headquarters, credits, startingFaction } } } = (0, import_react6.useLoaderData)(), ConditionalComponent, sharedProps = { symbol, headquarters, credits, startingFaction };
  switch (pathname) {
    case "/dashboard":
      ConditionalComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Dashboard, { ...sharedProps }, void 0, !1, {
        fileName: "app/routes/$.jsx",
        lineNumber: 33,
        columnNumber: 42
      }, this);
      break;
    case "/contracts":
      ConditionalComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Contracts, { contracts }, void 0, !1, {
        fileName: "app/routes/$.jsx",
        lineNumber: 36,
        columnNumber: 42
      }, this);
      break;
    case "/marketplaces":
      ConditionalComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Marketplaces, { ...sharedProps }, void 0, !1, {
        fileName: "app/routes/$.jsx",
        lineNumber: 39,
        columnNumber: 42
      }, this);
      break;
    default:
      ConditionalComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(UserCard, { ...sharedProps }, void 0, !1, {
        fileName: "app/routes/$.jsx",
        lineNumber: 42,
        columnNumber: 42
      }, this);
      break;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Nav, {}, void 0, !1, {
      fileName: "app/routes/$.jsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ConditionalComponent, {}, void 0, !1, {
      fileName: "app/routes/$.jsx",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.jsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OMQLPN3A.js", imports: ["/build/_shared/chunk-GQYBQBMM.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FELPCCTA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-F54BII6T.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-LAEICYKR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-UUONK6RA.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "2008ccc1", hmr: void 0, url: "/build/manifest-2008CCC1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
