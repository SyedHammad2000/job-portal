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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/appContext/ApplicationContext */ \"./src/components/appContext/ApplicationContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Chat = ()=>{\n    var _user_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { loading, SetLoading } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__.ApplicationContext);\n    const fetchUser = async ()=>{\n        SetLoading(true);\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat\"), {\n            headers: {\n                Authorization: \"Bearer \".concat(nookies__WEBPACK_IMPORTED_MODULE_4___default().get().token)\n            }\n        });\n        await setUser(data);\n        setL;\n    };\n    console.log(user, \"messagessss \");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchUser();\n        const userrr = JSON.parse(localStorage.getItem(\"user\"));\n        setdata(userrr);\n        console.log(data, \"user\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n            spacing: 4,\n            children: user === null || user === void 0 ? void 0 : (_user_chats = user.chats) === null || _user_chats === void 0 ? void 0 : _user_chats.map((chat, index)=>{\n                var _chat_messages, _chat_messages1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: ()=>{\n                                router.push(\"/chat/\".concat(chat.receiverId._id === data._id ? chat.senderId._id : chat.receiverId._id));\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Badge, {\n                                    colorScheme: ((_chat_messages = chat.messages) === null || _chat_messages === void 0 ? void 0 : _chat_messages.length) > 0 ? \"green\" : \"red\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    pos: \"absolute\",\n                                    top: -2,\n                                    right: 0,\n                                    zIndex: 1,\n                                    borderRadius: \"full\",\n                                    children: (_chat_messages1 = chat.messages) === null || _chat_messages1 === void 0 ? void 0 : _chat_messages1.length\n                                }, index, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"Message from\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, undefined),\n                                chat.receiverId.name === data.name ? chat.senderId.name : chat.receiverId.name\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"xm/RvHdY1b3MRuhLa2rYOOOcAd4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3dDO0FBQ3JEO0FBQ2M7QUFDdUI7QUFDakM7QUFDa0Q7QUFFaEYsTUFBTWUsT0FBTztRQThCSkM7O0lBN0JQLE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQTtJQUNoQyxNQUFNUyxTQUFTWixzREFBU0E7SUFDeEIsTUFBTSxFQUFFYSxPQUFPLEVBQUVDLFVBQVUsRUFBRSxHQUFHVixpREFBVUEsQ0FBQ0UseUZBQWtCQTtJQUU3RCxNQUFNUyxZQUFZO1FBQ2hCRCxXQUFXO1FBQ1gsTUFBTSxFQUFFSixJQUFJLEVBQUUsR0FBRyxNQUFNWCxpREFBUyxDQUFDLEdBQVcsT0FBUlAsdURBQU9BLEVBQUMsY0FBWTtZQUN0RHlCLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBOEIsT0FBcEJiLGtEQUFXLEdBQUdjLEtBQUs7WUFDOUM7UUFDRjtRQUVBLE1BQU1WLFFBQVFDO1FBQ2RVO0lBRUY7SUFDQUMsUUFBUUMsR0FBRyxDQUFDZCxNQUFLO0lBRWpCTixnREFBU0EsQ0FBQztRQUNSYTtRQUNBLE1BQU1RLFNBQVNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQy9DaEIsUUFBUVk7UUFDUkYsUUFBUUMsR0FBRyxDQUFDWixNQUFNO0lBQ3BCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZCx1REFBU0E7UUFBQ2dDLE1BQU07UUFBU0MsTUFBTTtRQUFRQyxHQUFHO1FBQVFDLEdBQUc7a0JBQ3BELDRFQUFDakMsb0RBQU1BO1lBQUNrQyxTQUFTO3NCQUNkeEIsaUJBQUFBLDRCQUFBQSxjQUFBQSxLQUFNeUIsS0FBSyxjQUFYekIsa0NBQUFBLFlBQWEwQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7b0JBZ0JGRCxnQkFVWkE7cUNBekJUOzhCQUNFLDRFQUFDekMsaURBQUdBO2tDQUNGLDRFQUFDQyxvREFBTUE7NEJBRUwwQyxTQUFTO2dDQUNQekIsT0FBTzBCLElBQUksQ0FDVCxTQUlDLE9BSENILEtBQUtJLFVBQVUsQ0FBQ0MsR0FBRyxLQUFLOUIsS0FBSzhCLEdBQUcsR0FDNUJMLEtBQUtNLFFBQVEsQ0FBQ0QsR0FBRyxHQUNqQkwsS0FBS0ksVUFBVSxDQUFDQyxHQUFHOzRCQUc3Qjs7OENBRUEsOERBQUMvQyxtREFBS0E7b0NBQ0ppRCxhQUFhUCxFQUFBQSxpQkFBQUEsS0FBS1EsUUFBUSxjQUFiUixxQ0FBQUEsZUFBZVMsTUFBTSxJQUFHLElBQUksVUFBVTtvQ0FDbkRDLFVBQVU7b0NBQ1ZDLFlBQVk7b0NBQ1pDLEtBQUs7b0NBQ0xDLEtBQUssQ0FBQztvQ0FDTkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsY0FBYzsrQ0FHYmhCLGtCQUFBQSxLQUFLUSxRQUFRLGNBQWJSLHNDQUFBQSxnQkFBZVMsTUFBTTttQ0FGakJSOzs7OztnQ0FHQzs4Q0FFUiw4REFBQ2dCOzs7OztnQ0FDQWpCLEtBQUtJLFVBQVUsQ0FBQ2MsSUFBSSxLQUFLM0MsS0FBSzJDLElBQUksR0FDL0JsQixLQUFLTSxRQUFRLENBQUNZLElBQUksR0FDbEJsQixLQUFLSSxVQUFVLENBQUNjLElBQUk7OzJCQTVCbkJqQjs7Ozs7dUJBRkNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXNDdEI7R0F0RU03Qjs7UUFHV1Asa0RBQVNBOzs7S0FIcEJPO0FBd0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0LmpzeD9hYzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7IEJhZGdlLCBCb3gsIEJ1dHRvbiwgQ29udGFpbmVyLCBUZXh0LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2FwcENvbnRleHQvQXBwbGljYXRpb25Db250ZXh0XCI7XHJcblxyXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RhdGEsIHNldGRhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGxvYWRpbmcsIFNldExvYWRpbmcgfSA9IHVzZUNvbnRleHQoQXBwbGljYXRpb25Db250ZXh0KTtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgU2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0YCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke25vb2tpZXMuZ2V0KCkudG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHNldFVzZXIoZGF0YSk7XHJcbiAgICBzZXRMXHJcblxyXG4gIH07XHJcbiAgY29uc29sZS5sb2codXNlciwnbWVzc2FnZXNzc3MgJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHNldGRhdGEodXNlcnJyKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEsIFwidXNlclwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1pbkg9e1wiMTAwdmhcIn0gbWluVz17XCIxMDAlXCJ9IGg9e1wiMTAwJVwifSBwPXsyfT5cclxuICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fT5cclxuICAgICAgICB7dXNlcj8uY2hhdHM/Lm1hcCgoY2hhdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgYC9jaGF0LyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGF0LnJlY2VpdmVySWQuX2lkID09PSBkYXRhLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXQuc2VuZGVySWQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdC5yZWNlaXZlcklkLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17Y2hhdC5tZXNzYWdlcz8ubGVuZ3RoID4gMCA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXtcImxnXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxyXG4gICAgICAgICAgICAgICAgICBwb3M9e1wiYWJzb2x1dGVcIn1cclxuICAgICAgICAgICAgICAgICAgdG9wPXstMn1cclxuICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcImZ1bGxcIn1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2NoYXQubWVzc2FnZXM/Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlIGZyb21cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge2NoYXQucmVjZWl2ZXJJZC5uYW1lID09PSBkYXRhLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBjaGF0LnNlbmRlcklkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgOiBjaGF0LnJlY2VpdmVySWQubmFtZX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCYWRnZSIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlRleHQiLCJWU3RhY2siLCJheGlvcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0Iiwibm9va2llcyIsIkFwcGxpY2F0aW9uQ29udGV4dCIsIkNoYXQiLCJ1c2VyIiwic2V0VXNlciIsImRhdGEiLCJzZXRkYXRhIiwicm91dGVyIiwibG9hZGluZyIsIlNldExvYWRpbmciLCJmZXRjaFVzZXIiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwic2V0TCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VycnIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibWluSCIsIm1pblciLCJoIiwicCIsInNwYWNpbmciLCJjaGF0cyIsIm1hcCIsImNoYXQiLCJpbmRleCIsIm9uQ2xpY2siLCJwdXNoIiwicmVjZWl2ZXJJZCIsIl9pZCIsInNlbmRlcklkIiwiY29sb3JTY2hlbWUiLCJtZXNzYWdlcyIsImxlbmd0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvcyIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyUmFkaXVzIiwiYnIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});