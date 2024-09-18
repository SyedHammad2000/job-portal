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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Chat = ()=>{\n    var _user_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchUser = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat\"), {\n            headers: {\n                Authorization: \"Bearer \".concat(nookies__WEBPACK_IMPORTED_MODULE_4___default().get().token)\n            }\n        });\n        await setUser(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const userrr = JSON.parse(localStorage.getItem(\"user\"));\n        setdata();\n        fetchUser();\n    }, []);\n    console.log(data, \"user\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n            spacing: 4,\n            children: user === null || user === void 0 ? void 0 : (_user_chats = user.chats) === null || _user_chats === void 0 ? void 0 : _user_chats.map((chat)=>{\n                var _chat_messages, _chat_messages1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: ()=>{\n                                router.push(\"/chat/\".concat(chat.receiverId._id === data._id ? chat.senderId._id : chat.receiverId._id));\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Badge, {\n                                    colorScheme: ((_chat_messages = chat.messages) === null || _chat_messages === void 0 ? void 0 : _chat_messages.length) > 0 ? \"green\" : \"red\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    pos: \"absolute\",\n                                    top: -2,\n                                    right: 0,\n                                    zIndex: 1,\n                                    borderRadius: \"full\",\n                                    children: (_chat_messages1 = chat.messages) === null || _chat_messages1 === void 0 ? void 0 : _chat_messages1.length\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"Message from\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                chat.receiverId.name === data.name ? chat.senderId.name : chat.receiverId.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, undefined)\n                    }, chat._id, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"uKJ/OIWRXI+RDhBn/Vv5YTitcyc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDd0M7QUFDckQ7QUFDYztBQUNXO0FBQ3JCO0FBRTlCLE1BQU1hLE9BQU87UUF5QkpDOztJQXhCUCxNQUFNLENBQUNBLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTU8sU0FBU1Ysc0RBQVNBO0lBRXhCLE1BQU1XLFlBQVk7UUFDaEIsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBRyxNQUFNVCxpREFBUyxDQUFDLEdBQVcsT0FBUlAsdURBQU9BLEVBQUMsY0FBWTtZQUN0RHFCLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBOEIsT0FBcEJWLGtEQUFXLEdBQUdXLEtBQUs7WUFDOUM7UUFDRjtRQUVBLE1BQU1SLFFBQVFDO0lBQ2hCO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDL0NYO1FBQ0FFO0lBQ0YsR0FBRyxFQUFFO0lBQ0xVLFFBQVFDLEdBQUcsQ0FBQ2QsTUFBTTtJQUVsQixxQkFDRSw4REFBQ1osdURBQVNBO1FBQUMyQixNQUFNO1FBQVNDLE1BQU07UUFBUUMsR0FBRztRQUFRQyxHQUFHO2tCQUNwRCw0RUFBQzVCLG9EQUFNQTtZQUFDNkIsU0FBUztzQkFDZHJCLGlCQUFBQSw0QkFBQUEsY0FBQUEsS0FBTXNCLEtBQUssY0FBWHRCLGtDQUFBQSxZQUFhdUIsR0FBRyxDQUFDLENBQUNDO29CQWVJQSxnQkFTWkE7cUNBdkJUOzhCQUNFLDRFQUFDcEMsaURBQUdBO2tDQUNGLDRFQUFDQyxvREFBTUE7NEJBQ0xvQyxTQUFTO2dDQUNQckIsT0FBT3NCLElBQUksQ0FDVCxTQUlDLE9BSENGLEtBQUtHLFVBQVUsQ0FBQ0MsR0FBRyxLQUFLMUIsS0FBSzBCLEdBQUcsR0FDNUJKLEtBQUtLLFFBQVEsQ0FBQ0QsR0FBRyxHQUNqQkosS0FBS0csVUFBVSxDQUFDQyxHQUFHOzRCQUc3Qjs7OENBRUEsOERBQUN6QyxtREFBS0E7b0NBQ0oyQyxhQUFhTixFQUFBQSxpQkFBQUEsS0FBS08sUUFBUSxjQUFiUCxxQ0FBQUEsZUFBZVEsTUFBTSxJQUFHLElBQUksVUFBVTtvQ0FDbkRDLFVBQVU7b0NBQ1ZDLFlBQVk7b0NBQ1pDLEtBQUs7b0NBQ0xDLEtBQUssQ0FBQztvQ0FDTkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsY0FBYzsrQ0FFYmYsa0JBQUFBLEtBQUtPLFFBQVEsY0FBYlAsc0NBQUFBLGdCQUFlUSxNQUFNOzs7Ozs7Z0NBQ2hCOzhDQUVSLDhEQUFDUTs7Ozs7Z0NBQ0FoQixLQUFLRyxVQUFVLENBQUNjLElBQUksS0FBS3ZDLEtBQUt1QyxJQUFJLEdBQy9CakIsS0FBS0ssUUFBUSxDQUFDWSxJQUFJLEdBQ2xCakIsS0FBS0csVUFBVSxDQUFDYyxJQUFJOzs7Ozs7O3VCQTVCbEJqQixLQUFLSSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9DOUI7R0EvRE03Qjs7UUFHV0wsa0RBQVNBOzs7S0FIcEJLO0FBaUVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0LmpzeD9hYzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7IEJhZGdlLCBCb3gsIEJ1dHRvbiwgQ29udGFpbmVyLCBUZXh0LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuY29uc3QgQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0YCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke25vb2tpZXMuZ2V0KCkudG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHNldFVzZXIoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHNldGRhdGEoKVxyXG4gICAgZmV0Y2hVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsIFwidXNlclwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWluSD17XCIxMDB2aFwifSBtaW5XPXtcIjEwMCVcIn0gaD17XCIxMDAlXCJ9IHA9ezJ9PlxyXG4gICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIHt1c2VyPy5jaGF0cz8ubWFwKChjaGF0KSA9PiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IGtleT17Y2hhdC5faWR9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgYC9jaGF0LyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGF0LnJlY2VpdmVySWQuX2lkID09PSBkYXRhLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXQuc2VuZGVySWQuX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2hhdC5yZWNlaXZlcklkLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgIH1gXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT17Y2hhdC5tZXNzYWdlcz8ubGVuZ3RoID4gMCA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPXtcImxnXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9e1wiYm9sZFwifVxyXG4gICAgICAgICAgICAgICAgICBwb3M9e1wiYWJzb2x1dGVcIn1cclxuICAgICAgICAgICAgICAgICAgdG9wPXstMn1cclxuICAgICAgICAgICAgICAgICAgcmlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgIHpJbmRleD17MX1cclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcImZ1bGxcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2NoYXQubWVzc2FnZXM/Lmxlbmd0aH1cclxuICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICBNZXNzYWdlIGZyb21cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAge2NoYXQucmVjZWl2ZXJJZC5uYW1lID09PSBkYXRhLm5hbWVcclxuICAgICAgICAgICAgICAgICAgPyBjaGF0LnNlbmRlcklkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgOiBjaGF0LnJlY2VpdmVySWQubmFtZX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCYWRnZSIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlRleHQiLCJWU3RhY2siLCJheGlvcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJub29raWVzIiwiQ2hhdCIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldGRhdGEiLCJyb3V0ZXIiLCJmZXRjaFVzZXIiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwidXNlcnJyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJtaW5IIiwibWluVyIsImgiLCJwIiwic3BhY2luZyIsImNoYXRzIiwibWFwIiwiY2hhdCIsIm9uQ2xpY2siLCJwdXNoIiwicmVjZWl2ZXJJZCIsIl9pZCIsInNlbmRlcklkIiwiY29sb3JTY2hlbWUiLCJtZXNzYWdlcyIsImxlbmd0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInBvcyIsInRvcCIsInJpZ2h0IiwiekluZGV4IiwiYm9yZGVyUmFkaXVzIiwiYnIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});