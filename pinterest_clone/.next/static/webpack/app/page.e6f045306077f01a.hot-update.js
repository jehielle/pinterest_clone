"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebaseConfig */ \"(app-pages-browser)/./app/firebaseConfig.js\");\n/* harmony import */ var _components_PinList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PinList */ \"(app-pages-browser)/./app/components/PinList.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const [listOfPins, setListOfPins] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getAllPins();\n    }, []);\n    const getAllPins = async ()=>{\n        setListOfPins([]);\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"pinterest-post\"));\n        const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);\n        querySnapshot.forEach((doc)=>{\n            setListOfPins((listOfPins)=>[\n                    ...listOfPins,\n                    doc.data()\n                ]);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PinList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            listOfPins: listOfPins\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\page.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jehie\\\\NextProjects\\\\pinterest_clone\\\\app\\\\page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"pr/MQ+fYen2KF6Grg1YzmkHccl0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHOEU7QUFDbEM7QUFDVDtBQUNRO0FBRTVCLFNBQVNROztJQUN0QixNQUFNQyxLQUFLVCxnRUFBWUEsQ0FBQ00sdURBQUdBO0lBQzNCLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSUTtJQUNGLEdBQUUsRUFBRTtJQUVKLE1BQU1BLGFBQVc7UUFDZkQsY0FBYyxFQUFFO1FBQ2hCLE1BQU1FLElBQUVYLHlEQUFLQSxDQUFDRCw4REFBVUEsQ0FBQ1EsSUFBRztRQUU1QixNQUFNSyxnQkFBZ0IsTUFBTVgsMkRBQU9BLENBQUNVO1FBQ3BDQyxjQUFjQyxPQUFPLENBQUMsQ0FBQ0M7WUFBVUwsY0FBYyxDQUFDRCxhQUFhO3VCQUFJQTtvQkFBWU0sSUFBSUMsSUFBSTtpQkFBRztRQUFHO0lBQzdGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNaLDJEQUFPQTtZQUFDRyxZQUFlQTs7Ozs7Ozs7Ozs7QUFHOUI7R0FyQndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlU2Vzc2lvbiwgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIHF1ZXJ5LCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwcCBmcm9tIFwiLi9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IFBpbkxpc3QgZnJvbSBcIi4vY29tcG9uZW50cy9QaW5MaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG4gIGNvbnN0IFtsaXN0T2ZQaW5zLCBzZXRMaXN0T2ZQaW5zXSA9IHVzZVN0YXRlKFtdKTtcbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGdldEFsbFBpbnMoKTtcbiAgfSxbXSlcblxuICBjb25zdCBnZXRBbGxQaW5zPWFzeW5jKCk9PntcbiAgICBzZXRMaXN0T2ZQaW5zKFtdKVxuICAgIGNvbnN0IHE9cXVlcnkoY29sbGVjdGlvbihkYiwncGludGVyZXN0LXBvc3QnKSlcblxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7IHNldExpc3RPZlBpbnMoKGxpc3RPZlBpbnMpPT5bLi4ubGlzdE9mUGlucywgZG9jLmRhdGEoKV0pOyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3AtMyc+XG4gICAgICA8UGluTGlzdCBsaXN0T2ZQaW5zID0geyBsaXN0T2ZQaW5zIH0vPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiZ2V0RmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsInF1ZXJ5IiwiZ2V0RG9jcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBwIiwiUGluTGlzdCIsIkhvbWUiLCJkYiIsImxpc3RPZlBpbnMiLCJzZXRMaXN0T2ZQaW5zIiwiZ2V0QWxsUGlucyIsInEiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});