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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    // useEffect(() => {\n    //   setUser(JSON.parse(localStorage.getItem(\"user\")));\n    //   const sockets = io({\n    //     path: \"/api/socket\",\n    //   });\n    //   setSocket(sockets);\n    //   sockets.on(\"newMessage\", (msg) => {\n    //     console.log(\"New message received:\", msg);\n    //     SetMessages((prev) => [...prev, msg]);\n    //   });\n    //   // Unique room for the chat\n    //   sockets.emit(\"joinRoom\", { room: \"abc\" });\n    //   // Listen for new messages\n    //   const fetchUser = async () => {\n    //     if (!nookies.get().token || !id) {\n    //       return console.log(\"erroe\");\n    //     }\n    //     const res = await axios.get(`${baseURL}/api/chat/${id}`, {\n    //       headers: {\n    //         Authorization: `Bearer ${token}`,\n    //       },\n    //     });\n    //     SetMessages(res?.data?.chat?.messages || []);\n    //   };\n    //   fetchUser();\n    //   return () => {\n    //     sockets.disconnect();\n    //   };\n    // }, [id]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"private\".concat(id, \"-\").concat(userId._id);\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_5___default())(process.env.PUSHER_KEY_ID, {\n            cluster: process.env.CLUSTER_ID,\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev,\n                    data\n                ]);\n        });\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            pusher.unsubscribe(Channelname);\n        };\n    }, []);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            // socket.emit(\"sendMessage\", {\n            //   room: \"abc\", // The room id or chat id\n            //   message: {\n            //     text: message,\n            //     timestamp: new Date(),\n            //     sender: user._id, // Ensure you include sender id or user info\n            //   },\n            // });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \"wheat\",\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 167,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    color: msg.sender === user._id ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 163,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 160,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 189,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIscUJBQ0UsOERBQUNyRixpREFBR0E7OzhDQUNGLDhEQUFDTSxrREFBSUE7b0NBQUNnRixXQUFXRixJQUFJRyxNQUFNLEtBQUtsRSxLQUFLVyxHQUFHLEdBQUcsVUFBVTs4Q0FDbERvRCxJQUFJekIsSUFBSTs7Ozs7OzhDQUVYLDhEQUFDckQsa0RBQUlBO29DQUFDZ0YsV0FBV0YsSUFBSUcsTUFBTSxLQUFLbEUsS0FBS1csR0FBRyxHQUFHLFVBQVU7OENBQ2xEb0QsSUFBSUksU0FBUyxDQUFDQyxLQUFLLENBQUMsS0FBSzs7Ozs7OzhDQUU1Qiw4REFBQ25GLGtEQUFJQTtvQ0FDSG9GLE9BQU9OLElBQUlHLE1BQU0sS0FBS2xFLEtBQUtXLEdBQUcsR0FBRyxVQUFVO29DQUMzQ3NELFdBQVdGLElBQUlHLE1BQU0sS0FBS2xFLEtBQUtXLEdBQUcsR0FBRyxVQUFVOzhDQUU5Q29ELElBQUlHLE1BQU07Ozs7Ozs7MkJBWExGOzs7OztvQkFlZDs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNoRixtREFBS0E7Z0JBQ0pzRixJQUFHO2dCQUNIQyxNQUFLO2dCQUNMQyxPQUFPMUU7Z0JBQ1AyRSxVQUFVLENBQUN0QyxJQUFNcEMsV0FBV29DLEVBQUV1QyxNQUFNLENBQUNGLEtBQUs7Z0JBQzFDRyxhQUFZO2dCQUNacEIsR0FBRztvQkFBQztvQkFBUTtvQkFBTztvQkFBTztpQkFBTTs7Ozs7OzBCQUVsQyw4REFBQzNFLG9EQUFNQTtnQkFBQzBGLElBQUc7Z0JBQUlNLFNBQVMxQzswQkFBYTs7Ozs7Ozs7Ozs7O0FBSzNDO0dBakxNeEM7S0FBQUE7O0FBbUxOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tpZF0uanN4P2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IFB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBTZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIFNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0b2tlbiA9IG5vb2tpZXMuZ2V0KCkudG9rZW47XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHNldFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcclxuICAvLyAgIGNvbnN0IHNvY2tldHMgPSBpbyh7XHJcbiAgLy8gICAgIHBhdGg6IFwiL2FwaS9zb2NrZXRcIixcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgc2V0U29ja2V0KHNvY2tldHMpO1xyXG5cclxuICAvLyAgIHNvY2tldHMub24oXCJuZXdNZXNzYWdlXCIsIChtc2cpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJOZXcgbWVzc2FnZSByZWNlaXZlZDpcIiwgbXNnKTtcclxuICAvLyAgICAgU2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBtc2ddKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgLy8gVW5pcXVlIHJvb20gZm9yIHRoZSBjaGF0XHJcbiAgLy8gICBzb2NrZXRzLmVtaXQoXCJqb2luUm9vbVwiLCB7IHJvb206IFwiYWJjXCIgfSk7XHJcblxyXG4gIC8vICAgLy8gTGlzdGVuIGZvciBuZXcgbWVzc2FnZXNcclxuXHJcbiAgLy8gICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAvLyAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgLy8gICAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gIC8vICAgfTtcclxuICAvLyAgIGZldGNoVXNlcigpO1xyXG5cclxuICAvLyAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgIHNvY2tldHMuZGlzY29ubmVjdCgpO1xyXG4gIC8vICAgfTtcclxuICAvLyB9LCBbaWRdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlcklkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgaWYgKCFpZCB8fCAhdXNlcklkLl9pZCkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IENoYW5uZWxuYW1lID0gYHByaXZhdGUke2lkfS0ke3VzZXJJZC5faWR9YDtcclxuXHJcbiAgICBjb25zdCBwdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9LRVlfSUQsIHtcclxuICAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuQ0xVU1RFUl9JRCxcclxuICAgICAgYXV0aEVuZHBvaW50OiBcImFwaS9wdXNoZXIvYXV0aFwiLFxyXG4gICAgICB1c2VUTFM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZShDaGFubmVsbmFtZSk7XHJcbiAgICBjaGFubmVsLmJpbmQoXCJuZXdNZXNzYWdlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIFNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgZGF0YV0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHB1c2hlci51bnN1YnNjcmliZShDaGFubmVsbmFtZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAhc29ja2V0XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlXCIsIHtcclxuICAgICAgLy8gICByb29tOiBcImFiY1wiLCAvLyBUaGUgcm9vbSBpZCBvciBjaGF0IGlkXHJcbiAgICAgIC8vICAgbWVzc2FnZToge1xyXG4gICAgICAvLyAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgLy8gICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgLy8gICAgIHNlbmRlcjogdXNlci5faWQsIC8vIEVuc3VyZSB5b3UgaW5jbHVkZSBzZW5kZXIgaWQgb3IgdXNlciBpbmZvXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKGRhdGE/LmNoYXQ/Lm1lc3NhZ2VzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBcIm1lc2dcIik7XHJcblxyXG4gIGNvbnN0IHNjcm9sID0ge1xyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODg4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1pblc9e1wiMTAwJVwifVxyXG4gICAgICBwPXtcIjJcIn1cclxuICAgICAgZ2FwPXsyfVxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgIG09ezJ9XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nPk1lc3NlbmdlcjwvSGVhZGluZz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnPXtcIndoZWF0XCJ9XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCB3aGVhdFwifVxyXG4gICAgICAgIGJveFNoYWRvdz17XCJyZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50aW1lc3RhbXAuc2xpY2UoXCIwXCIsIFwiMTBcIil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIuX2lkID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgbXQ9XCI1XCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBTZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1lc3NhZ2VcIlxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gbXQ9XCI0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIFNlbmRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5vb2tpZXMiLCJpbyIsIlB1c2hlciIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwidG9rZW4iLCJnZXQiLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2lkIiwiY29uc29sZSIsImxvZyIsIkNoYW5uZWxuYW1lIiwicHVzaGVyIiwicHJvY2VzcyIsImVudiIsIlBVU0hFUl9LRVlfSUQiLCJjbHVzdGVyIiwiQ0xVU1RFUl9JRCIsImF1dGhFbmRwb2ludCIsInVzZVRMUyIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwiZGF0YSIsInByZXYiLCJmZXRjaFVzZXIiLCJyZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNoYXQiLCJ1bnN1YnNjcmliZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJzY3JvbCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1pblciLCJwIiwiZ2FwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtIiwidGVtcGxhdGVDb2x1bW5zIiwibWF4SCIsImgiLCJvdmVyZmxvd1kiLCJ3IiwiYmciLCJzeCIsImJvcmRlciIsImJveFNoYWRvdyIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwidGltZXN0YW1wIiwic2xpY2UiLCJjb2xvciIsIm10IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});