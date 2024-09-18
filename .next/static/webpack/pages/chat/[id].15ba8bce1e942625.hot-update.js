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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_baseURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helper/baseURL */ \"./src/helper/baseURL.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Message = (param)=>{\n    let { id } = param;\n    _s();\n    const [messages, SetMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [message, SetMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    let [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const token = nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token;\n    const fetchUser = async ()=>{\n        var _res_data_chat, _res_data;\n        if (!nookies__WEBPACK_IMPORTED_MODULE_3___default().get().token || !id) {\n            return console.log(\"erroe\");\n        }\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(\"res\", res === null || res === void 0 ? void 0 : res.data);\n        SetMessages((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_chat = _res_data.chat) === null || _res_data_chat === void 0 ? void 0 : _res_data_chat.messages) || []);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUser();\n        const userId = JSON.parse(localStorage.getItem(\"user\"));\n        setUser(userId);\n        if (!id || !userId._id) {\n            return console.log(\"erroe\");\n        }\n        const Channelname = \"abc\";\n        const pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_4___default())(\"4d4ed87c336a296d9617\", {\n            cluster: \"ap1\",\n            authEndpoint: \"api/pusher/auth\",\n            useTLS: true\n        });\n        const channel = pusher.subscribe(Channelname);\n        channel.bind(\"newMessage\", (data)=>{\n            SetMessages((prev)=>[\n                    ...prev || [],\n                    data\n                ]);\n            console.log(\"message\", data);\n        });\n        return ()=>{\n            pusher.unbind_all();\n            pusher.unsubscribe(Channelname);\n        };\n    }, [\n        id\n    ]);\n    console.log(user, \"user\");\n    const handleClick = async (e)=>{\n        // !socket\n        e.preventDefault();\n        if (message) {\n            var _data_chat;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\").concat(id), {\n                text: message\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            SetMessages(data === null || data === void 0 ? void 0 : (_data_chat = data.chat) === null || _data_chat === void 0 ? void 0 : _data_chat.messages);\n            SetMessage(\"\");\n        }\n    };\n    console.log(messages, \"mesg\");\n    const createClick = async (e)=>{\n        e.preventDefault();\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"\".concat(_helper_baseURL__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \"/api/chat/\"), {\n            user\n        }, {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        console.log(data);\n    };\n    const scrol = {\n        \"&::-webkit-scrollbar\": {\n            width: \"10px\"\n        },\n        \"&::-webkit-scrollbar-track\": {\n            background: \"lightblue\"\n        },\n        \"&::-webkit-scrollbar-thumb\": {\n            background: \"#888\",\n            borderRadius: \"2px\"\n        },\n        \"&::-webkit-scrollbar-thumb:hover\": {\n            background: \"black\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        minW: \"100%\",\n        p: \"2\",\n        gap: 2,\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        m: 2,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                children: \"Messenger\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                templateColumns: \"repeat(1,1fr)\",\n                gap: 1,\n                maxH: \"80vh\",\n                h: \"80vh\",\n                p: 2,\n                overflowY: \"scroll\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ],\n                borderRadius: \"10px\",\n                sx: scrol,\n                border: \"2px solid wheat\",\n                boxShadow: \"rgba(0, 0, 0, 0.35) 0px 5px 15px\",\n                // bg=\"grey\"\n                opacity: (messages === null || messages === void 0 ? void 0 : messages.length) > 0 ? \"1\" : \"0.5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {\n                    spacing: 4,\n                    align: \"\",\n                    justifyContent: \"center\",\n                    w: \"\",\n                    children: messages === null || messages === void 0 ? void 0 : messages.map((msg, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.text\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.timestamp.slice(\"0\", \"10\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 150,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                    color: msg.sender === user.name ? \"green\" : \"red\",\n                                    textAlign: msg.sender === user.name ? \"right\" : \"left\",\n                                    children: msg.sender\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                            lineNumber: 146,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                mt: \"5\",\n                type: \"text\",\n                value: message,\n                onChange: (e)=>SetMessage(e.target.value),\n                placeholder: \"Enter Message\",\n                w: [\n                    \"100%\",\n                    \"70%\",\n                    \"50%\",\n                    \"40%\"\n                ]\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, undefined),\n            messages.length < 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: handleClick,\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 173,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                mt: \"4\",\n                onClick: createClick,\n                children: \"Create Chat\"\n            }, void 0, false, {\n                fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n                lineNumber: 177,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\job-portals\\\\src\\\\pages\\\\chat\\\\[id].jsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Message, \"w/fuV+Z81PHfkMohIJgfBU4Iykg=\");\n_c = Message;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);\nvar _c;\n$RefreshReg$(_c, \"Message\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdC9baWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQVViO0FBQ0E7QUFDeUI7QUFDckI7QUFDQztBQUMvQixNQUFNZSxVQUFVO1FBQUMsRUFBRUMsRUFBRSxFQUFFOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBO0lBQ3RDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUE7SUFDaEMsSUFBSSxDQUFDVyxRQUFRQyxVQUFVLEdBQUdaLCtDQUFRQTtJQUNsQyxNQUFNYSxRQUFRWixrREFBVyxHQUFHWSxLQUFLO0lBRWpDLE1BQU1FLFlBQVk7WUFXSkMsZ0JBQUFBO1FBVlosSUFBSSxDQUFDZixrREFBVyxHQUFHWSxLQUFLLElBQUksQ0FBQ1QsSUFBSTtZQUMvQixPQUFPYSxRQUFRQyxHQUFHLENBQUM7UUFDckI7UUFDQSxNQUFNRixNQUFNLE1BQU1uQixpREFBUyxDQUFDLEdBQXVCTyxPQUFwQmhCLHVEQUFPQSxFQUFDLGNBQWUsT0FBSGdCLEtBQU07WUFDdkRlLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTlA7WUFDM0I7UUFDRjtRQUVBSSxRQUFRQyxHQUFHLENBQUMsT0FBT0YsZ0JBQUFBLDBCQUFBQSxJQUFLSyxJQUFJO1FBQzVCZixZQUFZVSxDQUFBQSxnQkFBQUEsMkJBQUFBLFlBQUFBLElBQUtLLElBQUksY0FBVEwsaUNBQUFBLGlCQUFBQSxVQUFXTSxJQUFJLGNBQWZOLHFDQUFBQSxlQUFpQlgsUUFBUSxLQUFJLEVBQUU7SUFDN0M7SUFFQU4sZ0RBQVNBLENBQUM7UUFDUmdCO1FBQ0EsTUFBTVEsU0FBU0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7UUFDL0NqQixRQUFRYTtRQUNSLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ21CLE9BQU9LLEdBQUcsRUFBRTtZQUN0QixPQUFPWCxRQUFRQyxHQUFHLENBQUM7UUFDckI7UUFDQSxNQUFNVyxjQUFlO1FBRXJCLE1BQU1DLFNBQVMsSUFBSTVCLGtEQUFNQSxDQUFDLHdCQUF3QjtZQUNoRDZCLFNBQVM7WUFDVEMsY0FBYztZQUNkQyxRQUFRO1FBQ1Y7UUFFQSxNQUFNQyxVQUFVSixPQUFPSyxTQUFTLENBQUNOO1FBQ2pDSyxRQUFRRSxJQUFJLENBQUMsY0FBYyxDQUFDZjtZQUMxQmYsWUFBWSxDQUFDK0IsT0FBUzt1QkFBS0EsUUFBUSxFQUFFO29CQUFHaEI7aUJBQUs7WUFDN0NKLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRztRQUN6QjtRQUVBLE9BQU87WUFDTFMsT0FBT1EsVUFBVTtZQUNqQlIsT0FBT1MsV0FBVyxDQUFDVjtRQUNyQjtJQUNGLEdBQUc7UUFBQ3pCO0tBQUc7SUFDUGEsUUFBUUMsR0FBRyxDQUFDVCxNQUFNO0lBQ2xCLE1BQU0rQixjQUFjLE9BQU9DO1FBQ3pCLFVBQVU7UUFDVkEsRUFBRUMsY0FBYztRQUNoQixJQUFJbkMsU0FBUztnQkFhQ2M7WUFaWixNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHLE1BQU14QixrREFBVSxDQUMvQixHQUF1Qk8sT0FBcEJoQix1REFBT0EsRUFBQyxjQUFlLE9BQUhnQixLQUN2QjtnQkFDRXdDLE1BQU1yQztZQUNSLEdBQ0E7Z0JBQ0VZLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTlA7Z0JBQzNCO1lBQ0Y7WUFHRlAsWUFBWWUsaUJBQUFBLDRCQUFBQSxhQUFBQSxLQUFNQyxJQUFJLGNBQVZELGlDQUFBQSxXQUFZaEIsUUFBUTtZQUNoQ0csV0FBVztRQUNiO0lBQ0Y7SUFDQVMsUUFBUUMsR0FBRyxDQUFDYixVQUFVO0lBQ3RCLE1BQU13QyxjQUFjLE9BQU9KO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU0sRUFBRXJCLElBQUksRUFBRSxHQUFHLE1BQU14QixrREFBVSxDQUMvQixHQUFXLE9BQVJULHVEQUFPQSxFQUFDLGVBQ1g7WUFDRXFCO1FBQ0YsR0FDQTtZQUNFVSxTQUFTO2dCQUNQQyxlQUFlLFVBQWdCLE9BQU5QO1lBQzNCO1FBQ0Y7UUFFRkksUUFBUUMsR0FBRyxDQUFDRztJQUNkO0lBRUEsTUFBTXlCLFFBQVE7UUFDWix3QkFBd0I7WUFDdEJDLE9BQU87UUFDVDtRQUNBLDhCQUE4QjtZQUM1QkMsWUFBWTtRQUNkO1FBQ0EsOEJBQThCO1lBQzVCQSxZQUFZO1lBQ1pDLGNBQWM7UUFDaEI7UUFDQSxvQ0FBb0M7WUFDbENELFlBQVk7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUN6RCx1REFBU0E7UUFDUjJELE1BQU07UUFDTkMsR0FBRztRQUNIQyxLQUFLO1FBQ0xDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsR0FBRzs7MEJBRUgsOERBQUNoRSxxREFBT0E7MEJBQUM7Ozs7OzswQkFDVCw4REFBQ0Qsa0RBQUlBO2dCQUNIa0UsaUJBQWlCO2dCQUNqQk4sS0FBSztnQkFDTE8sTUFBTTtnQkFDTkMsR0FBRztnQkFDSFQsR0FBRztnQkFDSFUsV0FBVztnQkFDWEMsR0FBRztvQkFBQztvQkFBUTtvQkFBTztvQkFBTztpQkFBTTtnQkFDaENiLGNBQWM7Z0JBQ2RjLElBQUlqQjtnQkFDSmtCLFFBQVE7Z0JBQ1JDLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWkMsU0FBUzdELENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVThELE1BQU0sSUFBRyxJQUFJLE1BQU07MEJBRXRDLDRFQUFDdkUsb0RBQU1BO29CQUFDd0UsU0FBUztvQkFBR0MsT0FBTztvQkFBSWQsZ0JBQWdCO29CQUFVTyxHQUFHOzhCQUN6RHpELHFCQUFBQSwrQkFBQUEsU0FBVWlFLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQzt3QkFDbkIscUJBQ0UsOERBQUNuRixpREFBR0E7OzhDQUNGLDhEQUFDTSxrREFBSUE7b0NBQUM4RSxXQUFXRixJQUFJRyxNQUFNLEtBQUtqRSxLQUFLa0UsSUFBSSxHQUFHLFVBQVU7OENBQ25ESixJQUFJM0IsSUFBSTs7Ozs7OzhDQUVYLDhEQUFDakQsa0RBQUlBO29DQUFDOEUsV0FBV0YsSUFBSUcsTUFBTSxLQUFLakUsS0FBS2tFLElBQUksR0FBRyxVQUFVOzhDQUNuREosSUFBSUssU0FBUyxDQUFDQyxLQUFLLENBQUMsS0FBSzs7Ozs7OzhDQUU1Qiw4REFBQ2xGLGtEQUFJQTtvQ0FDSG1GLE9BQU9QLElBQUlHLE1BQU0sS0FBS2pFLEtBQUtrRSxJQUFJLEdBQUcsVUFBVTtvQ0FDNUNGLFdBQVdGLElBQUlHLE1BQU0sS0FBS2pFLEtBQUtrRSxJQUFJLEdBQUcsVUFBVTs4Q0FFL0NKLElBQUlHLE1BQU07Ozs7Ozs7MkJBWExGOzs7OztvQkFlZDs7Ozs7Ozs7Ozs7MEJBR0osOERBQUM5RSxtREFBS0E7Z0JBQ0pxRixJQUFHO2dCQUNIQyxNQUFLO2dCQUNMQyxPQUFPMUU7Z0JBQ1AyRSxVQUFVLENBQUN6QyxJQUFNakMsV0FBV2lDLEVBQUUwQyxNQUFNLENBQUNGLEtBQUs7Z0JBQzFDRyxhQUFZO2dCQUNadEIsR0FBRztvQkFBQztvQkFBUTtvQkFBTztvQkFBTztpQkFBTTs7Ozs7O1lBRWpDekQsU0FBUzhELE1BQU0sR0FBRyxrQkFDakIsOERBQUM3RSxvREFBTUE7Z0JBQUN5RixJQUFHO2dCQUFJTSxTQUFTN0M7MEJBQWE7Ozs7OzBDQUlyQyw4REFBQ2xELG9EQUFNQTtnQkFBQ3lGLElBQUc7Z0JBQUlNLFNBQVN4QzswQkFBYTs7Ozs7Ozs7Ozs7O0FBTTdDO0dBdktNMUM7S0FBQUE7O0FBeUtOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jaGF0L1tpZF0uanN4P2MwMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhc2VVUkwgZnJvbSBcIkAvaGVscGVyL2Jhc2VVUkxcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBHcmlkLFxyXG4gIEhlYWRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgVGV4dCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbm9va2llcyBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgUHVzaGVyIGZyb20gXCJwdXNoZXItanNcIjtcclxuY29uc3QgTWVzc2FnZSA9ICh7IGlkIH0pID0+IHtcclxuICBjb25zdCBbbWVzc2FnZXMsIFNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWVzc2FnZSwgU2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcbiAgbGV0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHRva2VuID0gbm9va2llcy5nZXQoKS50b2tlbjtcclxuXHJcbiAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFub29raWVzLmdldCgpLnRva2VuIHx8ICFpZCkge1xyXG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcnJvZVwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9hcGkvY2hhdC8ke2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZXNcIiwgcmVzPy5kYXRhKTtcclxuICAgIFNldE1lc3NhZ2VzKHJlcz8uZGF0YT8uY2hhdD8ubWVzc2FnZXMgfHwgW10pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFVzZXIoKTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIHNldFVzZXIodXNlcklkKTtcclxuICAgIGlmICghaWQgfHwgIXVzZXJJZC5faWQpIHtcclxuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiZXJyb2VcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBDaGFubmVsbmFtZSA9IGBhYmNgO1xyXG5cclxuICAgIGNvbnN0IHB1c2hlciA9IG5ldyBQdXNoZXIoXCI0ZDRlZDg3YzMzNmEyOTZkOTYxN1wiLCB7XHJcbiAgICAgIGNsdXN0ZXI6IFwiYXAxXCIsXHJcbiAgICAgIGF1dGhFbmRwb2ludDogXCJhcGkvcHVzaGVyL2F1dGhcIixcclxuICAgICAgdXNlVExTOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgY2hhbm5lbC5iaW5kKFwibmV3TWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xyXG4gICAgICBTZXRNZXNzYWdlcygocHJldikgPT4gWy4uLihwcmV2IHx8IFtdKSwgZGF0YV0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1lc3NhZ2VcIiwgZGF0YSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBwdXNoZXIudW5iaW5kX2FsbCgpO1xyXG4gICAgICBwdXNoZXIudW5zdWJzY3JpYmUoQ2hhbm5lbG5hbWUpO1xyXG4gICAgfTtcclxuICB9LCBbaWRdKTtcclxuICBjb25zb2xlLmxvZyh1c2VyLCBcInVzZXJcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgLy8gIXNvY2tldFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIGAke2Jhc2VVUkx9L2FwaS9jaGF0LyR7aWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgU2V0TWVzc2FnZXMoZGF0YT8uY2hhdD8ubWVzc2FnZXMpO1xyXG4gICAgICBTZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2cobWVzc2FnZXMsIFwibWVzZ1wiKTtcclxuICBjb25zdCBjcmVhdGVDbGljayA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIGAke2Jhc2VVUkx9L2FwaS9jaGF0L2AsXHJcbiAgICAgIHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNjcm9sID0ge1xyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJsaWdodGJsdWVcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCIjODg4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIycHhcIixcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1pblc9e1wiMTAwJVwifVxyXG4gICAgICBwPXtcIjJcIn1cclxuICAgICAgZ2FwPXsyfVxyXG4gICAgICBkaXNwbGF5PXtcImZsZXhcIn1cclxuICAgICAgZmxleERpcmVjdGlvbj17XCJjb2x1bW5cIn1cclxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XHJcbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgIG09ezJ9XHJcbiAgICA+XHJcbiAgICAgIDxIZWFkaW5nPk1lc3NlbmdlcjwvSGVhZGluZz5cclxuICAgICAgPEdyaWRcclxuICAgICAgICB0ZW1wbGF0ZUNvbHVtbnM9e1wicmVwZWF0KDEsMWZyKVwifVxyXG4gICAgICAgIGdhcD17MX1cclxuICAgICAgICBtYXhIPXtcIjgwdmhcIn1cclxuICAgICAgICBoPXtcIjgwdmhcIn1cclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG92ZXJmbG93WT17XCJzY3JvbGxcIn1cclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAgIGJvcmRlclJhZGl1cz17XCIxMHB4XCJ9XHJcbiAgICAgICAgc3g9e3Njcm9sfVxyXG4gICAgICAgIGJvcmRlcj17XCIycHggc29saWQgd2hlYXRcIn1cclxuICAgICAgICBib3hTaGFkb3c9e1wicmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHhcIn1cclxuICAgICAgICAvLyBiZz1cImdyZXlcIlxyXG4gICAgICAgIG9wYWNpdHk9e21lc3NhZ2VzPy5sZW5ndGggPiAwID8gXCIxXCIgOiBcIjAuNVwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPFZTdGFjayBzcGFjaW5nPXs0fSBhbGlnbj17XCJcIn0ganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IHc9e1wiXCJ9PlxyXG4gICAgICAgICAge21lc3NhZ2VzPy5tYXAoKG1zZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8Qm94IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPXttc2cuc2VuZGVyID09PSB1c2VyLm5hbWUgPyBcInJpZ2h0XCIgOiBcImxlZnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIHttc2cudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj17bXNnLnNlbmRlciA9PT0gdXNlci5uYW1lID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnRpbWVzdGFtcC5zbGljZShcIjBcIiwgXCIxMFwiKX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXttc2cuc2VuZGVyID09PSB1c2VyLm5hbWUgPyBcImdyZWVuXCIgOiBcInJlZFwifVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249e21zZy5zZW5kZXIgPT09IHVzZXIubmFtZSA/IFwicmlnaHRcIiA6IFwibGVmdFwifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bXNnLnNlbmRlcn1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIG10PVwiNVwiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gU2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZXNzYWdlXCJcclxuICAgICAgICB3PXtbXCIxMDAlXCIsIFwiNzAlXCIsIFwiNTAlXCIsIFwiNDAlXCJdfVxyXG4gICAgICAvPlxyXG4gICAgICB7bWVzc2FnZXMubGVuZ3RoIDwgMCA/IChcclxuICAgICAgICA8QnV0dG9uIG10PVwiNFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QnV0dG9uIG10PVwiNFwiIG9uQ2xpY2s9e2NyZWF0ZUNsaWNrfT5cclxuICAgICAgICAgIENyZWF0ZSBDaGF0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbImJhc2VVUkwiLCJCb3giLCJCdXR0b24iLCJDb250YWluZXIiLCJHcmlkIiwiSGVhZGluZyIsIklucHV0IiwiVGV4dCIsIlZTdGFjayIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm5vb2tpZXMiLCJQdXNoZXIiLCJNZXNzYWdlIiwiaWQiLCJtZXNzYWdlcyIsIlNldE1lc3NhZ2VzIiwibWVzc2FnZSIsIlNldE1lc3NhZ2UiLCJ1c2VyIiwic2V0VXNlciIsInNvY2tldCIsInNldFNvY2tldCIsInRva2VuIiwiZ2V0IiwiZmV0Y2hVc2VyIiwicmVzIiwiY29uc29sZSIsImxvZyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImNoYXQiLCJ1c2VySWQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2lkIiwiQ2hhbm5lbG5hbWUiLCJwdXNoZXIiLCJjbHVzdGVyIiwiYXV0aEVuZHBvaW50IiwidXNlVExTIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJwcmV2IiwidW5iaW5kX2FsbCIsInVuc3Vic2NyaWJlIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGV4dCIsImNyZWF0ZUNsaWNrIiwic2Nyb2wiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJtaW5XIiwicCIsImdhcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibSIsInRlbXBsYXRlQ29sdW1ucyIsIm1heEgiLCJoIiwib3ZlcmZsb3dZIiwidyIsInN4IiwiYm9yZGVyIiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImxlbmd0aCIsInNwYWNpbmciLCJhbGlnbiIsIm1hcCIsIm1zZyIsImluZGV4IiwidGV4dEFsaWduIiwic2VuZGVyIiwibmFtZSIsInRpbWVzdGFtcCIsInNsaWNlIiwiY29sb3IiLCJtdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chat/[id].jsx\n"));

/***/ })

});