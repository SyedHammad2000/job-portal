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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setUser(JSON.parse(localStorage.getItem(\"user\")));\n        const sockets = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            path: \"/api/socket\"\n        });\n        setSocket(sockets);\n        sockets.on(\"newMessage\", (msg)=>{\n            console.log(\"New message received:\", msg);\n            SetMessages((prev)=>[\n                    ...prev,\n                    msg\n                ]);\n        });\n        // Unique room for the chat\n        sockets.emit(\"joinRoom\", {\n            room: \"abc\"\n        });\n        // Listen for new messages\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            sockets.disconnect();\n        };\n    }, [\n        id\n    ]);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            socket.emit(\"sendMessage\", {\n                room: \"abc\",\n                message: {\n                    text: message,\n                    timestamp: new Date(),\n                    sender: user._id\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minW: \"100%\",\n        p: 2,\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        bg: \"black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflow: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \"cornflowerblue\",\n                rounded: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            children: \"User\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined),\n                        messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.timestamp.slice(\"0\", \"10\")\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        color: msg.sender === user._id ? \"green\" : \"red\",\n                                        textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                        children: msg.sender\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9baWRdLmpzeD9jMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkaW5nLFxyXG4gIElucHV0LFxyXG4gIFRleHQsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBNZXNzYWdlID0gKHsgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgU2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBTZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBsZXQgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBub29raWVzLmdldCgpLnRva2VuO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSk7XHJcbiAgICBjb25zdCBzb2NrZXRzID0gaW8oe1xyXG4gICAgICBwYXRoOiBcIi9hcGkvc29ja2V0XCIsXHJcbiAgICB9KTtcclxuICAgIHNldFNvY2tldChzb2NrZXRzKTtcclxuXHJcbiAgICBzb2NrZXRzLm9uKFwibmV3TWVzc2FnZVwiLCAobXNnKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiTmV3IG1lc3NhZ2UgcmVjZWl2ZWQ6XCIsIG1zZyk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgbXNnXSk7XHJcbiAgICB9KTtcclxuICAgIC8vIFVuaXF1ZSByb29tIGZvciB0aGUgY2hhdFxyXG4gICAgc29ja2V0cy5lbWl0KFwiam9pblJvb21cIiwgeyByb29tOiBcImFiY1wiIH0pO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgbmV3IG1lc3NhZ2VzXHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIW5vb2tpZXMuZ2V0KCkudG9rZW4gfHwgIWlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBTZXRNZXNzYWdlcyhyZXM/LmRhdGE/LmNoYXQ/Lm1lc3NhZ2VzIHx8IFtdKTtcclxuICAgIH07XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXRzLmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKGUpID0+IHtcclxuICAgIC8vICFzb2NrZXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNvY2tldC5lbWl0KFwic2VuZE1lc3NhZ2VcIiwge1xyXG4gICAgICAgIHJvb206IFwiYWJjXCIsIC8vIFRoZSByb29tIGlkIG9yIGNoYXQgaWRcclxuICAgICAgICBtZXNzYWdlOiB7XHJcbiAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgc2VuZGVyOiB1c2VyLl9pZCwgLy8gRW5zdXJlIHlvdSBpbmNsdWRlIHNlbmRlciBpZCBvciB1c2VyIGluZm9cclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgU2V0TWVzc2FnZXMoZGF0YT8uY2hhdD8ubWVzc2FnZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2cobWVzc2FnZXMsIFwibWVzZ1wiKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lclxyXG4gICAgICBtaW5XPXtcIjEwMCVcIn1cclxuICAgICAgcD17Mn1cclxuICAgICAgZ2FwPXsyfVxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgIG09ezJ9XHJcbiAgICAgIGJnPXtcImJsYWNrXCJ9XHJcbiAgICA+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgdGVtcGxhdGVDb2x1bW5zPXtcInJlcGVhdCgxLDFmcilcIn1cclxuICAgICAgICBnYXA9ezF9XHJcbiAgICAgICAgbWF4SD17XCI4MHZoXCJ9XHJcbiAgICAgICAgaD17XCI4MHZoXCJ9XHJcbiAgICAgICAgcD17Mn1cclxuICAgICAgICBvdmVyZmxvdz17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnPXtcImNvcm5mbG93ZXJibHVlXCJ9XHJcbiAgICAgICAgcm91bmRlZFxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAgPEhlYWRpbmc+VXNlcjwvSGVhZGluZz5cclxuICAgICAgICAgIHttZXNzYWdlcz8ubWFwKChtc2csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPEJveCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGltZXN0YW1wLnNsaWNlKFwiMFwiLCBcIjEwXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e21zZy5zZW5kZXIgPT09IHVzZXIuX2lkID8gXCJncmVlblwiIDogXCJyZWRcIn1cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnNlbmRlcn1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG10PVwiNVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gU2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gbXQ9XCI0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIFNlbmRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5vb2tpZXMiLCJpbyIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwidG9rZW4iLCJnZXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic29ja2V0cyIsInBhdGgiLCJvbiIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiZW1pdCIsInJvb20iLCJmZXRjaFVzZXIiLCJyZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJjaGF0IiwiZGlzY29ubmVjdCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwic2VuZGVyIiwiX2lkIiwibWluVyIsInAiLCJnYXAiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm0iLCJiZyIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3ciLCJ3Iiwicm91bmRlZCIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsImluZGV4IiwidGV4dEFsaWduIiwic2xpY2UiLCJjb2xvciIsIm10IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});