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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setUser(JSON.parse(localStorage.getItem(\"user\")));\n        const sockets = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            path: \"/api/socket\"\n        });\n        setSocket(sockets);\n        sockets.on(\"newMessage\", (msg)=>{\n            console.log(\"New message received:\", msg);\n            SetMessages((prev)=>[\n                    ...prev,\n                    msg\n                ]);\n        });\n        // Unique room for the chat\n        sockets.emit(\"joinRoom\", {\n            room: \"abc\"\n        });\n        // Listen for new messages\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            sockets.disconnect();\n        };\n    }, [\n        id\n    ]);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            socket.emit(\"sendMessage\", {\n                room: \"abc\",\n                message: {\n                    text: message,\n                    timestamp: new Date(),\n                    sender: user._id\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minW: \"100%\",\n        p: 1,\n        gap: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflow: \"scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                    spacing: 4,\n                    align: \"right\",\n                    w: \"100%\",\n                    p: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            children: \"User\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.timestamp.slice(\"0\", \"10\")\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        color: msg.sender === user._id ? \"green\" : \"red\",\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.sender\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUVIsQ0FBQzs7c0NBQzlDLDhEQUFDcEQscURBQU9BO3NDQUFDOzs7Ozs7d0JBQ1JZLHFCQUFBQSwrQkFBQUEsU0FBVWlELEdBQUcsQ0FBQyxDQUFDaEMsS0FBS2lDOzRCQUNuQixxQkFDRSw4REFBQ2xFLGlEQUFHQTs7a0RBQ0YsOERBQUNNLGtEQUFJQTt3Q0FBQzZELFdBQVdsQyxJQUFJb0IsTUFBTSxLQUFLakMsS0FBS2tDLEdBQUcsR0FBRyxVQUFVO2tEQUNsRHJCLElBQUlpQixJQUFJOzs7Ozs7a0RBRVgsOERBQUM1QyxrREFBSUE7d0NBQUM2RCxXQUFXbEMsSUFBSW9CLE1BQU0sS0FBS2pDLEtBQUtrQyxHQUFHLEdBQUcsVUFBVTtrREFDbERyQixJQUFJa0IsU0FBUyxDQUFDaUIsS0FBSyxDQUFDLEtBQUs7Ozs7OztrREFFNUIsOERBQUM5RCxrREFBSUE7d0NBQ0grRCxPQUFPcEMsSUFBSW9CLE1BQU0sS0FBS2pDLEtBQUtrQyxHQUFHLEdBQUcsVUFBVTt3Q0FDM0NhLFdBQVdsQyxJQUFJb0IsTUFBTSxLQUFLakMsS0FBS2tDLEdBQUcsR0FBRyxVQUFVO2tEQUU5Q3JCLElBQUlvQixNQUFNOzs7Ozs7OytCQVhMYTs7Ozs7d0JBZWQ7Ozs7Ozs7Ozs7OzswQkFHSiw4REFBQzdELG1EQUFLQTtnQkFDSmlFLElBQUc7Z0JBQ0hDLE1BQUs7Z0JBQ0xDLE9BQU90RDtnQkFDUHVELFVBQVUsQ0FBQzFCLElBQU01QixXQUFXNEIsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7OzBCQUU1Qyw4REFBQ3ZFLG9EQUFNQTtnQkFBQ3FFLElBQUc7Z0JBQUlLLFNBQVM3QjswQkFBYTs7Ozs7Ozs7Ozs7O0FBSzNDO0dBL0dNaEM7S0FBQUE7O0FBaUhOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tpZF0uanN4P2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBTZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIFNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGxldCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0b2tlbiA9IG5vb2tpZXMuZ2V0KCkudG9rZW47XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpKTtcclxuICAgIGNvbnN0IHNvY2tldHMgPSBpbyh7XHJcbiAgICAgIHBhdGg6IFwiL2FwaS9zb2NrZXRcIixcclxuICAgIH0pO1xyXG4gICAgc2V0U29ja2V0KHNvY2tldHMpO1xyXG5cclxuICAgIHNvY2tldHMub24oXCJuZXdNZXNzYWdlXCIsIChtc2cpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJOZXcgbWVzc2FnZSByZWNlaXZlZDpcIiwgbXNnKTtcclxuICAgICAgU2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBtc2ddKTtcclxuICAgIH0pO1xyXG4gICAgLy8gVW5pcXVlIHJvb20gZm9yIHRoZSBjaGF0XHJcbiAgICBzb2NrZXRzLmVtaXQoXCJqb2luUm9vbVwiLCB7IHJvb206IFwiYWJjXCIgfSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBuZXcgbWVzc2FnZXNcclxuXHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldHMuZGlzY29ubmVjdCgpO1xyXG4gICAgfTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gIXNvY2tldFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZVwiLCB7XHJcbiAgICAgICAgcm9vbTogXCJhYmNcIiwgLy8gVGhlIHJvb20gaWQgb3IgY2hhdCBpZFxyXG4gICAgICAgIG1lc3NhZ2U6IHtcclxuICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBzZW5kZXI6IHVzZXIuX2lkLCAvLyBFbnN1cmUgeW91IGluY2x1ZGUgc2VuZGVyIGlkIG9yIHVzZXIgaW5mb1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBTZXRNZXNzYWdlcyhkYXRhPy5jaGF0Py5tZXNzYWdlcyk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhtZXNzYWdlcywgXCJtZXNnXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1pblc9e1wiMTAwJVwifSBwPXsxfSBnYXA9ezJ9PlxyXG4gICAgICA8R3JpZFxyXG4gICAgICAgIHRlbXBsYXRlQ29sdW1ucz17XCJyZXBlYXQoMSwxZnIpXCJ9XHJcbiAgICAgICAgZ2FwPXsxfVxyXG4gICAgICAgIG1heEg9e1wiODB2aFwifVxyXG4gICAgICAgIGg9e1wiODB2aFwifVxyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgb3ZlcmZsb3c9e1wic2Nyb2xsXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPXtcInJpZ2h0XCJ9IHc9e1wiMTAwJVwifSBwPlxyXG4gICAgICAgICAgPEhlYWRpbmc+VXNlcjwvSGVhZGluZz5cclxuICAgICAgICAgIHttZXNzYWdlcz8ubWFwKChtc2csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGltZXN0YW1wLnNsaWNlKFwiMFwiLCBcIjEwXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e21zZy5zZW5kZXIgPT09IHVzZXIuX2lkID8gXCJncmVlblwiIDogXCJyZWRcIn1cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnNlbmRlcn1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG10PVwiNVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gU2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gbXQ9XCI0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIFNlbmRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5vb2tpZXMiLCJpbyIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwidG9rZW4iLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29ja2V0cyIsInBhdGgiLCJvbiIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiZW1pdCIsInJvb20iLCJmZXRjaFVzZXIiLCJyZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjaGF0IiwiZGlzY29ubmVjdCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwic2VuZGVyIiwiX2lkIiwibWluVyIsInAiLCJnYXAiLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJtYXhIIiwiaCIsIm92ZXJmbG93Iiwic3BhY2luZyIsImFsaWduIiwidyIsIm1hcCIsImluZGV4IiwidGV4dEFsaWduIiwic2xpY2UiLCJjb2xvciIsIm10IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});