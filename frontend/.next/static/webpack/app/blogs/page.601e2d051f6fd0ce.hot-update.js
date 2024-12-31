"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/page",{

/***/ "(app-pages-browser)/./components/BlogCard.jsx":
/*!*********************************!*\
  !*** ./components/BlogCard.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _barrel_optimize_names_FaCalendar_FaFolder_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCalendar,FaFolder!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n\n\n\n\nconst BlogCard = (param)=>{\n    let { blog } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#27272c] rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-48 w-full\",\n                children: blog.image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"http://localhost:5000\".concat(blog.image),\n                    alt: blog.title,\n                    fill: true,\n                    className: \"object-cover\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 23\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full bg-gray-700\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 125\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-4 text-sm text-gray-400 mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCalendar_FaFolder_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCalendar, {\n                                        className: \"text-accent\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                                        lineNumber: 14,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: new Date(blog.createdAt).toLocaleDateString()\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCalendar_FaFolder_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFolder, {\n                                        className: \"text-accent\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: blog.category\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-3 line-clamp-2\",\n                        children: blog.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400 mb-4 line-clamp-2\",\n                        children: blog.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/blogs/\".concat(blog._id),\n                        className: \"inline-block bg-accent hover:bg-accent/80 text-black px-4 py-2 rounded-lg transition-colors\",\n                        children: \"Read More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\components\\\\BlogCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BlogCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQmxvZ0NhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUN1QjtBQUV0RCxNQUFNSSxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ3hCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pGLEtBQUtHLEtBQUssaUJBQUcsOERBQUNQLGtEQUFLQTtvQkFBQ1EsS0FBSyx3QkFBbUMsT0FBWEosS0FBS0csS0FBSztvQkFBSUUsS0FBS0wsS0FBS00sS0FBSztvQkFBRUMsSUFBSTtvQkFBQ0wsV0FBVTs7Ozs7OENBQW9CLDhEQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7MEJBRXJJLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDTCxpR0FBVUE7d0NBQUNLLFdBQVU7Ozs7OztrREFDdEIsOERBQUNNO2tEQUFNLElBQUlDLEtBQUtULEtBQUtVLFNBQVMsRUFBRUMsa0JBQWtCOzs7Ozs7Ozs7Ozs7MENBRXBELDhEQUFDVjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNKLCtGQUFRQTt3Q0FBQ0ksV0FBVTs7Ozs7O2tEQUNwQiw4REFBQ007a0RBQU1SLEtBQUtZLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJeEIsOERBQUNDO3dCQUFHWCxXQUFVO2tDQUEyQ0YsS0FBS00sS0FBSzs7Ozs7O2tDQUNuRSw4REFBQ1E7d0JBQUVaLFdBQVU7a0NBQW1DRixLQUFLZSxXQUFXOzs7Ozs7a0NBRWhFLDhEQUFDcEIsa0RBQUlBO3dCQUFDcUIsTUFBTSxVQUFtQixPQUFUaEIsS0FBS2lCLEdBQUc7d0JBQUlmLFdBQVU7a0NBQThGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEo7S0EzQk1IO0FBNkJOLGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcd29ya3NwYWNlXFx2c2NvZGVcXHBvcnRmb2xpby1tZS1jYW9hbmh2dVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXEJsb2dDYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBGYUNhbGVuZGFyLCBGYUZvbGRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3QgQmxvZ0NhcmQgPSAoeyBibG9nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzI3MjcyY10gcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gaG92ZXI6dHJhbnNmb3JtIGhvdmVyOnNjYWxlLVsxLjAyXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQ4IHctZnVsbFwiPlxyXG4gICAgICAgIHtibG9nLmltYWdlID8gPEltYWdlIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCR7YmxvZy5pbWFnZX1gfSBhbHQ9e2Jsb2cudGl0bGV9IGZpbGwgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyXCIgLz4gOiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctZ3JheS03MDBcIiAvPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LXNtIHRleHQtZ3JheS00MDAgbWItM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8RmFDYWxlbmRhciBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZShibG9nLmNyZWF0ZWRBdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgIDxGYUZvbGRlciBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPntibG9nLmNhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTMgbGluZS1jbGFtcC0yXCI+e2Jsb2cudGl0bGV9PC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG1iLTQgbGluZS1jbGFtcC0yXCI+e2Jsb2cuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPXtgL2Jsb2dzLyR7YmxvZy5faWR9YH0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWFjY2VudCBob3ZlcjpiZy1hY2NlbnQvODAgdGV4dC1ibGFjayBweC00IHB5LTIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9yc1wiPlxyXG4gICAgICAgICAgUmVhZCBNb3JlXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nQ2FyZDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIkZhQ2FsZW5kYXIiLCJGYUZvbGRlciIsIkJsb2dDYXJkIiwiYmxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlIiwic3JjIiwiYWx0IiwidGl0bGUiLCJmaWxsIiwic3BhbiIsIkRhdGUiLCJjcmVhdGVkQXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJjYXRlZ29yeSIsImgyIiwicCIsImRlc2NyaXB0aW9uIiwiaHJlZiIsIl9pZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BlogCard.jsx\n"));

/***/ })

});