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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setUser(JSON.parse(localStorage.getItem(\"user\")));\n        const sockets = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            path: \"/api/socket\"\n        });\n        setSocket(sockets);\n        sockets.on(\"newMessage\", (msg)=>{\n            console.log(\"New message received:\", msg);\n            SetMessages((prev)=>[\n                    ...prev,\n                    msg\n                ]);\n        });\n        // Unique room for the chat\n        sockets.emit(\"joinRoom\", {\n            room: \"abc\"\n        });\n        // Listen for new messages\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            sockets.disconnect();\n        };\n    }, [\n        id\n    ]);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            socket.emit(\"sendMessage\", {\n                room: \"abc\",\n                message: {\n                    text: message,\n                    timestamp: new Date(),\n                    sender: user._id\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                children: \"Messeger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \"wheat\",\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 134,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    color: msg.sender === user._id ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 130,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO2dCQUNMQyxPQUFPbkU7Z0JBQ1BvRSxVQUFVLENBQUN2QyxJQUFNNUIsV0FBVzRCLEVBQUV3QyxNQUFNLENBQUNGLEtBQUs7Z0JBQzFDRyxhQUFZO2dCQUNaakIsR0FBRztvQkFBQztvQkFBUTtvQkFBTztvQkFBTztpQkFBTTs7Ozs7OzBCQUVsQyw4REFBQ3RFLG9EQUFNQTtnQkFBQ2tGLElBQUc7Z0JBQUlNLFNBQVMzQzswQkFBYTs7Ozs7Ozs7Ozs7O0FBSzNDO0dBaEpNaEM7S0FBQUE7O0FBa0pOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tpZF0uanN4P2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBTZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIFNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0b2tlbiA9IG5vb2tpZXMuZ2V0KCkudG9rZW47XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcclxuICAgIGNvbnN0IHNvY2tldHMgPSBpbyh7XHJcbiAgICAgIHBhdGg6IFwiL2FwaS9zb2NrZXRcIixcclxuICAgIH0pO1xyXG4gICAgc2V0U29ja2V0KHNvY2tldHMpO1xyXG5cclxuICAgIHNvY2tldHMub24oXCJuZXdNZXNzYWdlXCIsIChtc2cpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJOZXcgbWVzc2FnZSByZWNlaXZlZDpcIiwgbXNnKTtcclxuICAgICAgU2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBtc2ddKTtcclxuICAgIH0pO1xyXG4gICAgLy8gVW5pcXVlIHJvb20gZm9yIHRoZSBjaGF0XHJcbiAgICBzb2NrZXRzLmVtaXQoXCJqb2luUm9vbVwiLCB7IHJvb206IFwiYWJjXCIgfSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBuZXcgbWVzc2FnZXNcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldHMuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gIXNvY2tldFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZVwiLCB7XHJcbiAgICAgICAgcm9vbTogXCJhYmNcIiwgLy8gVGhlIHJvb20gaWQgb3IgY2hhdCBpZFxyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBzZW5kZXI6IHVzZXIuX2lkLCAvLyBFbnN1cmUgeW91IGluY2x1ZGUgc2VuZGVyIGlkIG9yIHVzZXIgaW5mb1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBTZXRNZXNzYWdlcyhkYXRhPy5jaGF0Py5tZXNzYWdlcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhtZXNzYWdlcywgXCJtZXNnXCIpO1xyXG5cclxuICBjb25zdCBzY3JvbCA9IHtcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xyXG4gICAgICB3aWR0aDogXCIxMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10cmFja1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwibGlnaHRibHVlXCIsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiIzg4OFwiLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IFwiMnB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBtaW5XPXtcIjEwMCVcIn1cclxuICAgICAgcD17XCIyXCJ9XHJcbiAgICAgIGdhcD17Mn1cclxuICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgIGZsZXhEaXJlY3Rpb249e1wiY29sdW1uXCJ9XHJcbiAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICBtPXsyfVxyXG4gICAgPlxyXG4gICAgICA8SGVhZGluZz5NZXNzZWdlcjwvSGVhZGluZz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnPXtcIndoZWF0XCJ9XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCB3aGVhdFwifVxyXG4gICAgICAgIGJveFNoYWRvdz17XCJyZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50aW1lc3RhbXAuc2xpY2UoXCIwXCIsIFwiMTBcIil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIuX2lkID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgbXQ9XCI1XCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBTZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1lc3NhZ2VcIlxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gbXQ9XCI0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIFNlbmRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5vb2tpZXMiLCJpbyIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwidG9rZW4iLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29ja2V0cyIsInBhdGgiLCJvbiIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiZW1pdCIsInJvb20iLCJmZXRjaFVzZXIiLCJyZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjaGF0IiwiZGlzY29ubmVjdCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwic2VuZGVyIiwiX2lkIiwic2Nyb2wiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XIiwicCIsImdhcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibSIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3dZIiwidyIsImJnIiwic3giLCJib3JkZXIiLCJib3hTaGFkb3ciLCJzcGFjaW5nIiwiYWxpZ24iLCJtYXAiLCJpbmRleCIsInRleHRBbGlnbiIsInNsaWNlIiwiY29sb3IiLCJtdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});