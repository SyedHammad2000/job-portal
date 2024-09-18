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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/appContext/ApplicationContext */ \"./src/components/appContext/ApplicationContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chat = ()=>{\n    var _user_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__.ApplicationContext);\n    const fetchUser = async ()=>{\n        setLoading(true);\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat\"), {\n            headers: {\n                Authorization: \"Bearer \".concat(nookies__WEBPACK_IMPORTED_MODULE_4___default().get().token)\n            }\n        });\n        await setUser(data);\n        setLoading(false);\n    };\n    console.log(user, \"messagessss \");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchUser();\n        const userrr = JSON.parse(localStorage.getItem(\"user\"));\n        setdata(userrr);\n        console.log(data, \"user\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n            spacing: 4,\n            children: user === null || user === void 0 ? void 0 : (_user_chats = user.chats) === null || _user_chats === void 0 ? void 0 : _user_chats.map((chat, index)=>{\n                var _chat_messages, _chat_messages1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: chat ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: ()=>{\n                                router.push(\"/chat/\".concat(chat.receiverId._id === data._id ? chat.senderId._id : chat.receiverId._id));\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Badge, {\n                                    colorScheme: ((_chat_messages = chat.messages) === null || _chat_messages === void 0 ? void 0 : _chat_messages.length) > 0 ? \"green\" : \"red\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    pos: \"absolute\",\n                                    top: -2,\n                                    right: 0,\n                                    zIndex: 1,\n                                    borderRadius: \"full\",\n                                    children: (_chat_messages1 = chat.messages) === null || _chat_messages1 === void 0 ? void 0 : _chat_messages1.length\n                                }, index, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, undefined),\n                                \"Message from\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 19\n                                }, undefined),\n                                chat.receiverId.name === data.name ? chat.senderId.name : chat.receiverId.name\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: Loadi\n                    }, void 0, false)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"z6u/dkXBvAv75Lh2krnU+pTF5xw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3dDO0FBQ3JEO0FBQ2M7QUFDdUI7QUFDakM7QUFDa0Q7QUFFaEYsTUFBTWUsT0FBTztRQTZCSkM7O0lBNUJQLE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQTtJQUNoQyxNQUFNUyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTSxFQUFFYSxPQUFPLEVBQUVDLFVBQVUsRUFBRSxHQUFHVixpREFBVUEsQ0FBQ0UseUZBQWtCQTtJQUU3RCxNQUFNUyxZQUFZO1FBQ2hCRCxXQUFXO1FBQ1gsTUFBTSxFQUFFSixJQUFJLEVBQUUsR0FBRyxNQUFNWCxpREFBUyxDQUFDLEdBQVcsT0FBUlAsdURBQU9BLEVBQUMsY0FBWTtZQUN0RHlCLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBOEIsT0FBcEJiLGtEQUFXLEdBQUdjLEtBQUs7WUFDOUM7UUFDRjtRQUVBLE1BQU1WLFFBQVFDO1FBQ2RJLFdBQVc7SUFDYjtJQUNBTSxRQUFRQyxHQUFHLENBQUNiLE1BQU07SUFFbEJOLGdEQUFTQSxDQUFDO1FBQ1JhO1FBQ0EsTUFBTU8sU0FBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDL0NmLFFBQVFXO1FBQ1JGLFFBQVFDLEdBQUcsQ0FBQ1gsTUFBTTtJQUNwQixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2QsdURBQVNBO1FBQUMrQixNQUFNO1FBQVNDLE1BQU07UUFBUUMsR0FBRztRQUFRQyxHQUFHO2tCQUNwRCw0RUFBQ2hDLG9EQUFNQTtZQUFDaUMsU0FBUztzQkFDZHZCLGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTXdCLEtBQUssY0FBWHhCLGtDQUFBQSxZQUFheUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DO29CQWlCQUQsZ0JBVVpBO3FDQTFCWDs4QkFDR0EscUJBQ0MsOERBQUN4QyxpREFBR0E7a0NBQ0YsNEVBQUNDLG9EQUFNQTs0QkFFTHlDLFNBQVM7Z0NBQ1B4QixPQUFPeUIsSUFBSSxDQUNULFNBSUMsT0FIQ0gsS0FBS0ksVUFBVSxDQUFDQyxHQUFHLEtBQUs3QixLQUFLNkIsR0FBRyxHQUM1QkwsS0FBS00sUUFBUSxDQUFDRCxHQUFHLEdBQ2pCTCxLQUFLSSxVQUFVLENBQUNDLEdBQUc7NEJBRzdCOzs4Q0FFQSw4REFBQzlDLG1EQUFLQTtvQ0FDSmdELGFBQWFQLEVBQUFBLGlCQUFBQSxLQUFLUSxRQUFRLGNBQWJSLHFDQUFBQSxlQUFlUyxNQUFNLElBQUcsSUFBSSxVQUFVO29DQUNuREMsVUFBVTtvQ0FDVkMsWUFBWTtvQ0FDWkMsS0FBSztvQ0FDTEMsS0FBSyxDQUFDO29DQUNOQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxjQUFjOytDQUdiaEIsa0JBQUFBLEtBQUtRLFFBQVEsY0FBYlIsc0NBQUFBLGdCQUFlUyxNQUFNO21DQUZqQlI7Ozs7O2dDQUdDOzhDQUVSLDhEQUFDZ0I7Ozs7O2dDQUNBakIsS0FBS0ksVUFBVSxDQUFDYyxJQUFJLEtBQUsxQyxLQUFLMEMsSUFBSSxHQUMvQmxCLEtBQUtNLFFBQVEsQ0FBQ1ksSUFBSSxHQUNsQmxCLEtBQUtJLFVBQVUsQ0FBQ2MsSUFBSTs7MkJBNUJuQmpCOzs7Ozt1QkFGQ0E7Ozs7a0RBa0NWO2tDQUVFa0I7Ozs7Ozs7Ozs7Ozs7O0FBU2hCO0dBN0VNOUM7O1FBR1dQLGtEQUFTQTs7O0tBSHBCTztBQStFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qc3g/YWMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZVVSTCBmcm9tIFwiQC9oZWxwZXIvYmFzZVVSTFwiO1xyXG5pbXBvcnQgeyBCYWRnZSwgQm94LCBCdXR0b24sIENvbnRhaW5lciwgVGV4dCwgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9hcHBDb250ZXh0L0FwcGxpY2F0aW9uQ29udGV4dFwiO1xyXG5cclxuY29uc3QgQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBzZXRMb2FkaW5nIH0gPSB1c2VDb250ZXh0KEFwcGxpY2F0aW9uQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdGAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtub29raWVzLmdldCgpLnRva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBzZXRVc2VyKGRhdGEpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyh1c2VyLCBcIm1lc3NhZ2Vzc3NzIFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVXNlcigpO1xyXG4gICAgY29uc3QgdXNlcnJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgc2V0ZGF0YSh1c2VycnIpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwgXCJ1c2VyXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWluSD17XCIxMDB2aFwifSBtaW5XPXtcIjEwMCVcIn0gaD17XCIxMDAlXCJ9IHA9ezJ9PlxyXG4gICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIHt1c2VyPy5jaGF0cz8ubWFwKChjaGF0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge2NoYXQgPyAoXHJcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgYC9jaGF0LyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXQucmVjZWl2ZXJJZC5faWQgPT09IGRhdGEuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGF0LnNlbmRlcklkLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdC5yZWNlaXZlcklkLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17Y2hhdC5tZXNzYWdlcz8ubGVuZ3RoID4gMCA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9e1wibGdcIn1cclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXtcImJvbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBwb3M9e1wiYWJzb2x1dGVcIn1cclxuICAgICAgICAgICAgICAgICAgICB0b3A9ey0yfVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxyXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9e1wiZnVsbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hhdC5tZXNzYWdlcz8ubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICBNZXNzYWdlIGZyb21cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGF0LnJlY2VpdmVySWQubmFtZSA9PT0gZGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjaGF0LnNlbmRlcklkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICA6IGNoYXQucmVjZWl2ZXJJZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iXSwibmFtZXMiOlsiYmFzZVVSTCIsIkJhZGdlIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJub29raWVzIiwiQXBwbGljYXRpb25Db250ZXh0IiwiQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldGRhdGEiLCJyb3V0ZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoVXNlciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwidXNlcnJyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm1pbkgiLCJtaW5XIiwiaCIsInAiLCJzcGFjaW5nIiwiY2hhdHMiLCJtYXAiLCJjaGF0IiwiaW5kZXgiLCJvbkNsaWNrIiwicHVzaCIsInJlY2VpdmVySWQiLCJfaWQiLCJzZW5kZXJJZCIsImNvbG9yU2NoZW1lIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3MiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImJvcmRlclJhZGl1cyIsImJyIiwibmFtZSIsIkxvYWRpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});