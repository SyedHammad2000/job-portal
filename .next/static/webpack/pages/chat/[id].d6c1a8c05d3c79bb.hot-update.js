"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat/[id]",{

/***/ "./src/pages/chat/[id].jsx":
/*!*********************************!*\
  !*** ./src/pages/chat/[id].jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/appContext/ApplicationContext */ \"./src/components/appContext/ApplicationContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { loader, setLoader, loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__.ApplicationContext);\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    const fetchUser = async ()=>{\n        var _res_data_chat, _res_data;\n        if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n            return console.log(\"erroe\");\n        }\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(\"res\", res === null || res === void 0 ? void 0 : res.data);\n        SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUser();\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        setUser(userId);\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"abc\";\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"4d4ed87c336a296d9617\", {\n            cluster: \"ap1\",\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev || [],\n                    data\n                ]);\n            console.log(\"message\", data);\n        });\n        return ()=>{\n            pusher.unbind_all();\n            pusher.unsubscribe(Channelname);\n        };\n    }, [\n        id\n    ]);\n    console.log(user, \"user\");\n    const handleClick = async (e)=>{\n        setLoading(true);\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n            SetMessage(\"\");\n            setLoading(false);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const createClick = async (e)=>{\n        setLoading(true);\n        e.preventDefault();\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n            text: \"Hi Now you can chat...\"\n        }, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(data === null || data === void 0 ? void 0 : data.chat);\n        if (data === null || data === void 0 ? void 0 : data.chat) {\n            setLoading(false);\n            window.location.reload();\n        }\n    };\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 139,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                // bg=\"grey\"\n                opacity: (messages === null || messages === void 0 ? void 0 : messages.length) > 0 ? \"1\" : \"0.5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 162,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    color: msg.sender === user.name ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 165,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 158,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 155,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, undefined),\n            (messages === null || messages === void 0 ? void 0 : messages.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Spinner, {\n                    size: \"md\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 186,\n                    columnNumber: 22\n                }, undefined) : \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 185,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: createClick,\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Spinner, {\n                    size: \"md\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 190,\n                    columnNumber: 22\n                }, undefined) : \"Create Chat\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 189,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"z1eTQxyTVAyOCDUCP28CqRGsdPU=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = withLo(Message));\nvar _c, _c1;\n$RefreshReg$(_c, \"Message\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQVc7Ozs7OzBDQUd2Qyw4REFBQzFHLG9EQUFNQTtnQkFBQ21HLElBQUc7Z0JBQUlNLFNBQVMzQzswQkFDckJwQyx3QkFBVSw4REFBQ3JCLHFEQUFPQTtvQkFBQ3FHLE1BQU07Ozs7O2dDQUFXOzs7Ozs7Ozs7Ozs7QUFLL0M7R0FqTE0xRjtLQUFBQTs7QUFtTE4sK0RBQWUsTUFBQTJGLE9BQU8zRixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tpZF0uanN4P2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgU3Bpbm5lcixcclxuICBUZXh0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSBcInB1c2hlci1qc1wiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRleHQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2FwcENvbnRleHQvQXBwbGljYXRpb25Db250ZXh0XCI7XHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBTZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIFNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHsgbG9hZGVyLCBzZXRMb2FkZXIsIGxvYWRpbmcsIHNldExvYWRpbmcgfSA9XHJcbiAgICB1c2VDb250ZXh0KEFwcGxpY2F0aW9uQ29udGV4dCk7XHJcbiAgbGV0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHRva2VuID0gbm9va2llcy5nZXQoKS50b2tlbjtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFub29raWVzLmdldCgpLnRva2VuIHx8ICFpZCkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzPy5kYXRhKTtcclxuICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHNldFVzZXIodXNlcklkKTtcclxuICAgIGlmICghaWQgfHwgIXVzZXJJZC5faWQpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBDaGFubmVsbmFtZSA9IGBhYmNgO1xyXG5cclxuICAgIGNvbnN0IHB1c2hlciA9IG5ldyBQdXNoZXIoXCI0ZDRlZDg3YzMzNmEyOTZkOTYxN1wiLCB7XHJcbiAgICAgIGNsdXN0ZXI6IFwiYXAxXCIsXHJcbiAgICAgIGF1dGhFbmRwb2ludDogXCJhcGkvcHVzaGVyL2F1dGhcIixcclxuICAgICAgdXNlVExTOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgY2hhbm5lbC5iaW5kKFwibmV3TWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBTZXRNZXNzYWdlcygocHJldikgPT4gWy4uLihwcmV2IHx8IFtdKSwgZGF0YV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwdXNoZXIudW5iaW5kX2FsbCgpO1xyXG4gICAgICBwdXNoZXIudW5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgfTtcclxuICB9LCBbaWRdKTtcclxuICBjb25zb2xlLmxvZyh1c2VyLCBcInVzZXJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIC8vICFzb2NrZXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIFNldE1lc3NhZ2VzKGRhdGE/LmNoYXQ/Lm1lc3NhZ2VzKTtcclxuICAgICAgU2V0TWVzc2FnZShcIlwiKTtcclxuXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2cobWVzc2FnZXMsIFwibWVzZ1wiKTtcclxuICBjb25zdCBjcmVhdGVDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkhpIE5vdyB5b3UgY2FuIGNoYXQuLi5cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhPy5jaGF0KTtcclxuICAgIGlmIChkYXRhPy5jaGF0KSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2Nyb2wgPSB7XHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTBweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcImxpZ2h0Ymx1ZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiM4ODhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjJweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJcclxuICAgICAgbWluVz17XCIxMDAlXCJ9XHJcbiAgICAgIHA9e1wiMlwifVxyXG4gICAgICBnYXA9ezJ9XHJcbiAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgbT17Mn1cclxuICAgID5cclxuICAgICAgPEhlYWRpbmc+TWVzc2VuZ2VyPC9IZWFkaW5nPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz17XCJyZXBlYXQoMSwxZnIpXCJ9XHJcbiAgICAgICAgZ2FwPXsxfVxyXG4gICAgICAgIG1heEg9e1wiODB2aFwifVxyXG4gICAgICAgIGg9e1wiODB2aFwifVxyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgb3ZlcmZsb3dZPXtcInNjcm9sbFwifVxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCB3aGVhdFwifVxyXG4gICAgICAgIGJveFNoYWRvdz17XCJyZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweFwifVxyXG4gICAgICAgIC8vIGJnPVwiZ3JleVwiXHJcbiAgICAgICAgb3BhY2l0eT17bWVzc2FnZXM/Lmxlbmd0aCA+IDAgPyBcIjFcIiA6IFwiMC41XCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPXtcIlwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gdz17XCJcIn0+XHJcbiAgICAgICAgICB7bWVzc2FnZXM/Lm1hcCgobXNnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIubmFtZSA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLm5hbWUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGltZXN0YW1wLnNsaWNlKFwiMFwiLCBcIjEwXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e21zZy5zZW5kZXIgPT09IHVzZXIubmFtZSA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5uYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgbXQ9XCI1XCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBTZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1lc3NhZ2VcIlxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIHttZXNzYWdlcz8ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8QnV0dG9uIG10PVwiNFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIHtsb2FkaW5nID8gPFNwaW5uZXIgc2l6ZT17XCJtZFwifSAvPiA6IFwiU2VuZFwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgb25DbGljaz17Y3JlYXRlQ2xpY2t9PlxyXG4gICAgICAgICAge2xvYWRpbmcgPyA8U3Bpbm5lciBzaXplPXtcIm1kXCJ9IC8+IDogXCJDcmVhdGUgQ2hhdFwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhMbyhNZXNzYWdlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiU3Bpbm5lciIsIlRleHQiLCJWU3RhY2siLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0Iiwibm9va2llcyIsIlB1c2hlciIsIkFwcGxpY2F0aW9uQ29udGV4dCIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGVyIiwic2V0TG9hZGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ0b2tlbiIsImdldCIsImZldGNoVXNlciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjaGF0IiwidXNlcklkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9pZCIsIkNoYW5uZWxuYW1lIiwicHVzaGVyIiwiY2x1c3RlciIsImF1dGhFbmRwb2ludCIsInVzZVRMUyIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwicHJldiIsInVuYmluZF9hbGwiLCJ1bnN1YnNjcmliZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJjcmVhdGVDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2Nyb2wiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XIiwicCIsImdhcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibSIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3dZIiwidyIsInN4IiwiYm9yZGVyIiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImxlbmd0aCIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwibmFtZSIsInRpbWVzdGFtcCIsInNsaWNlIiwiY29sb3IiLCJtdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwic2l6ZSIsIndpdGhMbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});