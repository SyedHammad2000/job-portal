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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    // useEffect(() => {\n    //   setUser(JSON.parse(localStorage.getItem(\"user\")));\n    //   const sockets = io({\n    //     path: \"/api/socket\",\n    //   });\n    //   setSocket(sockets);\n    //   sockets.on(\"newMessage\", (msg) => {\n    //     console.log(\"New message received:\", msg);\n    //     SetMessages((prev) => [...prev, msg]);\n    //   });\n    //   // Unique room for the chat\n    //   sockets.emit(\"joinRoom\", { room: \"abc\" });\n    //   // Listen for new messages\n    //   const fetchUser = async () => {\n    //     if (!nookies.get().token || !id) {\n    //       return console.log(\"erroe\");\n    //     }\n    //     const res = await axios.get(`${baseURL}/api/chat/${id}`, {\n    //       headers: {\n    //         Authorization: `Bearer ${token}`,\n    //       },\n    //     });\n    //     SetMessages(res?.data?.chat?.messages || []);\n    //   };\n    //   fetchUser();\n    //   return () => {\n    //     sockets.disconnect();\n    //   };\n    // }, [id]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"private\".concat(id, \"-\").concat(userId._id);\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_5___default())(\"4d4ed87c336a296d9617\", {\n            cluster: ap1,\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev,\n                    data\n                ]);\n        });\n        const fetchUser = async ()=>{\n            var _res_data_chat, _res_data;\n            if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n                return console.log(\"erroe\");\n            }\n            const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n        };\n        fetchUser();\n        return ()=>{\n            pusher.unsubscribe(Channelname);\n        };\n    }, []);\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            // socket.emit(\"sendMessage\", {\n            //   room: \"abc\", // The room id or chat id\n            //   message: {\n            //     text: message,\n            //     timestamp: new Date(),\n            //     sender: user._id, // Ensure you include sender id or user info\n            //   },\n            // });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n        }\n    };\n    console.log(messages, \"mesg\");\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 145,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                bg: \"wheat\",\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 167,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                    color: msg.sender === user._id ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user._id ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 163,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 160,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 189,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 135,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSUcsTUFBTSxLQUFLL0QsS0FBS1csR0FBRyxHQUFHLFVBQVU7OENBQ2xEaUQsSUFBSXpCLElBQUk7Ozs7Ozs4Q0FFWCw4REFBQ2xELGtEQUFJQTtvQ0FBQzZFLFdBQVdGLElBQUlHLE1BQU0sS0FBSy9ELEtBQUtXLEdBQUcsR0FBRyxVQUFVOzhDQUNsRGlELElBQUlJLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEtBQUs7Ozs7Ozs4Q0FFNUIsOERBQUNoRixrREFBSUE7b0NBQ0hpRixPQUFPTixJQUFJRyxNQUFNLEtBQUsvRCxLQUFLVyxHQUFHLEdBQUcsVUFBVTtvQ0FDM0NtRCxXQUFXRixJQUFJRyxNQUFNLEtBQUsvRCxLQUFLVyxHQUFHLEdBQUcsVUFBVTs4Q0FFOUNpRCxJQUFJRyxNQUFNOzs7Ozs7OzJCQVhMRjs7Ozs7b0JBZWQ7Ozs7Ozs7Ozs7OzBCQUdKLDhEQUFDN0UsbURBQUtBO2dCQUNKbUYsSUFBRztnQkFDSEMsTUFBSztnQkFDTEMsT0FBT3ZFO2dCQUNQd0UsVUFBVSxDQUFDdEMsSUFBTWpDLFdBQVdpQyxFQUFFdUMsTUFBTSxDQUFDRixLQUFLO2dCQUMxQ0csYUFBWTtnQkFDWnBCLEdBQUc7b0JBQUM7b0JBQVE7b0JBQU87b0JBQU87aUJBQU07Ozs7OzswQkFFbEMsOERBQUN4RSxvREFBTUE7Z0JBQUN1RixJQUFHO2dCQUFJTSxTQUFTMUM7MEJBQWE7Ozs7Ozs7Ozs7OztBQUszQztHQWpMTXJDO0tBQUFBOztBQW1MTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdC9baWRdLmpzeD9jMDIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlVVJMIGZyb20gXCJAL2hlbHBlci9iYXNlVVJMXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgR3JpZCxcclxuICBIZWFkaW5nLFxyXG4gIElucHV0LFxyXG4gIFRleHQsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5vb2tpZXMgZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSBcInB1c2hlci1qc1wiO1xyXG5jb25zdCBNZXNzYWdlID0gKHsgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgU2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBTZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuICBsZXQgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgdG9rZW4gPSBub29raWVzLmdldCgpLnRva2VuO1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBzZXRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSk7XHJcbiAgLy8gICBjb25zdCBzb2NrZXRzID0gaW8oe1xyXG4gIC8vICAgICBwYXRoOiBcIi9hcGkvc29ja2V0XCIsXHJcbiAgLy8gICB9KTtcclxuICAvLyAgIHNldFNvY2tldChzb2NrZXRzKTtcclxuXHJcbiAgLy8gICBzb2NrZXRzLm9uKFwibmV3TWVzc2FnZVwiLCAobXNnKSA9PiB7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiTmV3IG1lc3NhZ2UgcmVjZWl2ZWQ6XCIsIG1zZyk7XHJcbiAgLy8gICAgIFNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgbXNnXSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyAgIC8vIFVuaXF1ZSByb29tIGZvciB0aGUgY2hhdFxyXG4gIC8vICAgc29ja2V0cy5lbWl0KFwiam9pblJvb21cIiwgeyByb29tOiBcImFiY1wiIH0pO1xyXG5cclxuICAvLyAgIC8vIExpc3RlbiBmb3IgbmV3IG1lc3NhZ2VzXHJcblxyXG4gIC8vICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgICBpZiAoIW5vb2tpZXMuZ2V0KCkudG9rZW4gfHwgIWlkKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCwge1xyXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgICBTZXRNZXNzYWdlcyhyZXM/LmRhdGE/LmNoYXQ/Lm1lc3NhZ2VzIHx8IFtdKTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBmZXRjaFVzZXIoKTtcclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICBzb2NrZXRzLmRpc2Nvbm5lY3QoKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW2lkXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVzZXJJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGlmICghaWQgfHwgIXVzZXJJZC5faWQpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBDaGFubmVsbmFtZSA9IGBwcml2YXRlJHtpZH0tJHt1c2VySWQuX2lkfWA7XHJcblxyXG4gICAgY29uc3QgcHVzaGVyID0gbmV3IFB1c2hlcignNGQ0ZWQ4N2MzMzZhMjk2ZDk2MTcnLCB7XHJcbiAgICAgIGNsdXN0ZXI6IGFwMSxcclxuICAgICAgYXV0aEVuZHBvaW50OiBcImFwaS9wdXNoZXIvYXV0aFwiLFxyXG4gICAgICB1c2VUTFM6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjaGFubmVsID0gcHVzaGVyLnN1YnNjcmliZShDaGFubmVsbmFtZSk7XHJcbiAgICBjaGFubmVsLmJpbmQoXCJuZXdNZXNzYWdlXCIsIChkYXRhKSA9PiB7XHJcbiAgICAgIFNldE1lc3NhZ2VzKChwcmV2KSA9PiBbLi4ucHJldiwgZGF0YV0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghbm9va2llcy5nZXQoKS50b2tlbiB8fCAhaWQpIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHB1c2hlci51bnN1YnNjcmliZShDaGFubmVsbmFtZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAvLyAhc29ja2V0XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgYCR7YmFzZVVSTH0vYXBpL2NoYXQvJHtpZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBzb2NrZXQuZW1pdChcInNlbmRNZXNzYWdlXCIsIHtcclxuICAgICAgLy8gICByb29tOiBcImFiY1wiLCAvLyBUaGUgcm9vbSBpZCBvciBjaGF0IGlkXHJcbiAgICAgIC8vICAgbWVzc2FnZToge1xyXG4gICAgICAvLyAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgLy8gICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcclxuICAgICAgLy8gICAgIHNlbmRlcjogdXNlci5faWQsIC8vIEVuc3VyZSB5b3UgaW5jbHVkZSBzZW5kZXIgaWQgb3IgdXNlciBpbmZvXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIFNldE1lc3NhZ2VzKGRhdGE/LmNoYXQ/Lm1lc3NhZ2VzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKG1lc3NhZ2VzLCBcIm1lc2dcIik7XHJcblxyXG4gIGNvbnN0IHNjcm9sID0ge1xyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODg4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1pblc9e1wiMTAwJVwifVxyXG4gICAgICBwPXtcIjJcIn1cclxuICAgICAgZ2FwPXsyfVxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgIG09ezJ9XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nPk1lc3NlbmdlcjwvSGVhZGluZz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJnPXtcIndoZWF0XCJ9XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXtcIjEwcHhcIn1cclxuICAgICAgICBzeD17c2Nyb2x9XHJcbiAgICAgICAgYm9yZGVyPXtcIjJweCBzb2xpZCB3aGVhdFwifVxyXG4gICAgICAgIGJveFNoYWRvdz17XCJyZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLl9pZCA/IFwicmlnaHRcIiA6IFwibGVmdFwifT5cclxuICAgICAgICAgICAgICAgICAge21zZy50aW1lc3RhbXAuc2xpY2UoXCIwXCIsIFwiMTBcIil9XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17bXNnLnNlbmRlciA9PT0gdXNlci5faWQgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIuX2lkID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cuc2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgbXQ9XCI1XCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBTZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIE1lc3NhZ2VcIlxyXG4gICAgICAgIHc9e1tcIjEwMCVcIiwgXCI3MCVcIiwgXCI1MCVcIiwgXCI0MCVcIl19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b24gbXQ9XCI0XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIFNlbmRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5vb2tpZXMiLCJpbyIsIlB1c2hlciIsIk1lc3NhZ2UiLCJpZCIsIm1lc3NhZ2VzIiwiU2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwiU2V0TWVzc2FnZSIsInVzZXIiLCJzZXRVc2VyIiwic29ja2V0Iiwic2V0U29ja2V0IiwidG9rZW4iLCJnZXQiLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2lkIiwiY29uc29sZSIsImxvZyIsIkNoYW5uZWxuYW1lIiwicHVzaGVyIiwiY2x1c3RlciIsImFwMSIsImF1dGhFbmRwb2ludCIsInVzZVRMUyIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJiaW5kIiwiZGF0YSIsInByZXYiLCJmZXRjaFVzZXIiLCJyZXMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNoYXQiLCJ1bnN1YnNjcmliZSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsInRleHQiLCJzY3JvbCIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIm1pblciLCJwIiwiZ2FwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtIiwidGVtcGxhdGVDb2x1bW5zIiwibWF4SCIsImgiLCJvdmVyZmxvd1kiLCJ3IiwiYmciLCJzeCIsImJvcmRlciIsImJveFNoYWRvdyIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwidGltZXN0YW1wIiwic2xpY2UiLCJjb2xvciIsIm10IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});