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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    // useEffect(() => {\n    //   setUser(JSON.parse(localStorage.getItem(\"user\")));\n    //   const sockets = io({\n    //     path: \"/api/socket\",\n    //   });\n    //   setSocket(sockets);\n    //   sockets.on(\"newMessage\", (msg) => {\n    //     console.log(\"New message received:\", msg);\n    //     SetMessages((prev) => [...prev, msg]);\n    //   });\n    //   // Unique room for the chat\n    //   sockets.emit(\"joinRoom\", { room: \"abc\" });\n    //   // Listen for new messages\n    //   const fetchUser = async () => {\n    //     if (!nookies.get().token || !id) {\n    //       return console.log(\"erroe\");\n    //     }\n    //     const res = await axios.get(`${baseURL}/api/chat/${id}`, {\n    //       headers: {\n    //         Authorization: `Bearer ${token}`,\n    //       },\n    //     });\n    //     SetMessages(res?.data?.chat?.messages || []);\n    //   };\n    //   fetchUser();\n    //   return () => {\n    //     sockets.disconnect();\n    //   };\n    // }, [id]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        setUser(userId._id);\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"abc\";\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_5___default())(\"4d4ed87c336a296d9617\", {\n            cluster: \"ap1\",\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev,\n                    data\n                ]);\n            console.log(\"message\", data);\n        });\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            pusher.unsubscribe(Channelname);\n        };\n    }, [\n        id\n    ]);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            // socket.emit(\"sendMessage\", {\n            //   room: \"abc\", // The room id or chat id\n            //   message: {\n            //     text: message,\n            //     timestamp: new Date(),\n            //     sender: user._id, // Ensure you include sender id or user info\n            //   },\n            // });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \"wheat\",\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 169,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    color: msg.sender === user ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 172,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 165,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 162,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTtvQ0FBQzRFLFdBQVdGLElBQUlHLE1BQU0sS0FBSzlELE9BQU8sVUFBVTs4Q0FDOUMyRCxJQUFJekIsSUFBSTs7Ozs7OzhDQUVYLDhEQUFDakQsa0RBQUlBO29DQUFDNEUsV0FBV0YsSUFBSUcsTUFBTSxLQUFLOUQsT0FBTyxVQUFVOzhDQUM5QzJELElBQUlJLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEtBQUs7Ozs7Ozs4Q0FFNUIsOERBQUMvRSxrREFBSUE7b0NBQ0hnRixPQUFPTixJQUFJRyxNQUFNLEtBQUs5RCxPQUFPLFVBQVU7b0NBQ3ZDNkQsV0FBV0YsSUFBSUcsTUFBTSxLQUFLOUQsT0FBTyxVQUFVOzhDQUUxQzJELElBQUlHLE1BQU07Ozs7Ozs7MkJBWExGOzs7OztvQkFlZDs7Ozs7Ozs7Ozs7MEJBR0osOERBQUM1RSxtREFBS0E7Z0JBQ0prRixJQUFHO2dCQUNIQyxNQUFLO2dCQUNMQyxPQUFPdEU7Z0JBQ1B1RSxVQUFVLENBQUN0QyxJQUFNaEMsV0FBV2dDLEVBQUV1QyxNQUFNLENBQUNGLEtBQUs7Z0JBQzFDRyxhQUFZO2dCQUNacEIsR0FBRztvQkFBQztvQkFBUTtvQkFBTztvQkFBTztpQkFBTTs7Ozs7OzBCQUVsQyw4REFBQ3ZFLG9EQUFNQTtnQkFBQ3NGLElBQUc7Z0JBQUlNLFNBQVMxQzswQkFBYTs7Ozs7Ozs7Ozs7O0FBSzNDO0dBbkxNcEM7S0FBQUE7O0FBcUxOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tpZF0uanN4P2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBTZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIFNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0b2tlbiA9IG5vb2tpZXMuZ2V0KCkudG9rZW47XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcclxuICAvLyAgIGNvbnN0IHNvY2tldHMgPSBpbyh7XHJcbiAgLy8gICAgIHBhdGg6IFwiL2FwaS9zb2NrZXRcIixcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgc2V0U29ja2V0KHNvY2tldHMpO1xyXG5cclxuICAvLyAgIHNvY2tldHMub24oXCJuZXdNZXNzYWdlXCIsIChtc2cpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJOZXcgbWVzc2FnZSByZWNlaXZlZDpcIiwgbXNnKTtcclxuICAvLyAgICAgU2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBtc2ddKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgLy8gVW5pcXVlIHJvb20gZm9yIHRoZSBjaGF0XHJcbiAgLy8gICBzb2NrZXRzLmVtaXQoXCJqb2luUm9vbVwiLCB7IHJvb206IFwiYWJjXCIgfSk7XHJcblxyXG4gIC8vICAgLy8gTGlzdGVuIGZvciBuZXcgbWVzc2FnZXNcclxuXHJcbiAgLy8gICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAvLyAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgLy8gICAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIGZldGNoVXNlcigpO1xyXG5cclxuICAvLyAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgIHNvY2tldHMuZGlzY29ubmVjdCgpO1xyXG4gIC8vICAgfTtcclxuICAvLyB9LCBbaWRdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgc2V0VXNlcih1c2VySWQuX2lkKTtcclxuICAgIGlmICghaWQgfHwgIXVzZXJJZC5faWQpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBDaGFubmVsbmFtZSA9IGBhYmNgO1xyXG5cclxuICAgIGNvbnN0IHB1c2hlciA9IG5ldyBQdXNoZXIoXCI0ZDRlZDg3YzMzNmEyOTZkOTYxN1wiLCB7XHJcbiAgICAgIGNsdXN0ZXI6IFwiYXAxXCIsXHJcbiAgICAgIGF1dGhFbmRwb2ludDogXCJhcGkvcHVzaGVyL2F1dGhcIixcclxuICAgICAgdXNlVExTOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgY2hhbm5lbC5iaW5kKFwibmV3TWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBTZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIGRhdGFdKTtcclxuICAgICAgY29uc29sZS5sb2coXCJtZXNzYWdlXCIsIGRhdGEpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHB1c2hlci51bnN1YnNjcmliZShDaGFubmVsbmFtZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtpZF0pO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGUpID0+IHtcclxuICAgIC8vICFzb2NrZXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VcIiwge1xyXG4gICAgICAvLyAgIHJvb206IFwiYWJjXCIsIC8vIFRoZSByb29tIGlkIG9yIGNoYXQgaWRcclxuICAgICAgLy8gICBtZXNzYWdlOiB7XHJcbiAgICAgIC8vICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAvLyAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAvLyAgICAgc2VuZGVyOiB1c2VyLl9pZCwgLy8gRW5zdXJlIHlvdSBpbmNsdWRlIHNlbmRlciBpZCBvciB1c2VyIGluZm9cclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9KTtcclxuICAgICAgU2V0TWVzc2FnZXMoZGF0YT8uY2hhdD8ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2cobWVzc2FnZXMsIFwibWVzZ1wiKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2wgPSB7XHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IFwiMTBweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcImxpZ2h0Ymx1ZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiM4ODhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjJweFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJcclxuICAgICAgbWluVz17XCIxMDAlXCJ9XHJcbiAgICAgIHA9e1wiMlwifVxyXG4gICAgICBnYXA9ezJ9XHJcbiAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgbT17Mn1cclxuICAgID5cclxuICAgICAgPEhlYWRpbmc+TWVzc2VuZ2VyPC9IZWFkaW5nPlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz17XCJyZXBlYXQoMSwxZnIpXCJ9XHJcbiAgICAgICAgZ2FwPXsxfVxyXG4gICAgICAgIG1heEg9e1wiODB2aFwifVxyXG4gICAgICAgIGg9e1wiODB2aFwifVxyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgb3ZlcmZsb3dZPXtcInNjcm9sbFwifVxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgICAgYmc9e1wid2hlYXRcIn1cclxuICAgICAgICBib3JkZXJSYWRpdXM9e1wiMTBweFwifVxyXG4gICAgICAgIHN4PXtzY3JvbH1cclxuICAgICAgICBib3JkZXI9e1wiMnB4IHNvbGlkIHdoZWF0XCJ9XHJcbiAgICAgICAgYm94U2hhZG93PXtcInJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4XCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPXtcIlwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gdz17XCJcIn0+XHJcbiAgICAgICAgICB7bWVzc2FnZXM/Lm1hcCgobXNnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlciA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50aW1lc3RhbXAuc2xpY2UoXCIwXCIsIFwiMTBcIil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17bXNnLnNlbmRlciA9PT0gdXNlciA/IFwiZ3JlZW5cIiA6IFwicmVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlciA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnNlbmRlcn1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG10PVwiNVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gU2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZXNzYWdlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uIG10PVwiNFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICBTZW5kXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2U7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IGN0eC5xdWVyeTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgaWQsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJiYXNlVVJMIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiR3JpZCIsIkhlYWRpbmciLCJJbnB1dCIsIlRleHQiLCJWU3RhY2siLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJub29raWVzIiwiaW8iLCJQdXNoZXIiLCJNZXNzYWdlIiwiaWQiLCJtZXNzYWdlcyIsIlNldE1lc3NhZ2VzIiwibWVzc2FnZSIsIlNldE1lc3NhZ2UiLCJ1c2VyIiwic2V0VXNlciIsInNvY2tldCIsInNldFNvY2tldCIsInRva2VuIiwiZ2V0IiwidXNlcklkIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJDaGFubmVsbmFtZSIsInB1c2hlciIsImNsdXN0ZXIiLCJhdXRoRW5kcG9pbnQiLCJ1c2VUTFMiLCJjaGFubmVsIiwic3Vic2NyaWJlIiwiYmluZCIsImRhdGEiLCJwcmV2IiwiZmV0Y2hVc2VyIiwicmVzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjaGF0IiwidW5zdWJzY3JpYmUiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0ZXh0Iiwic2Nyb2wiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XIiwicCIsImdhcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibSIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3dZIiwidyIsImJnIiwic3giLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzcGFjaW5nIiwiYWxpZ24iLCJtYXAiLCJtc2ciLCJpbmRleCIsInRleHRBbGlnbiIsInNlbmRlciIsInRpbWVzdGFtcCIsInNsaWNlIiwiY29sb3IiLCJtdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});