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

/***/ "(app-pages-browser)/./app/components/UserInfo.tsx":
/*!*************************************!*\
  !*** ./app/components/UserInfo.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction UserInfo(param) {\n    let { userInfo } = param;\n    _s();\n    console.log(userInfo);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const onLogoutClick = ()=>{\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                src: userInfo.userImage,\n                alt: \"user image\",\n                width: 100,\n                height: 100,\n                className: \"rounded-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-[30px] font-semibold\",\n                children: userInfo.userName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-gray-400\",\n                children: userInfo.email\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full\",\n                        children: \"Share\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-gray-200 p-2 px-3 font-semibold mt-5 rounded-full\",\n                        onClick: ()=>onLogoutClick(),\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\components\\\\UserInfo.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(UserInfo, \"2+Xd5sPhD/JNqaeResT4OdOP+vg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = UserInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserInfo);\nvar _c;\n$RefreshReg$(_c, \"UserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1VzZXJJbmZvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ2I7QUFDdUI7QUFFdEQsU0FBU0ssU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ2hCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1YsTUFBTUcsU0FBU1IsMERBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsTUFBS0MsT0FBTyxFQUFFLEdBQUdSLDJEQUFVQTtJQUNuQyxNQUFNUyxnQkFBYztRQUNoQlIsd0RBQU9BO1FBQ1BLLE9BQU9JLElBQUksQ0FBQztJQUNoQjtJQUVGLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ2Isa0RBQUtBO2dCQUFDYyxLQUFLVixTQUFTVyxTQUFTO2dCQUFFQyxLQUFJO2dCQUFhQyxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLTCxXQUFVOzs7Ozs7MEJBQ3BGLDhEQUFDTTtnQkFBR04sV0FBVTswQkFBOEJULFNBQVNnQixRQUFROzs7Ozs7MEJBQzdELDhEQUFDRDtnQkFBR04sV0FBVTswQkFBa0JULFNBQVNpQixLQUFLOzs7Ozs7MEJBRTlDLDhEQUFDVDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNTO3dCQUFPVCxXQUFVO2tDQUF1RDs7Ozs7O2tDQUN6RSw4REFBQ1M7d0JBQU9ULFdBQVU7d0JBQXVEVSxTQUFTLElBQUliO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5IO0dBckJTUDs7UUFFVUosc0RBQVNBO1FBQ0NFLHVEQUFVQTs7O0tBSDlCRTtBQXVCVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Vc2VySW5mby50c3g/ZWQ3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gVXNlckluZm8oeyB1c2VySW5mbyB9KSB7XHJcbiAgY29uc29sZS5sb2codXNlckluZm8pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGRhdGE6c2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gICAgY29uc3Qgb25Mb2dvdXRDbGljaz0oKT0+e1xyXG4gICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3VzZXJJbmZvLnVzZXJJbWFnZX0gYWx0PVwidXNlciBpbWFnZVwiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBjbGFzc05hbWU9J3JvdW5kZWQtZnVsbCcvPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtWzMwcHhdIGZvbnQtc2VtaWJvbGQnPnsgdXNlckluZm8udXNlck5hbWUgfTwvaDI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+eyB1c2VySW5mby5lbWFpbCB9PC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTQnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctZ3JheS0yMDAgcC0yIHB4LTMgZm9udC1zZW1pYm9sZCBtdC01IHJvdW5kZWQtZnVsbCc+U2hhcmU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ncmF5LTIwMCBwLTIgcHgtMyBmb250LXNlbWlib2xkIG10LTUgcm91bmRlZC1mdWxsJyBvbkNsaWNrPXsoKT0+b25Mb2dvdXRDbGljaygpfT5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlckluZm8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwiVXNlckluZm8iLCJ1c2VySW5mbyIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsIm9uTG9nb3V0Q2xpY2siLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwidXNlckltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInVzZXJOYW1lIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/UserInfo.tsx\n"));

/***/ })

});