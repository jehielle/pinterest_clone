"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[userId]/page",{

/***/ "(app-pages-browser)/./app/components/UserTag.tsx":
/*!************************************!*\
  !*** ./app/components/UserTag.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction UserTag(param) {\n    let { user = {} } = param;\n    const { name = \"\", email = \"\", image = \"\" } = user;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-3 items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: image,\n                    alt: \"user image\",\n                    width: 25,\n                    height: 25,\n                    className: \"rounded-full ml-6 mb-4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserTag.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-[14px] font-medium\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserTag.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-[12px]\",\n                            children: email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserTag.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserTag.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserTag.tsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserTag.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = UserTag;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTag);\nvar _c;\n$RefreshReg$(_c, \"UserTag\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1VzZXJUYWcudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QjtBQUNLO0FBUTlCLFNBQVNFLFFBQVEsS0FBcUI7UUFBckIsRUFBRUMsT0FBUSxDQUFDLENBQVMsRUFBQyxHQUFyQjtJQUNmLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEVBQUVDLFFBQVEsRUFBRSxFQUFFQyxRQUFRLEVBQUUsRUFBRSxHQUFHSDtJQUM5QyxxQkFDRSw4REFBQ0k7a0JBQ0lKLHFCQUNHLDhEQUFDSTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ1Asa0RBQUtBO29CQUFDUSxLQUFNSDtvQkFBUUksS0FBSTtvQkFBYUMsT0FBTztvQkFBSUMsUUFBUTtvQkFBSUosV0FBVTs7Ozs7OzhCQUV2RSw4REFBQ0Q7O3NDQUNHLDhEQUFDTTs0QkFBR0wsV0FBVTtzQ0FBMkJKOzs7Ozs7c0NBQ3pDLDhEQUFDUzs0QkFBR0wsV0FBVTtzQ0FBZUg7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUd4Qzs7Ozs7O0FBR1Q7S0FoQlNIO0FBa0JULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1VzZXJUYWcudHN4P2JkNDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyVGFnKHsgdXNlciAgPSB7fSBhcyBVc2VyfSkge1xyXG4gIGNvbnN0IHsgbmFtZSA9ICcnLCBlbWFpbCA9ICcnLCBpbWFnZSA9ICcnIH0gPSB1c2VyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHt1c2VyP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17IGltYWdlIH0gYWx0PVwidXNlciBpbWFnZVwiIHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgbWwtNiBtYi00Jy8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LVsxNHB4XSBmb250LW1lZGl1bSc+e25hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LVsxMnB4XSc+e2VtYWlsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOm51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJUYWciXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIlVzZXJUYWciLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/UserTag.tsx\n"));

/***/ })

});