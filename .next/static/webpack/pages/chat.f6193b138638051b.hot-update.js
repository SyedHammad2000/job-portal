"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/pages/chat.jsx":
/*!****************************!*\
  !*** ./src/pages/chat.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Chat = ()=>{\n    var _user_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"token\"))\n                }\n            });\n            setUser(data);\n        };\n        fetchUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n            spacing: 4,\n            align: \"left\",\n            w: \"40%\",\n            children: user === null || user === void 0 ? void 0 : (_user_chats = user.chats) === null || _user_chats === void 0 ? void 0 : _user_chats.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        children: chat.receiverId.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                }, chat._id, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNnRDtBQUM3RDtBQUN5QjtBQUVuRCxNQUFNWSxPQUFPO1FBb0JKQzs7SUFuQlAsTUFBTSxDQUFDQSxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQTtJQUVoQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxZQUFZO1lBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVIsaURBQVMsQ0FBQyxHQUFXLE9BQVJSLHVEQUFPQSxFQUFDLGNBQVk7Z0JBQ3REa0IsU0FBUztvQkFDUEMsZUFBZSxVQUF3QyxPQUE5QkMsYUFBYUMsT0FBTyxDQUFDO2dCQUNoRDtZQUNGO1lBRUFQLFFBQVFFO1FBQ1Y7UUFFQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2IsdURBQVNBO1FBQUNvQixNQUFNO1FBQVNDLE1BQU07UUFBUUMsR0FBRztRQUFRQyxHQUFHO2tCQUNwRCw0RUFBQ3BCLG9EQUFNQTtZQUFDcUIsU0FBUztZQUFHQyxPQUFPO1lBQVNDLEdBQUc7c0JBQ3BDZixpQkFBQUEsNEJBQUFBLGNBQUFBLEtBQU1nQixLQUFLLGNBQVhoQixrQ0FBQUEsWUFBYWlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDakIsOERBQUM5QixpREFBR0E7OEJBQ0YsNEVBQUNLLGtEQUFJQTtrQ0FBRXlCLEtBQUtDLFVBQVUsQ0FBQ0MsSUFBSTs7Ozs7O21CQURuQkYsS0FBS0csR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FBTzVCO0dBNUJNdEI7S0FBQUE7QUE4Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQuanN4P2FjMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIEhlYWRpbmcsIEhTdGFjaywgVGV4dCwgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdGAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VXNlcihkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtaW5IPXtcIjEwMHZoXCJ9IG1pblc9e1wiMTAwJVwifSBoPXtcIjEwMCVcIn0gcD17MX0+XHJcbiAgICAgIDxIU3RhY2sgc3BhY2luZz17NH0gYWxpZ249e1wibGVmdFwifSAgdz17XCI0MCVcIn0+XHJcbiAgICAgICAge3VzZXI/LmNoYXRzPy5tYXAoKGNoYXQpID0+IChcclxuICAgICAgICAgIDxCb3gga2V5PXtjaGF0Ll9pZH0+XHJcbiAgICAgICAgICAgIDxUZXh0PntjaGF0LnJlY2VpdmVySWQubmFtZX08L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9IU3RhY2s+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIkhTdGFjayIsIlRleHQiLCJWU3RhY2siLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGF0IiwidXNlciIsInNldFVzZXIiLCJmZXRjaFVzZXIiLCJkYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWluSCIsIm1pblciLCJoIiwicCIsInNwYWNpbmciLCJhbGlnbiIsInciLCJjaGF0cyIsIm1hcCIsImNoYXQiLCJyZWNlaXZlcklkIiwibmFtZSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});