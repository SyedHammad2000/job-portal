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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    // useEffect(() => {\n    //   setUser(JSON.parse(localStorage.getItem(\"user\")));\n    //   const sockets = io({\n    //     path: \"/api/socket\",\n    //   });\n    //   setSocket(sockets);\n    //   sockets.on(\"newMessage\", (msg) => {\n    //     console.log(\"New message received:\", msg);\n    //     SetMessages((prev) => [...prev, msg]);\n    //   });\n    //   // Unique room for the chat\n    //   sockets.emit(\"joinRoom\", { room: \"abc\" });\n    //   // Listen for new messages\n    //   const fetchUser = async () => {\n    //     if (!nookies.get().token || !id) {\n    //       return console.log(\"erroe\");\n    //     }\n    //     const res = await axios.get(`${baseURL}/api/chat/${id}`, {\n    //       headers: {\n    //         Authorization: `Bearer ${token}`,\n    //       },\n    //     });\n    //     SetMessages(res?.data?.chat?.messages || []);\n    //   };\n    //   fetchUser();\n    //   return () => {\n    //     sockets.disconnect();\n    //   };\n    // }, [id]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        setUser(userId._id);\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"abc\";\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_5___default())(\"4d4ed87c336a296d9617\", {\n            cluster: \"ap1\",\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev,\n                    data\n                ]);\n            console.log(\"message\", data);\n        });\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            pusher.unbind_all;\n            pusher.unsubscribe(Channelname);\n        };\n    }, [\n        id\n    ]);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            // socket.emit(\"sendMessage\", {\n            //   room: \"abc\", // The room id or chat id\n            //   message: {\n            //     text: message,\n            //     timestamp: new Date(),\n            //     sender: user._id, // Ensure you include sender id or user info\n            //   },\n            // });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 148,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \"wheat\",\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 167,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    color: msg.sender === user ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 166,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 163,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E7OzhDQUNGLDhEQUFDTSxrREFBSUE7b0NBQUM2RSxXQUFXRixJQUFJRyxNQUFNLEtBQUsvRCxPQUFPLFVBQVU7OENBQzlDNEQsSUFBSXpCLElBQUk7Ozs7Ozs4Q0FFWCw4REFBQ2xELGtEQUFJQTtvQ0FBQzZFLFdBQVdGLElBQUlHLE1BQU0sS0FBSy9ELE9BQU8sVUFBVTs4Q0FDOUM0RCxJQUFJSSxTQUFTLENBQUNDLEtBQUssQ0FBQyxLQUFLOzs7Ozs7OENBRTVCLDhEQUFDaEYsa0RBQUlBO29DQUNIaUYsT0FBT04sSUFBSUcsTUFBTSxLQUFLL0QsT0FBTyxVQUFVO29DQUN2QzhELFdBQVdGLElBQUlHLE1BQU0sS0FBSy9ELE9BQU8sVUFBVTs4Q0FFMUM0RCxJQUFJRyxNQUFNOzs7Ozs7OzJCQVhMRjs7Ozs7b0JBZWQ7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDN0UsbURBQUtBO2dCQUNKbUYsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBT3ZFO2dCQUNQd0UsVUFBVSxDQUFDdEMsSUFBTWpDLFdBQVdpQyxFQUFFdUMsTUFBTSxDQUFDRixLQUFLO2dCQUMxQ0csYUFBWTtnQkFDWnBCLEdBQUc7b0JBQUM7b0JBQVE7b0JBQU87b0JBQU87aUJBQU07Ozs7OzswQkFFbEMsOERBQUN4RSxvREFBTUE7Z0JBQUN1RixJQUFHO2dCQUFJTSxTQUFTMUM7MEJBQWE7Ozs7Ozs7Ozs7OztBQUszQztHQXBMTXJDO0tBQUFBOztBQXNMTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9baWRdLmpzeD9jMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkaW5nLFxyXG4gIElucHV0LFxyXG4gIFRleHQsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSBcInB1c2hlci1qc1wiO1xyXG5jb25zdCBNZXNzYWdlID0gKHsgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgU2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBTZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBsZXQgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBub29raWVzLmdldCgpLnRva2VuO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBzZXRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSk7XHJcbiAgLy8gICBjb25zdCBzb2NrZXRzID0gaW8oe1xyXG4gIC8vICAgICBwYXRoOiBcIi9hcGkvc29ja2V0XCIsXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHNldFNvY2tldChzb2NrZXRzKTtcclxuXHJcbiAgLy8gICBzb2NrZXRzLm9uKFwibmV3TWVzc2FnZVwiLCAobXNnKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiTmV3IG1lc3NhZ2UgcmVjZWl2ZWQ6XCIsIG1zZyk7XHJcbiAgLy8gICAgIFNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgbXNnXSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIC8vIFVuaXF1ZSByb29tIGZvciB0aGUgY2hhdFxyXG4gIC8vICAgc29ja2V0cy5lbWl0KFwiam9pblJvb21cIiwgeyByb29tOiBcImFiY1wiIH0pO1xyXG5cclxuICAvLyAgIC8vIExpc3RlbiBmb3IgbmV3IG1lc3NhZ2VzXHJcblxyXG4gIC8vICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBpZiAoIW5vb2tpZXMuZ2V0KCkudG9rZW4gfHwgIWlkKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCwge1xyXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICBTZXRNZXNzYWdlcyhyZXM/LmRhdGE/LmNoYXQ/Lm1lc3NhZ2VzIHx8IFtdKTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBmZXRjaFVzZXIoKTtcclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICBzb2NrZXRzLmRpc2Nvbm5lY3QoKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW2lkXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHNldFVzZXIodXNlcklkLl9pZCk7XHJcbiAgICBpZiAoIWlkIHx8ICF1c2VySWQuX2lkKSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9lXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgQ2hhbm5lbG5hbWUgPSBgYWJjYDtcclxuXHJcbiAgICBjb25zdCBwdXNoZXIgPSBuZXcgUHVzaGVyKFwiNGQ0ZWQ4N2MzMzZhMjk2ZDk2MTdcIiwge1xyXG4gICAgICBjbHVzdGVyOiBcImFwMVwiLFxyXG4gICAgICBhdXRoRW5kcG9pbnQ6IFwiYXBpL3B1c2hlci9hdXRoXCIsXHJcbiAgICAgIHVzZVRMUzogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNoYW5uZWwgPSBwdXNoZXIuc3Vic2NyaWJlKENoYW5uZWxuYW1lKTtcclxuICAgIGNoYW5uZWwuYmluZChcIm5ld01lc3NhZ2VcIiwgKGRhdGEpID0+IHtcclxuICAgICAgU2V0TWVzc2FnZXMoKHByZXYpID0+IFsuLi5wcmV2LCBkYXRhXSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWVzc2FnZVwiLCBkYXRhKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIW5vb2tpZXMuZ2V0KCkudG9rZW4gfHwgIWlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBTZXRNZXNzYWdlcyhyZXM/LmRhdGE/LmNoYXQ/Lm1lc3NhZ2VzIHx8IFtdKTtcclxuICAgIH07XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwdXNoZXIudW5iaW5kX2FsbFxyXG4gICAgICBwdXNoZXIudW5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgfTtcclxuICB9LCBbaWRdKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAhc29ja2V0XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlXCIsIHtcclxuICAgICAgLy8gICByb29tOiBcImFiY1wiLCAvLyBUaGUgcm9vbSBpZCBvciBjaGF0IGlkXHJcbiAgICAgIC8vICAgbWVzc2FnZToge1xyXG4gICAgICAvLyAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgLy8gICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgLy8gICAgIHNlbmRlcjogdXNlci5faWQsIC8vIEVuc3VyZSB5b3UgaW5jbHVkZSBzZW5kZXIgaWQgb3IgdXNlciBpbmZvXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKGRhdGE/LmNoYXQ/Lm1lc3NhZ2VzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBcIm1lc2dcIik7XHJcblxyXG4gIGNvbnN0IHNjcm9sID0ge1xyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODg4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1pblc9e1wiMTAwJVwifVxyXG4gICAgICBwPXtcIjJcIn1cclxuICAgICAgZ2FwPXsyfVxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgIG09ezJ9XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nPk1lc3NlbmdlcjwvSGVhZGluZz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnPXtcIndoZWF0XCJ9XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCB3aGVhdFwifVxyXG4gICAgICAgIGJveFNoYWRvdz17XCJyZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGltZXN0YW1wLnNsaWNlKFwiMFwiLCBcIjEwXCIpfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgY29sb3I9e21zZy5zZW5kZXIgPT09IHVzZXIgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge21zZy5zZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBtdD1cIjVcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IFNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTWVzc2FnZVwiXHJcbiAgICAgICAgdz17W1wiMTAwJVwiLCBcIjcwJVwiLCBcIjUwJVwiLCBcIjQwJVwiXX1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbiBtdD1cIjRcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgU2VuZFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGlkLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYmFzZVVSTCIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkdyaWQiLCJIZWFkaW5nIiwiSW5wdXQiLCJUZXh0IiwiVlN0YWNrIiwiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibm9va2llcyIsImlvIiwiUHVzaGVyIiwiTWVzc2FnZSIsImlkIiwibWVzc2FnZXMiLCJTZXRNZXNzYWdlcyIsIm1lc3NhZ2UiLCJTZXRNZXNzYWdlIiwidXNlciIsInNldFVzZXIiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJ0b2tlbiIsImdldCIsInVzZXJJZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfaWQiLCJjb25zb2xlIiwibG9nIiwiQ2hhbm5lbG5hbWUiLCJwdXNoZXIiLCJjbHVzdGVyIiwiYXV0aEVuZHBvaW50IiwidXNlVExTIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJkYXRhIiwicHJldiIsImZldGNoVXNlciIsInJlcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2hhdCIsInVuYmluZF9hbGwiLCJ1bnN1YnNjcmliZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJzY3JvbCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1pblciLCJwIiwiZ2FwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtIiwidGVtcGxhdGVDb2x1bW5zIiwibWF4SCIsImgiLCJvdmVyZmxvd1kiLCJ3IiwiYmciLCJzeCIsImJvcmRlciIsImJveFNoYWRvdyIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwidGltZXN0YW1wIiwic2xpY2UiLCJjb2xvciIsIm10IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});