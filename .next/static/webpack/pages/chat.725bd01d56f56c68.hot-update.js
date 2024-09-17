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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Chat = ()=>{\n    var _user_chats;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchUser = async ()=>{\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"token\"))\n                }\n            });\n            setUser(data);\n        };\n        fetchUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        minH: \"100vh\",\n        minW: \"100%\",\n        h: \"100%\",\n        p: 1,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {\n            spacing: 4,\n            align: \"left\",\n            children: user === null || user === void 0 ? void 0 : (_user_chats = user.chats) === null || _user_chats === void 0 ? void 0 : _user_chats.map((chat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        children: chat.receiverId.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                }, chat._id, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Chat, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = Chat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chat);\nvar _c;\n$RefreshReg$(_c, \"Chat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNnRDtBQUM3RDtBQUN5QjtBQUVuRCxNQUFNWSxPQUFPO1FBb0JKQzs7SUFuQlAsTUFBTSxDQUFDQSxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQTtJQUVoQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxZQUFZO1lBQ2hCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVIsaURBQVMsQ0FBQyxHQUFXLE9BQVJSLHVEQUFPQSxFQUFDLGNBQVk7Z0JBQ3REa0IsU0FBUztvQkFDUEMsZUFBZSxVQUF3QyxPQUE5QkMsYUFBYUMsT0FBTyxDQUFDO2dCQUNoRDtZQUNGO1lBRUFQLFFBQVFFO1FBQ1Y7UUFFQUQ7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2IsdURBQVNBO1FBQUNvQixNQUFNO1FBQVNDLE1BQU07UUFBUUMsR0FBRztRQUFRQyxHQUFHO2tCQUNwRCw0RUFBQ3BCLG9EQUFNQTtZQUFDcUIsU0FBUztZQUFHQyxPQUFPO3NCQUN4QmQsaUJBQUFBLDRCQUFBQSxjQUFBQSxLQUFNZSxLQUFLLGNBQVhmLGtDQUFBQSxZQUFhZ0IsR0FBRyxDQUFDLENBQUNDLHFCQUNqQiw4REFBQzdCLGlEQUFHQTs4QkFDRiw0RUFBQ0ssa0RBQUlBO2tDQUFFd0IsS0FBS0MsVUFBVSxDQUFDQyxJQUFJOzs7Ozs7bUJBRG5CRixLQUFLRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7QUFTNUI7R0E5Qk1yQjtLQUFBQTtBQWdDTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC5qc3g/YWMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZVVSTCBmcm9tIFwiQC9oZWxwZXIvYmFzZVVSTFwiO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgSGVhZGluZywgSFN0YWNrLCBUZXh0LCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1pbkg9e1wiMTAwdmhcIn0gbWluVz17XCIxMDAlXCJ9IGg9e1wiMTAwJVwifSBwPXsxfT5cclxuICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJsZWZ0XCJ9ID5cclxuICAgICAgICB7dXNlcj8uY2hhdHM/Lm1hcCgoY2hhdCkgPT4gKFxyXG4gICAgICAgICAgPEJveCBrZXk9e2NoYXQuX2lkfT5cclxuICAgICAgICAgICAgPFRleHQ+e2NoYXQucmVjZWl2ZXJJZC5uYW1lfTwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0hTdGFjaz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xyXG4iXSwibmFtZXMiOlsiYmFzZVVSTCIsIkJveCIsIkNvbnRhaW5lciIsIkdyaWQiLCJIZWFkaW5nIiwiSFN0YWNrIiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYXQiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoVXNlciIsImRhdGEiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtaW5IIiwibWluVyIsImgiLCJwIiwic3BhY2luZyIsImFsaWduIiwiY2hhdHMiLCJtYXAiLCJjaGF0IiwicmVjZWl2ZXJJZCIsIm5hbWUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat.jsx\n"));

/***/ })

});