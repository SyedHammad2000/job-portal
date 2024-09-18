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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    const fetchUser = async ()=>{\n        var _res_data_chat, _res_data;\n        if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n            return console.log(\"erroe\");\n        }\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(\"res\", res === null || res === void 0 ? void 0 : res.data);\n        SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        setUser(userId);\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"abc\";\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"4d4ed87c336a296d9617\", {\n            cluster: \"ap1\",\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev,\n                    data\n                ]);\n            console.log(\"message\", data);\n        });\n        fetchUser();\n        return ()=>{\n            pusher.unbind_all();\n            pusher.unsubscribe(Channelname);\n        };\n    }, [\n        id\n    ]);\n    console.log(user, \"user\");\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n            SetMessage(\"\");\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                // bg=\"grey\"\n                opacity: messages.length > 0 ? \"1\" : \"0.5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    color: msg.sender === user.name ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 132,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7OENBRS9DSixJQUFJRyxNQUFNOzs7Ozs7OzJCQVhMRjs7Ozs7b0JBZWQ7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDN0UsbURBQUtBO2dCQUNKb0YsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBT3pFO2dCQUNQMEUsVUFBVSxDQUFDeEMsSUFBTWpDLFdBQVdpQyxFQUFFeUMsTUFBTSxDQUFDRixLQUFLO2dCQUMxQ0csYUFBWTtnQkFDWnRCLEdBQUc7b0JBQUM7b0JBQVE7b0JBQU87b0JBQU87aUJBQU07Ozs7OzswQkFFbEMsOERBQUN2RSxvREFBTUE7Z0JBQUN3RixJQUFHO2dCQUFJTSxTQUFTNUM7MEJBQWE7Ozs7Ozs7Ozs7OztBQUszQztHQW5KTXJDO0tBQUFBOztBQXFKTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9baWRdLmpzeD9jMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkaW5nLFxyXG4gIElucHV0LFxyXG4gIFRleHQsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBTZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIFNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0b2tlbiA9IG5vb2tpZXMuZ2V0KCkudG9rZW47XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIHJlcz8uZGF0YSk7XHJcbiAgICBTZXRNZXNzYWdlcyhyZXM/LmRhdGE/LmNoYXQ/Lm1lc3NhZ2VzIHx8IFtdKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgc2V0VXNlcih1c2VySWQpO1xyXG4gICAgaWYgKCFpZCB8fCAhdXNlcklkLl9pZCkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IENoYW5uZWxuYW1lID0gYGFiY2A7XHJcblxyXG4gICAgY29uc3QgcHVzaGVyID0gbmV3IFB1c2hlcihcIjRkNGVkODdjMzM2YTI5NmQ5NjE3XCIsIHtcclxuICAgICAgY2x1c3RlcjogXCJhcDFcIixcclxuICAgICAgYXV0aEVuZHBvaW50OiBcImFwaS9wdXNoZXIvYXV0aFwiLFxyXG4gICAgICB1c2VUTFM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZShDaGFubmVsbmFtZSk7XHJcbiAgICBjaGFubmVsLmJpbmQoXCJuZXdNZXNzYWdlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIFNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgZGF0YV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmZXRjaFVzZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwdXNoZXIudW5iaW5kX2FsbCgpO1xyXG4gICAgICBwdXNoZXIudW5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgfTtcclxuICB9LCBbaWRdKTtcclxuICBjb25zb2xlLmxvZyh1c2VyLCBcInVzZXJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gIXNvY2tldFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgU2V0TWVzc2FnZXMoZGF0YT8uY2hhdD8ubWVzc2FnZXMpO1xyXG4gICAgICBTZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2cobWVzc2FnZXMsIFwibWVzZ1wiKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2wgPSB7XHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTBweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcImxpZ2h0Ymx1ZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiM4ODhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjJweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJcclxuICAgICAgbWluVz17XCIxMDAlXCJ9XHJcbiAgICAgIHA9e1wiMlwifVxyXG4gICAgICBnYXA9ezJ9XHJcbiAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgbT17Mn1cclxuICAgID5cclxuICAgICAgPEhlYWRpbmc+TWVzc2VuZ2VyPC9IZWFkaW5nPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz17XCJyZXBlYXQoMSwxZnIpXCJ9XHJcbiAgICAgICAgZ2FwPXsxfVxyXG4gICAgICAgIG1heEg9e1wiODB2aFwifVxyXG4gICAgICAgIGg9e1wiODB2aFwifVxyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgb3ZlcmZsb3dZPXtcInNjcm9sbFwifVxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCB3aGVhdFwifVxyXG4gICAgICAgIGJveFNoYWRvdz17XCJyZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweFwifVxyXG4gICAgICAgIC8vIGJnPVwiZ3JleVwiXHJcbiAgICAgICAgb3BhY2l0eT17bWVzc2FnZXMubGVuZ3RoID4gMCA/IFwiMVwiIDogXCIwLjVcIn1cclxuICAgICAgPlxyXG4gICAgICAgIDxWU3RhY2sgc3BhY2luZz17NH0gYWxpZ249e1wiXCJ9IGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSB3PXtcIlwifT5cclxuICAgICAgICAgIHttZXNzYWdlcz8ubWFwKChtc2csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5uYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIubmFtZSA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50aW1lc3RhbXAuc2xpY2UoXCIwXCIsIFwiMTBcIil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17bXNnLnNlbmRlciA9PT0gdXNlci5uYW1lID8gXCJncmVlblwiIDogXCJyZWRcIn1cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLm5hbWUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21zZy5zZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBtdD1cIjVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IFNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWVzc2FnZVwiXHJcbiAgICAgICAgdz17W1wiMTAwJVwiLCBcIjcwJVwiLCBcIjUwJVwiLCBcIjQwJVwiXX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgU2VuZFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFzZVVSTCIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkdyaWQiLCJIZWFkaW5nIiwiSW5wdXQiLCJUZXh0IiwiVlN0YWNrIiwiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibm9va2llcyIsIlB1c2hlciIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwidG9rZW4iLCJnZXQiLCJmZXRjaFVzZXIiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiY2hhdCIsInVzZXJJZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfaWQiLCJDaGFubmVsbmFtZSIsInB1c2hlciIsImNsdXN0ZXIiLCJhdXRoRW5kcG9pbnQiLCJ1c2VUTFMiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsInByZXYiLCJ1bmJpbmRfYWxsIiwidW5zdWJzY3JpYmUiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0ZXh0Iiwic2Nyb2wiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XIiwicCIsImdhcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibSIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3dZIiwidyIsInN4IiwiYm9yZGVyIiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImxlbmd0aCIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwibmFtZSIsInRpbWVzdGFtcCIsInNsaWNlIiwiY29sb3IiLCJtdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});