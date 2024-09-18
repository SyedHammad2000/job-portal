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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/appContext/ApplicationContext */ \"./src/components/appContext/ApplicationContext.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { loader, setLoader, loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_appContext_ApplicationContext__WEBPACK_IMPORTED_MODULE_5__.ApplicationContext);\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    const fetchUser = async ()=>{\n        var _res_data_chat, _res_data;\n        if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n            return console.log(\"erroe\");\n        }\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(\"res\", res === null || res === void 0 ? void 0 : res.data);\n        SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUser();\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        setUser(userId);\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"abc\";\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"4d4ed87c336a296d9617\", {\n            cluster: \"ap1\",\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev || [],\n                    data\n                ]);\n            console.log(\"message\", data);\n        });\n        return ()=>{\n            pusher.unbind_all();\n            pusher.unsubscribe(Channelname);\n        };\n    }, [\n        id\n    ]);\n    console.log(user, \"user\");\n    const handleClick = async (e)=>{\n        setLoader(true);\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n            SetMessage(\"\");\n        }\n    };\n    console.log(messages, \"mesg\");\n    const createClick = async (e)=>{\n        setLoading(true);\n        e.preventDefault();\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n            text: \"Hi Now you can chat...\"\n        }, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(data === null || data === void 0 ? void 0 : data.chat);\n        if (data === null || data === void 0 ? void 0 : data.chat) {\n            setLoading(false);\n            window.location.reload();\n        }\n    };\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                // bg=\"grey\"\n                opacity: (messages === null || messages === void 0 ? void 0 : messages.length) > 0 ? \"1\" : \"0.5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 157,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    color: msg.sender === user.name ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 156,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, undefined),\n            (messages === null || messages === void 0 ? void 0 : messages.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 183,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: createClick,\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Spinner, {\n                    size: \"md\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 188,\n                    columnNumber: 22\n                }, undefined) : \"Create Chat\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 187,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"z1eTQxyTVAyOCDUCP28CqRGsdPU=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUNyQnBDLHdCQUFVLDhEQUFDckIscURBQU9BO29CQUFDcUcsTUFBTTs7Ozs7Z0NBQVc7Ozs7Ozs7Ozs7OztBQUsvQztHQS9LTTFGO0tBQUFBOztBQWlMTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9baWRdLmpzeD9jMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkaW5nLFxyXG4gIElucHV0LFxyXG4gIFNwaW5uZXIsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25Db250ZXh0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9hcHBDb250ZXh0L0FwcGxpY2F0aW9uQ29udGV4dFwiO1xyXG5jb25zdCBNZXNzYWdlID0gKHsgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgU2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBTZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB7IGxvYWRlciwgc2V0TG9hZGVyLCBsb2FkaW5nLCBzZXRMb2FkaW5nIH0gPVxyXG4gICAgdXNlQ29udGV4dChBcHBsaWNhdGlvbkNvbnRleHQpO1xyXG4gIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0b2tlbiA9IG5vb2tpZXMuZ2V0KCkudG9rZW47XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIHJlcz8uZGF0YSk7XHJcbiAgICBTZXRNZXNzYWdlcyhyZXM/LmRhdGE/LmNoYXQ/Lm1lc3NhZ2VzIHx8IFtdKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hVc2VyKCk7XHJcbiAgICBjb25zdCB1c2VySWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBzZXRVc2VyKHVzZXJJZCk7XHJcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQuX2lkKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9lXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgQ2hhbm5lbG5hbWUgPSBgYWJjYDtcclxuXHJcbiAgICBjb25zdCBwdXNoZXIgPSBuZXcgUHVzaGVyKFwiNGQ0ZWQ4N2MzMzZhMjk2ZDk2MTdcIiwge1xyXG4gICAgICBjbHVzdGVyOiBcImFwMVwiLFxyXG4gICAgICBhdXRoRW5kcG9pbnQ6IFwiYXBpL3B1c2hlci9hdXRoXCIsXHJcbiAgICAgIHVzZVRMUzogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNoYW5uZWwgPSBwdXNoZXIuc3Vic2NyaWJlKENoYW5uZWxuYW1lKTtcclxuICAgIGNoYW5uZWwuYmluZChcIm5ld01lc3NhZ2VcIiwgKGRhdGEpID0+IHtcclxuICAgICAgU2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi4ocHJldiB8fCBbXSksIGRhdGFdKTtcclxuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgcHVzaGVyLnVuYmluZF9hbGwoKTtcclxuICAgICAgcHVzaGVyLnVuc3Vic2NyaWJlKENoYW5uZWxuYW1lKTtcclxuICAgIH07XHJcbiAgfSwgW2lkXSk7XHJcbiAgY29uc29sZS5sb2codXNlciwgXCJ1c2VyXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGUpID0+IHtcclxuICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgIC8vICFzb2NrZXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIFNldE1lc3NhZ2VzKGRhdGE/LmNoYXQ/Lm1lc3NhZ2VzKTtcclxuICAgICAgU2V0TWVzc2FnZShcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBcIm1lc2dcIik7XHJcbiAgY29uc3QgY3JlYXRlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJIaSBOb3cgeW91IGNhbiBjaGF0Li4uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coZGF0YT8uY2hhdCk7XHJcbiAgICBpZiAoZGF0YT8uY2hhdCkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sID0ge1xyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODg4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1pblc9e1wiMTAwJVwifVxyXG4gICAgICBwPXtcIjJcIn1cclxuICAgICAgZ2FwPXsyfVxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgIG09ezJ9XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nPk1lc3NlbmdlcjwvSGVhZGluZz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJvcmRlclJhZGl1cz17XCIxMHB4XCJ9XHJcbiAgICAgICAgc3g9e3Njcm9sfVxyXG4gICAgICAgIGJvcmRlcj17XCIycHggc29saWQgd2hlYXRcIn1cclxuICAgICAgICBib3hTaGFkb3c9e1wicmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHhcIn1cclxuICAgICAgICAvLyBiZz1cImdyZXlcIlxyXG4gICAgICAgIG9wYWNpdHk9e21lc3NhZ2VzPy5sZW5ndGggPiAwID8gXCIxXCIgOiBcIjAuNVwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLm5hbWUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5uYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnRpbWVzdGFtcC5zbGljZShcIjBcIiwgXCIxMFwiKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXttc2cuc2VuZGVyID09PSB1c2VyLm5hbWUgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIubmFtZSA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnNlbmRlcn1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG10PVwiNVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gU2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZXNzYWdlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAvPlxyXG4gICAgICB7bWVzc2FnZXM/Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBvbkNsaWNrPXtjcmVhdGVDbGlja30+XHJcbiAgICAgICAgICB7bG9hZGluZyA/IDxTcGlubmVyIHNpemU9e1wibWRcIn0gLz4gOiBcIkNyZWF0ZSBDaGF0XCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiU3Bpbm5lciIsIlRleHQiLCJWU3RhY2siLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0Iiwibm9va2llcyIsIlB1c2hlciIsIkFwcGxpY2F0aW9uQ29udGV4dCIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGVyIiwic2V0TG9hZGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ0b2tlbiIsImdldCIsImZldGNoVXNlciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjaGF0IiwidXNlcklkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9pZCIsIkNoYW5uZWxuYW1lIiwicHVzaGVyIiwiY2x1c3RlciIsImF1dGhFbmRwb2ludCIsInVzZVRMUyIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwicHJldiIsInVuYmluZF9hbGwiLCJ1bnN1YnNjcmliZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJjcmVhdGVDbGljayIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2Nyb2wiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XIiwicCIsImdhcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibSIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3dZIiwidyIsInN4IiwiYm9yZGVyIiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImxlbmd0aCIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwibmFtZSIsInRpbWVzdGFtcCIsInNsaWNlIiwiY29sb3IiLCJtdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});