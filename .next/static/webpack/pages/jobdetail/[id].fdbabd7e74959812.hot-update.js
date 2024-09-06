"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobdetail/[id]",{

/***/ "./src/components/cloudinarycomponent/useCloudinary.jsx":
/*!**************************************************************!*\
  !*** ./src/components/cloudinarycomponent/useCloudinary.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\n// import { Input } from \"postcss\";\n\nconst useCloudinary = ()=>{\n    _s();\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();\n    const [Pics, setPics] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const [loading, setloading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const Postdetail = async (pics)=>{\n        setloading(true);\n        if (pics === undefined) {\n            setPics(\"\");\n            setloading(false);\n            return toast({\n                title: \"Please Select an Image\",\n                status: \"warning\",\n                duration: 3000,\n                isClosable: true,\n                position: \"bottom\"\n            });\n        }\n        if (pics.type === \"application/pdf\") {\n            const formdata = new FormData();\n            formdata.append(\"file\", pics);\n            formdata.append(\"upload_preset\", \"ecommerce\");\n            formdata.append(\"cloud_name\", \"dn3tasa5d\");\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://api.cloudinary.com/v1_1/dn3tasa5d/image/upload\", formdata);\n            await setPics(res.data.url);\n            setloading(false);\n        }\n        if (pics.type === \"image/jpeg\" || pics.type === \"image/png\") {\n            const formdata = new FormData();\n            formdata.append(\"file\", pics);\n            formdata.append(\"upload_preset\", \"ecommerce\");\n            formdata.append(\"cloud_name\", \"dn3tasa5d\");\n            const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"https://api.cloudinary.com/v1_1/dn3tasa5d/image/upload\", formdata);\n            await setPics(res.data.url);\n            if (response.ok) {\n                toast({});\n            }\n        } else {\n            toast({\n                title: \"error in image uploading\",\n                status: \"warning\",\n                duration: 3000,\n                isClosable: true,\n                position: \"top-left\"\n            });\n        }\n    };\n    return {\n        Postdetail,\n        Pics,\n        loading,\n        setPics\n    };\n};\n_s(useCloudinary, \"/WA/x3Sdwl+aO42N9LPZbpsLEzU=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useCloudinary);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jbG91ZGluYXJ5Y29tcG9uZW50L3VzZUNsb3VkaW5hcnkuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRTtBQUNqRDtBQUMxQixtQ0FBbUM7QUFDSztBQUV4QyxNQUFNTyxnQkFBZ0I7O0lBQ3BCLE1BQU1DLFFBQVFMLDBEQUFRQTtJQUN0QixNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBO0lBQ2hDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNTyxhQUFhLE9BQU9DO1FBQ3hCRixXQUFXO1FBQ1gsSUFBSUUsU0FBU0MsV0FBVztZQUN0QkwsUUFBUTtZQUNSRSxXQUFXO1lBQ1gsT0FBT0osTUFBTTtnQkFDWFEsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1FBQ0Y7UUFFQSxJQUFJTixLQUFLTyxJQUFJLEtBQUssbUJBQW1CO1lBQ25DLE1BQU1DLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxRQUFRVjtZQUN4QlEsU0FBU0UsTUFBTSxDQUFDLGlCQUFpQjtZQUNqQ0YsU0FBU0UsTUFBTSxDQUFDLGNBQWM7WUFDOUIsTUFBTUMsTUFBTSxNQUFNckIsa0RBQVUsQ0FDMUIsMERBQ0FrQjtZQUVGLE1BQU1aLFFBQVFlLElBQUlFLElBQUksQ0FBQ0MsR0FBRztZQUMxQmhCLFdBQVc7UUFDYjtRQUNBLElBQUlFLEtBQUtPLElBQUksS0FBSyxnQkFBZ0JQLEtBQUtPLElBQUksS0FBSyxhQUFhO1lBQzNELE1BQU1DLFdBQVcsSUFBSUM7WUFDckJELFNBQVNFLE1BQU0sQ0FBQyxRQUFRVjtZQUN4QlEsU0FBU0UsTUFBTSxDQUFDLGlCQUFpQjtZQUNqQ0YsU0FBU0UsTUFBTSxDQUFDLGNBQWM7WUFDOUIsTUFBTUMsTUFBTSxNQUFNckIsa0RBQVUsQ0FDMUIsMERBQ0FrQjtZQUVGLE1BQU1aLFFBQVFlLElBQUlFLElBQUksQ0FBQ0MsR0FBRztZQUM1QixJQUFHQyxTQUFTQyxFQUFFLEVBQUM7Z0JBQ2J0QixNQUFNLENBRU47WUFFRjtRQUNBLE9BQU87WUFDTEEsTUFBTTtnQkFDSlEsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsVUFBVTtnQkFDVkMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUNBLE9BQU87UUFDTFA7UUFDQUo7UUFDQUU7UUFDQUQ7SUFDRjtBQUNGO0dBOURNSDs7UUFDVUosc0RBQVFBOzs7QUErRHhCLCtEQUFlSSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Nsb3VkaW5hcnljb21wb25lbnQvdXNlQ2xvdWRpbmFyeS5qc3g/ODVkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgdXNlVG9hc3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCB7IElucHV0IH0gZnJvbSBcInBvc3Rjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VDbG91ZGluYXJ5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuICBjb25zdCBbUGljcywgc2V0UGljc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBQb3N0ZGV0YWlsID0gYXN5bmMgKHBpY3MpID0+IHtcclxuICAgIHNldGxvYWRpbmcodHJ1ZSk7XHJcbiAgICBpZiAocGljcyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNldFBpY3MoXCJcIik7XHJcbiAgICAgIHNldGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gdG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiBcIlBsZWFzZSBTZWxlY3QgYW4gSW1hZ2VcIixcclxuICAgICAgICBzdGF0dXM6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwaWNzLnR5cGUgPT09IFwiYXBwbGljYXRpb24vcGRmXCIpIHtcclxuICAgICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBwaWNzKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImVjb21tZXJjZVwiKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImRuM3Rhc2E1ZFwiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvZG4zdGFzYTVkL2ltYWdlL3VwbG9hZFwiLFxyXG4gICAgICAgIGZvcm1kYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGF3YWl0IHNldFBpY3MocmVzLmRhdGEudXJsKTtcclxuICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGljcy50eXBlID09PSBcImltYWdlL2pwZWdcIiB8fCBwaWNzLnR5cGUgPT09IFwiaW1hZ2UvcG5nXCIpIHtcclxuICAgICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiZmlsZVwiLCBwaWNzKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcImVjb21tZXJjZVwiKTtcclxuICAgICAgZm9ybWRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImRuM3Rhc2E1ZFwiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvZG4zdGFzYTVkL2ltYWdlL3VwbG9hZFwiLFxyXG4gICAgICAgIGZvcm1kYXRhXHJcbiAgICAgICk7XHJcbiAgICAgIGF3YWl0IHNldFBpY3MocmVzLmRhdGEudXJsKTtcclxuICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgdG9hc3Qoe1xyXG4gICAgICAgIFxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvYXN0KHtcclxuICAgICAgICB0aXRsZTogXCJlcnJvciBpbiBpbWFnZSB1cGxvYWRpbmdcIixcclxuICAgICAgICBzdGF0dXM6IFwid2FybmluZ1wiLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGlzQ2xvc2FibGU6IHRydWUsXHJcbiAgICAgICAgcG9zaXRpb246IFwidG9wLWxlZnRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgUG9zdGRldGFpbCxcclxuICAgIFBpY3MsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgc2V0UGljcyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ2xvdWRpbmFyeTtcclxuIl0sIm5hbWVzIjpbIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJ1c2VUb2FzdCIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNsb3VkaW5hcnkiLCJ0b2FzdCIsIlBpY3MiLCJzZXRQaWNzIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJQb3N0ZGV0YWlsIiwicGljcyIsInVuZGVmaW5lZCIsInRpdGxlIiwic3RhdHVzIiwiZHVyYXRpb24iLCJpc0Nsb3NhYmxlIiwicG9zaXRpb24iLCJ0eXBlIiwiZm9ybWRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlcyIsInBvc3QiLCJkYXRhIiwidXJsIiwicmVzcG9uc2UiLCJvayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cloudinarycomponent/useCloudinary.jsx\n"));

/***/ })

});