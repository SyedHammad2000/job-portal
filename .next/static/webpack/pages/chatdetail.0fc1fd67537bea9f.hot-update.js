"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chatdetail",{

/***/ "./src/pages/chatdetail.jsx":
/*!**********************************!*\
  !*** ./src/pages/chatdetail.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/appContext/ApplicationContext */ \"./src/components/appContext/ApplicationContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Chat = (param)=>{\n    let { alluser } = param;\n    var _alluser_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_3__.ApplicationContext);\n    console.log(alluser, \"ALL\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userrr = JSON.parse(localStorage.getItem(\"user\"));\n        setdata(userrr);\n        console.log(data, \"user\");\n    }, [\n        all\n    ]);\n    console.log(user, \"messagessss \");\n    console.log(data, \"Data\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n            spacing: 4,\n            children: alluser === null || alluser === void 0 ? void 0 : (_alluser_chats = alluser.chats) === null || _alluser_chats === void 0 ? void 0 : _alluser_chats.map((chat, index)=>{\n                var _chat_messages, _chat_messages1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: chat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            onClick: ()=>{\n                                router.push(\"/chat/\".concat(chat.receiverId._id === (data === null || data === void 0 ? void 0 : data._id) ? chat.senderId._id : chat.receiverId._id));\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Badge, {\n                                    colorScheme: ((_chat_messages = chat.messages) === null || _chat_messages === void 0 ? void 0 : _chat_messages.length) > 0 ? \"green\" : \"red\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    pos: \"absolute\",\n                                    top: -2,\n                                    right: 0,\n                                    zIndex: 1,\n                                    borderRadius: \"full\",\n                                    children: (_chat_messages1 = chat.messages) === null || _chat_messages1 === void 0 ? void 0 : _chat_messages1.length\n                                }, index, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"Message from\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 19\n                                }, undefined),\n                                chat.receiverId.name === (data === null || data === void 0 ? void 0 : data.name) ? chat.senderId.name : chat.receiverId.name\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}, void 0, false, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 28\n                        }, undefined) : \"\"\n                    }, void 0, false)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chatdetail.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"z6u/dkXBvAv75Lh2krnU+pTF5xw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Chat;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdGRldGFpbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRMEI7QUFFYztBQUN1QjtBQUVpQjtBQUNoRixNQUFNWSxPQUFPO1FBQUMsRUFBRUMsT0FBTyxFQUFFO1FBbUJoQkE7O0lBbEJQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQTtJQUNoQyxNQUFNUyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTSxFQUFFYSxPQUFPLEVBQUVDLFVBQVUsRUFBRSxHQUFHVixpREFBVUEsQ0FBQ0MseUZBQWtCQTtJQUM3RFUsUUFBUUMsR0FBRyxDQUFDVCxTQUFTO0lBRXJCTCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQy9DVixRQUFRTTtRQUNSRixRQUFRQyxHQUFHLENBQUNOLE1BQU07SUFDcEIsR0FBRztRQUFDWTtLQUFJO0lBQ1JQLFFBQVFDLEdBQUcsQ0FBQ1IsTUFBTTtJQUVsQk8sUUFBUUMsR0FBRyxDQUFDTixNQUFNO0lBRWxCLHFCQUNFLDhEQUFDYix1REFBU0E7UUFBQzBCLE1BQU07UUFBU0MsTUFBTTtRQUFRQyxHQUFHO1FBQVFDLEdBQUc7a0JBQ3BELDRFQUFDM0Isb0RBQU1BO1lBQUM0QixTQUFTO3NCQUNkcEIsb0JBQUFBLCtCQUFBQSxpQkFBQUEsUUFBU3FCLEtBQUssY0FBZHJCLHFDQUFBQSxlQUFnQnNCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztvQkFpQkhELGdCQVVaQTtxQ0ExQlg7OEJBQ0dBLHFCQUNDLDhEQUFDbkMsaURBQUdBO2tDQUNGLDRFQUFDQyxvREFBTUE7NEJBRUxvQyxTQUFTO2dDQUNQcEIsT0FBT3FCLElBQUksQ0FDVCxTQUlDLE9BSENILEtBQUtJLFVBQVUsQ0FBQ0MsR0FBRyxNQUFLekIsaUJBQUFBLDJCQUFBQSxLQUFNeUIsR0FBRyxJQUM3QkwsS0FBS00sUUFBUSxDQUFDRCxHQUFHLEdBQ2pCTCxLQUFLSSxVQUFVLENBQUNDLEdBQUc7NEJBRzdCOzs4Q0FFQSw4REFBQ3pDLG1EQUFLQTtvQ0FDSjJDLGFBQWFQLEVBQUFBLGlCQUFBQSxLQUFLUSxRQUFRLGNBQWJSLHFDQUFBQSxlQUFlUyxNQUFNLElBQUcsSUFBSSxVQUFVO29DQUNuREMsVUFBVTtvQ0FDVkMsWUFBWTtvQ0FDWkMsS0FBSztvQ0FDTEMsS0FBSyxDQUFDO29DQUNOQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxjQUFjOytDQUdiaEIsa0JBQUFBLEtBQUtRLFFBQVEsY0FBYlIsc0NBQUFBLGdCQUFlUyxNQUFNO21DQUZqQlI7Ozs7O2dDQUdDOzhDQUVSLDhEQUFDZ0I7Ozs7O2dDQUNBakIsS0FBS0ksVUFBVSxDQUFDYyxJQUFJLE1BQUt0QyxpQkFBQUEsMkJBQUFBLEtBQU1zQyxJQUFJLElBQ2hDbEIsS0FBS00sUUFBUSxDQUFDWSxJQUFJLEdBQ2xCbEIsS0FBS0ksVUFBVSxDQUFDYyxJQUFJOzsyQkE1Qm5CakI7Ozs7O3VCQUZDQTs7OztrREFrQ1Y7a0NBQUdsQix3QkFBVSw4REFBQ2YscURBQU9BOzs7O3dDQUFNOzs7Ozs7Ozs7Ozs7OztBQU96QztHQS9ETVE7O1FBR1dOLGtEQUFTQTs7O0tBSHBCTTs7QUFpRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXRkZXRhaWwuanN4P2RhZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCYWRnZSxcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBTcGlubmVyLFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2FwcENvbnRleHQvQXBwbGljYXRpb25Db250ZXh0XCI7XHJcbmNvbnN0IENoYXQgPSAoeyBhbGx1c2VyIH0pID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBzZXRMb2FkaW5nIH0gPSB1c2VDb250ZXh0KEFwcGxpY2F0aW9uQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coYWxsdXNlciwgXCJBTExcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VycnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBzZXRkYXRhKHVzZXJycik7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBcInVzZXJcIik7XHJcbiAgfSwgW2FsbF0pO1xyXG4gIGNvbnNvbGUubG9nKHVzZXIsIFwibWVzc2FnZXNzc3MgXCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhLCBcIkRhdGFcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1pbkg9e1wiMTAwdmhcIn0gbWluVz17XCIxMDAlXCJ9IGg9e1wiMTAwJVwifSBwPXsyfT5cclxuICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fT5cclxuICAgICAgICB7YWxsdXNlcj8uY2hhdHM/Lm1hcCgoY2hhdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjaGF0ID8gKFxyXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgIGAvY2hhdC8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGF0LnJlY2VpdmVySWQuX2lkID09PSBkYXRhPy5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXQuc2VuZGVySWQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0LnJlY2VpdmVySWQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtjaGF0Lm1lc3NhZ2VzPy5sZW5ndGggPiAwID8gXCJncmVlblwiIDogXCJyZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17XCJsZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcz17XCJhYnNvbHV0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRvcD17LTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCJmdWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGF0Lm1lc3NhZ2VzPy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIE1lc3NhZ2UgZnJvbVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAge2NoYXQucmVjZWl2ZXJJZC5uYW1lID09PSBkYXRhPy5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjaGF0LnNlbmRlcklkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA6IGNoYXQucmVjZWl2ZXJJZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD57bG9hZGluZyA/IDxTcGlubmVyIC8+IDogXCJcIn08Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCBjb29raWVzID0gYXdhaXQgbm9va2llcy5nZXQoY3R4KTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvY2hhdHNgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzPy50b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVzPy5kYXRhLCBcImRhdGFcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGFsbHVzZXI6IHJlcz8uZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkJhZGdlIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiU3Bpbm5lciIsIlZTdGFjayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXBwbGljYXRpb25Db250ZXh0IiwiQ2hhdCIsImFsbHVzZXIiLCJ1c2VyIiwic2V0VXNlciIsImRhdGEiLCJzZXRkYXRhIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb25zb2xlIiwibG9nIiwidXNlcnJyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsbCIsIm1pbkgiLCJtaW5XIiwiaCIsInAiLCJzcGFjaW5nIiwiY2hhdHMiLCJtYXAiLCJjaGF0IiwiaW5kZXgiLCJvbkNsaWNrIiwicHVzaCIsInJlY2VpdmVySWQiLCJfaWQiLCJzZW5kZXJJZCIsImNvbG9yU2NoZW1lIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3MiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImJvcmRlclJhZGl1cyIsImJyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chatdetail.jsx\n"));

/***/ })

});