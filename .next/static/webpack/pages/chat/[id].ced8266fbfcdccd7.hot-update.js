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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setUser(JSON.parse(localStorage.getItem(\"user\")));\n        const sockets = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            path: \"/api/socket\"\n        });\n        setSocket(sockets);\n        sockets.on(\"newMessage\", (msg)=>{\n            console.log(\"New message received:\", msg);\n            SetMessages((prev)=>[\n                    ...prev,\n                    msg\n                ]);\n        });\n        // Unique room for the chat\n        sockets.emit(\"joinRoom\", {\n            room: \"abc\"\n        });\n        // Listen for new messages\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            sockets.disconnect();\n        };\n    }, [\n        id\n    ]);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            socket.emit(\"sendMessage\", {\n                room: \"abc\",\n                message: {\n                    text: message,\n                    timestamp: new Date(),\n                    sender: user._id\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minW: \"100%\",\n        p: 2,\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \" c\",\n                borderRadius: \"10px\",\n                sx: scrol,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            children: \"User\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined),\n                        messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.timestamp.slice(\"0\", \"10\")\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        color: msg.sender === user._id ? \"green\" : \"red\",\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.sender\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                lineNumber: 128,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0UsVUFBVSxDQUFDckMsSUFBTTVCLFdBQVc0QixFQUFFc0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MEJBRTVDLDhEQUFDbEYsb0RBQU1BO2dCQUFDZ0YsSUFBRztnQkFBSUssU0FBU3hDOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFLM0M7R0E1SU1oQztLQUFBQTs7QUE4SU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoYXQvW2lkXS5qc3g/YzAyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZVVSTCBmcm9tIFwiQC9oZWxwZXIvYmFzZVVSTFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEdyaWQsXHJcbiAgSGVhZGluZyxcclxuICBJbnB1dCxcclxuICBUZXh0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBub29raWVzIGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3QgTWVzc2FnZSA9ICh7IGlkIH0pID0+IHtcclxuICBjb25zdCBbbWVzc2FnZXMsIFNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWVzc2FnZSwgU2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgbGV0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHRva2VuID0gbm9va2llcy5nZXQoKS50b2tlbjtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xyXG4gICAgY29uc3Qgc29ja2V0cyA9IGlvKHtcclxuICAgICAgcGF0aDogXCIvYXBpL3NvY2tldFwiLFxyXG4gICAgfSk7XHJcbiAgICBzZXRTb2NrZXQoc29ja2V0cyk7XHJcblxyXG4gICAgc29ja2V0cy5vbihcIm5ld01lc3NhZ2VcIiwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyBtZXNzYWdlIHJlY2VpdmVkOlwiLCBtc2cpO1xyXG4gICAgICBTZXRNZXNzYWdlcygocHJldikgPT4gWy4uLnByZXYsIG1zZ10pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBVbmlxdWUgcm9vbSBmb3IgdGhlIGNoYXRcclxuICAgIHNvY2tldHMuZW1pdChcImpvaW5Sb29tXCIsIHsgcm9vbTogXCJhYmNcIiB9KTtcclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIG5ldyBtZXNzYWdlc1xyXG5cclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCFub29raWVzLmdldCgpLnRva2VuIHx8ICFpZCkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9lXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgU2V0TWVzc2FnZXMocmVzPy5kYXRhPy5jaGF0Py5tZXNzYWdlcyB8fCBbXSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hVc2VyKCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgc29ja2V0cy5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAhc29ja2V0XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlXCIsIHtcclxuICAgICAgICByb29tOiBcImFiY1wiLCAvLyBUaGUgcm9vbSBpZCBvciBjaGF0IGlkXHJcbiAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgICAgIHNlbmRlcjogdXNlci5faWQsIC8vIEVuc3VyZSB5b3UgaW5jbHVkZSBzZW5kZXIgaWQgb3IgdXNlciBpbmZvXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKGRhdGE/LmNoYXQ/Lm1lc3NhZ2VzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBcIm1lc2dcIik7XHJcblxyXG4gIGNvbnN0IHNjcm9sID0ge1xyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODg4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1pblc9e1wiMTAwJVwifVxyXG4gICAgICBwPXsyfVxyXG4gICAgICBnYXA9ezJ9XHJcbiAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICBmbGV4RGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cclxuICAgICAgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn1cclxuICAgICAgbT17Mn1cclxuICAgID5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnPXtcIiBjXCJ9XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgID5cclxuICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPXtcIlwifSBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gdz17XCJcIn0+XHJcbiAgICAgICAgICA8SGVhZGluZz5Vc2VyPC9IZWFkaW5nPlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50aW1lc3RhbXAuc2xpY2UoXCIwXCIsIFwiMTBcIil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIuX2lkID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgbXQ9XCI1XCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBTZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgU2VuZFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFzZVVSTCIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkdyaWQiLCJIZWFkaW5nIiwiSW5wdXQiLCJUZXh0IiwiVlN0YWNrIiwiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibm9va2llcyIsImlvIiwiTWVzc2FnZSIsImlkIiwibWVzc2FnZXMiLCJTZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJTZXRNZXNzYWdlIiwidXNlciIsInNldFVzZXIiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ0b2tlbiIsImdldCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzb2NrZXRzIiwicGF0aCIsIm9uIiwibXNnIiwiY29uc29sZSIsImxvZyIsInByZXYiLCJlbWl0Iiwicm9vbSIsImZldGNoVXNlciIsInJlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImNoYXQiLCJkaXNjb25uZWN0IiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGV4dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJzZW5kZXIiLCJfaWQiLCJzY3JvbCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1pblciLCJwIiwiZ2FwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtIiwidGVtcGxhdGVDb2x1bW5zIiwibWF4SCIsImgiLCJvdmVyZmxvd1kiLCJ3IiwiYmciLCJzeCIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsImluZGV4IiwidGV4dEFsaWduIiwic2xpY2UiLCJjb2xvciIsIm10IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});