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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/appContext/ApplicationContext */ \"./src/components/appContext/ApplicationContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Chat = (param)=>{\n    let { alluser } = param;\n    var _alluser_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_3__.ApplicationContext);\n    console.log(alluser, \"ALL\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userrr = JSON.parse(localStorage.getItem(\"user\"));\n        setdata(userrr);\n        console.log(data, \"user\");\n    // const fetchUser = async () => {\n    //   setLoading(true);\n    //   const { data } = await axios.get(`${baseURL}/api/chat`, {\n    //     headers: {\n    //       Authorization: `Bearer ${nookies.get().token}`,\n    //     },\n    //   });\n    }, []);\n    console.log(user, \"messagessss \");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {\n            spacing: 4,\n            children: alluser === null || alluser === void 0 ? void 0 : (_alluser_chats = alluser.chats) === null || _alluser_chats === void 0 ? void 0 : _alluser_chats.map((chat, index)=>{\n                var _chat_messages, _chat_messages1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: chat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            onClick: ()=>{\n                                router.push(\"/chat/\".concat(chat.receiverId._id ? chat.senderId._id : chat.receiverId._id));\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Badge, {\n                                    colorScheme: ((_chat_messages = chat.messages) === null || _chat_messages === void 0 ? void 0 : _chat_messages.length) > 0 ? \"green\" : \"red\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    pos: \"absolute\",\n                                    top: -2,\n                                    right: 0,\n                                    zIndex: 1,\n                                    borderRadius: \"full\",\n                                    children: (_chat_messages1 = chat.messages) === null || _chat_messages1 === void 0 ? void 0 : _chat_messages1.length\n                                }, index, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"Message from\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 19\n                                }, undefined),\n                                chat.receiverId.name ? chat.senderId.name : chat.receiverId.name\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}, void 0, false, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 28\n                        }, undefined) : \"\"\n                    }, void 0, false)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"z6u/dkXBvAv75Lh2krnU+pTF5xw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Chat;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTMEI7QUFFYztBQUN1QjtBQUVpQjtBQUNoRixNQUFNYSxPQUFPO1FBQUMsRUFBRUMsT0FBTyxFQUFFO1FBd0JoQkE7O0lBdkJQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQTtJQUNoQyxNQUFNUyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTSxFQUFFYSxPQUFPLEVBQUVDLFVBQVUsRUFBRSxHQUFHVixpREFBVUEsQ0FBQ0MseUZBQWtCQTtJQUM3RFUsUUFBUUMsR0FBRyxDQUFDVCxTQUFTO0lBRXJCTCxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQy9DVixRQUFRTTtRQUNSRixRQUFRQyxHQUFHLENBQUNOLE1BQU07SUFDbEIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0Qiw4REFBOEQ7SUFDOUQsaUJBQWlCO0lBQ2pCLHdEQUF3RDtJQUN4RCxTQUFTO0lBQ1QsUUFBUTtJQUNWLEdBQUcsRUFBRTtJQUNMSyxRQUFRQyxHQUFHLENBQUNSLE1BQU07SUFFbEIscUJBQ0UsOERBQUNaLHVEQUFTQTtRQUFDMEIsTUFBTTtRQUFTQyxNQUFNO1FBQVFDLEdBQUc7UUFBUUMsR0FBRztrQkFDcEQsNEVBQUMxQixvREFBTUE7WUFBQzJCLFNBQVM7c0JBQ2RuQixvQkFBQUEsK0JBQUFBLGlCQUFBQSxRQUFTb0IsS0FBSyxjQUFkcEIscUNBQUFBLGVBQWdCcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQWlCSEQsZ0JBVVpBO3FDQTFCWDs4QkFDR0EscUJBQ0MsOERBQUNuQyxpREFBR0E7a0NBQ0YsNEVBQUNDLG9EQUFNQTs0QkFFTG9DLFNBQVM7Z0NBQ1BuQixPQUFPb0IsSUFBSSxDQUNULFNBSUMsT0FIQ0gsS0FBS0ksVUFBVSxDQUFDQyxHQUFHLEdBQ2ZMLEtBQUtNLFFBQVEsQ0FBQ0QsR0FBRyxHQUNqQkwsS0FBS0ksVUFBVSxDQUFDQyxHQUFHOzRCQUc3Qjs7OENBRUEsOERBQUN6QyxtREFBS0E7b0NBQ0oyQyxhQUFhUCxFQUFBQSxpQkFBQUEsS0FBS1EsUUFBUSxjQUFiUixxQ0FBQUEsZUFBZVMsTUFBTSxJQUFHLElBQUksVUFBVTtvQ0FDbkRDLFVBQVU7b0NBQ1ZDLFlBQVk7b0NBQ1pDLEtBQUs7b0NBQ0xDLEtBQUssQ0FBQztvQ0FDTkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsY0FBYzsrQ0FHYmhCLGtCQUFBQSxLQUFLUSxRQUFRLGNBQWJSLHNDQUFBQSxnQkFBZVMsTUFBTTttQ0FGakJSOzs7OztnQ0FHQzs4Q0FFUiw4REFBQ2dCOzs7OztnQ0FDQWpCLEtBQUtJLFVBQVUsQ0FBQ2MsSUFBSSxHQUVqQmxCLEtBQUtNLFFBQVEsQ0FBQ1ksSUFBSSxHQUNsQmxCLEtBQUtJLFVBQVUsQ0FBQ2MsSUFBSTs7MkJBN0JuQmpCOzs7Ozt1QkFGQ0E7Ozs7a0RBbUNWO2tDQUFHakIsd0JBQVUsOERBQUNoQixxREFBT0E7Ozs7d0NBQU07Ozs7Ozs7Ozs7Ozs7O0FBT3pDO0dBckVNUzs7UUFHV04sa0RBQVNBOzs7S0FIcEJNOztBQXVFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qc3g/YWMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZVVSTCBmcm9tIFwiQC9oZWxwZXIvYmFzZVVSTFwiO1xyXG5pbXBvcnQge1xyXG4gIEJhZGdlLFxyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIFNwaW5uZXIsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9hcHBDb250ZXh0L0FwcGxpY2F0aW9uQ29udGV4dFwiO1xyXG5jb25zdCBDaGF0ID0gKHsgYWxsdXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0ZGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbG9hZGluZywgc2V0TG9hZGluZyB9ID0gdXNlQ29udGV4dChBcHBsaWNhdGlvbkNvbnRleHQpO1xyXG4gIGNvbnNvbGUubG9nKGFsbHVzZXIsIFwiQUxMXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcnJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgc2V0ZGF0YSh1c2VycnIpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwgXCJ1c2VyXCIpO1xyXG4gICAgLy8gY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdGAsIHtcclxuICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bm9va2llcy5nZXQoKS50b2tlbn1gLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zb2xlLmxvZyh1c2VyLCBcIm1lc3NhZ2Vzc3NzIFwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWluSD17XCIxMDB2aFwifSBtaW5XPXtcIjEwMCVcIn0gaD17XCIxMDAlXCJ9IHA9ezJ9PlxyXG4gICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIHthbGx1c2VyPy5jaGF0cz8ubWFwKChjaGF0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2NoYXQgPyAoXHJcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYC9jaGF0LyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXQucmVjZWl2ZXJJZC5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXQuc2VuZGVySWQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGF0LnJlY2VpdmVySWQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtjaGF0Lm1lc3NhZ2VzPy5sZW5ndGggPiAwID8gXCJncmVlblwiIDogXCJyZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17XCJsZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcz17XCJhYnNvbHV0ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIHRvcD17LTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCJmdWxsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGF0Lm1lc3NhZ2VzPy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIE1lc3NhZ2UgZnJvbVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAge2NoYXQucmVjZWl2ZXJJZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgID8gY2hhdC5zZW5kZXJJZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgOiBjaGF0LnJlY2VpdmVySWQubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+e2xvYWRpbmcgPyA8U3Bpbm5lciAvPiA6IFwiXCJ9PC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgY29va2llcyA9IGF3YWl0IG5vb2tpZXMuZ2V0KGN0eCk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0YCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVzLmRhdGEsIFwiZGF0YVwiKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYWxsdXNlcjogcmVzLmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJCYWRnZSIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlNwaW5uZXIiLCJUZXh0IiwiVlN0YWNrIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJBcHBsaWNhdGlvbkNvbnRleHQiLCJDaGF0IiwiYWxsdXNlciIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldGRhdGEiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VycnIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWluSCIsIm1pblciLCJoIiwicCIsInNwYWNpbmciLCJjaGF0cyIsIm1hcCIsImNoYXQiLCJpbmRleCIsIm9uQ2xpY2siLCJwdXNoIiwicmVjZWl2ZXJJZCIsIl9pZCIsInNlbmRlcklkIiwiY29sb3JTY2hlbWUiLCJtZXNzYWdlcyIsImxlbmd0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvcyIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyUmFkaXVzIiwiYnIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});