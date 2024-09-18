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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Chat = ()=>{\n    var _user_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const fetchUser = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat\"), {\n            headers: {\n                Authorization: \"Bearer \".concat(nookies__WEBPACK_IMPORTED_MODULE_4___default().get().token)\n            }\n        });\n        await setUser(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setdata(JSON.parse(localStorage.getItem(\"user\")));\n        fetchUser();\n    }, []);\n    console.log(data, \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 2,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n            spacing: 4,\n            children: user === null || user === void 0 ? void 0 : (_user_chats = user.chats) === null || _user_chats === void 0 ? void 0 : _user_chats.map((chat)=>{\n                var _chat_messages, _chat_messages1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            onClick: ()=>{\n                                router.push(\"/chat/\".concat(chat.receiverId._id === data._id ? chat.senderId._id : chat.receiverId._id));\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Badge, {\n                                    colorScheme: ((_chat_messages = chat.messages) === null || _chat_messages === void 0 ? void 0 : _chat_messages.length) > 0 ? \"green\" : \"red\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    pos: \"absolute\",\n                                    top: -2,\n                                    right: 0,\n                                    zIndex: 1,\n                                    borderRadius: \"full\",\n                                    children: (_chat_messages1 = chat.messages) === null || _chat_messages1 === void 0 ? void 0 : _chat_messages1.length\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined),\n                                \"Message from\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                chat.receiverId.name === data.name ? chat.senderId.name : chat.receiverId.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined)\n                    }, chat._id, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"uKJ/OIWRXI+RDhBn/Vv5YTitcyc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDd0M7QUFDckQ7QUFDYztBQUNXO0FBQ3JCO0FBRTlCLE1BQU1hLE9BQU87UUF3QkpDOztJQXZCUCxNQUFNLENBQUNBLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTU8sU0FBU1Ysc0RBQVNBO0lBRXhCLE1BQU1XLFlBQVk7UUFDaEIsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBRyxNQUFNVCxpREFBUyxDQUFDLEdBQVcsT0FBUlAsdURBQU9BLEVBQUMsY0FBWTtZQUN0RHFCLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBOEIsT0FBcEJWLGtEQUFXLEdBQUdXLEtBQUs7WUFDOUM7UUFDRjtRQUVBLE1BQU1SLFFBQVFDO0lBQ2hCO0lBRUFOLGdEQUFTQSxDQUFDO1FBQ1JPLFFBQVFPLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3hDUjtJQUNGLEdBQUcsRUFBRTtJQUNMUyxRQUFRQyxHQUFHLENBQUNiLE1BQUs7SUFFakIscUJBQ0UsOERBQUNaLHVEQUFTQTtRQUFDMEIsTUFBTTtRQUFTQyxNQUFNO1FBQVFDLEdBQUc7UUFBUUMsR0FBRztrQkFDcEQsNEVBQUMzQixvREFBTUE7WUFBQzRCLFNBQVM7c0JBQ2RwQixpQkFBQUEsNEJBQUFBLGNBQUFBLEtBQU1xQixLQUFLLGNBQVhyQixrQ0FBQUEsWUFBYXNCLEdBQUcsQ0FBQyxDQUFDQztvQkFlSUEsZ0JBU1pBO3FDQXZCVDs4QkFDRSw0RUFBQ25DLGlEQUFHQTtrQ0FDRiw0RUFBQ0Msb0RBQU1BOzRCQUNMbUMsU0FBUztnQ0FDUHBCLE9BQU9xQixJQUFJLENBQ1QsU0FJQyxPQUhDRixLQUFLRyxVQUFVLENBQUNDLEdBQUcsS0FBS3pCLEtBQUt5QixHQUFHLEdBQzVCSixLQUFLSyxRQUFRLENBQUNELEdBQUcsR0FDakJKLEtBQUtHLFVBQVUsQ0FBQ0MsR0FBRzs0QkFHN0I7OzhDQUVBLDhEQUFDeEMsbURBQUtBO29DQUNKMEMsYUFBYU4sRUFBQUEsaUJBQUFBLEtBQUtPLFFBQVEsY0FBYlAscUNBQUFBLGVBQWVRLE1BQU0sSUFBRyxJQUFJLFVBQVU7b0NBQ25EQyxVQUFVO29DQUNWQyxZQUFZO29DQUNaQyxLQUFLO29DQUNMQyxLQUFLLENBQUM7b0NBQ05DLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLGNBQWM7K0NBRWJmLGtCQUFBQSxLQUFLTyxRQUFRLGNBQWJQLHNDQUFBQSxnQkFBZVEsTUFBTTs7Ozs7O2dDQUNoQjs4Q0FFUiw4REFBQ1E7Ozs7O2dDQUNBaEIsS0FBS0csVUFBVSxDQUFDYyxJQUFJLEtBQUt0QyxLQUFLc0MsSUFBSSxHQUMvQmpCLEtBQUtLLFFBQVEsQ0FBQ1ksSUFBSSxHQUNsQmpCLEtBQUtHLFVBQVUsQ0FBQ2MsSUFBSTs7Ozs7Ozt1QkE1QmxCakIsS0FBS0ksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQzlCO0dBOURNNUI7O1FBR1dMLGtEQUFTQTs7O0tBSHBCSztBQWdFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qc3g/YWMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZVVSTCBmcm9tIFwiQC9oZWxwZXIvYmFzZVVSTFwiO1xyXG5pbXBvcnQgeyBCYWRnZSwgQm94LCBCdXR0b24sIENvbnRhaW5lciwgVGV4dCwgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuXHJcbmNvbnN0IENoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0ZGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdGAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtub29raWVzLmdldCgpLnRva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBzZXRVc2VyKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRkYXRhKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSk7XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICB9LCBbXSk7XHJcbiAgY29uc29sZS5sb2coZGF0YSwnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1pbkg9e1wiMTAwdmhcIn0gbWluVz17XCIxMDAlXCJ9IGg9e1wiMTAwJVwifSBwPXsyfT5cclxuICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fT5cclxuICAgICAgICB7dXNlcj8uY2hhdHM/Lm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBrZXk9e2NoYXQuX2lkfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGAvY2hhdC8ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2hhdC5yZWNlaXZlcklkLl9pZCA9PT0gZGF0YS5faWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGF0LnNlbmRlcklkLl9pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNoYXQucmVjZWl2ZXJJZC5faWRcclxuICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9e2NoYXQubWVzc2FnZXM/Lmxlbmd0aCA+IDAgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT17XCJsZ1wifVxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXtcImJvbGRcIn1cclxuICAgICAgICAgICAgICAgICAgcG9zPXtcImFic29sdXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRvcD17LTJ9XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxyXG4gICAgICAgICAgICAgICAgICB6SW5kZXg9ezF9XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCJmdWxsXCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtjaGF0Lm1lc3NhZ2VzPy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgTWVzc2FnZSBmcm9tXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIHtjaGF0LnJlY2VpdmVySWQubmFtZSA9PT0gZGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgID8gY2hhdC5zZW5kZXJJZC5uYW1lXHJcbiAgICAgICAgICAgICAgICAgIDogY2hhdC5yZWNlaXZlcklkLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XHJcbiJdLCJuYW1lcyI6WyJiYXNlVVJMIiwiQmFkZ2UiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJUZXh0IiwiVlN0YWNrIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibm9va2llcyIsIkNoYXQiLCJ1c2VyIiwic2V0VXNlciIsImRhdGEiLCJzZXRkYXRhIiwicm91dGVyIiwiZmV0Y2hVc2VyIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWluSCIsIm1pblciLCJoIiwicCIsInNwYWNpbmciLCJjaGF0cyIsIm1hcCIsImNoYXQiLCJvbkNsaWNrIiwicHVzaCIsInJlY2VpdmVySWQiLCJfaWQiLCJzZW5kZXJJZCIsImNvbG9yU2NoZW1lIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwb3MiLCJ0b3AiLCJyaWdodCIsInpJbmRleCIsImJvcmRlclJhZGl1cyIsImJyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});