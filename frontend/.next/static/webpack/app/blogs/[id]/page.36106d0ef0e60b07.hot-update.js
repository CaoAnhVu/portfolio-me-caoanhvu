"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/[id]/page",{

/***/ "(app-pages-browser)/./app/blogs/[id]/page.jsx":
/*!*********************************!*\
  !*** ./app/blogs/[id]/page.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogDetail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaArrowLeft_FaCalendar_FaFolder_FaTags_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=FaArrowLeft,FaCalendar,FaFolder,FaTags!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Thêm icons\nfunction BlogDetail() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const router = useRouter();\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"BlogDetail.useEffect\": ()=>{\n            setLoading(true);\n            const fetchBlog = {\n                \"BlogDetail.useEffect.fetchBlog\": async ()=>{\n                    try {\n                        const res = await fetch(\"/api/blogs/\".concat(id));\n                        if (!res.ok) throw new Error(\"Failed to fetch blog\");\n                        const data = await res.json();\n                        setBlog(data.blog);\n                    } catch (err) {\n                        setError(err.message);\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"BlogDetail.useEffect.fetchBlog\"];\n            if (id) {\n                fetchBlog();\n            }\n        }\n    }[\"BlogDetail.useEffect\"], [\n        id\n    ]);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent\"\n            }, void 0, false, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-2\",\n                        children: \"Error\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this);\n    }\n    if (!blog) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-bold mb-2\",\n                        children: \"Blog not found\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-400\",\n                        children: \"The blog post you're looking for doesn't exist.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0,\n            y: 20\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        exit: {\n            opacity: 0,\n            y: 20\n        },\n        className: \"min-h-screen bg-[#1A1A1F]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-[60vh] w-full\",\n                children: [\n                    blog.image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"http://localhost:5000\".concat(blog.image),\n                        alt: blog.title,\n                        fill: true,\n                        className: \"object-cover\",\n                        priority: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 24\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 bg-gradient-to-t from-[#1A1A1F] to-transparent\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-0 left-0 right-0 p-8 md:p-16\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container mx-auto max-w-4xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white\",\n                                    children: blog.title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-wrap items-center gap-4 text-gray-300 text-sm md:text-base\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_FaCalendar_FaFolder_FaTags_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaCalendar, {\n                                                    className: \"text-accent\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: new Date(blog.createdAt).toLocaleDateString(\"en-US\", {\n                                                        year: \"numeric\",\n                                                        month: \"long\",\n                                                        day: \"numeric\"\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this),\n                                        blog.category && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-2\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_FaCalendar_FaFolder_FaTags_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaFolder, {\n                                                    className: \"text-accent\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: blog.category\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto max-w-4xl px-4 py-12\",\n                children: [\n                    blog.tags && blog.tags.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-3 mb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaArrowLeft_FaCalendar_FaFolder_FaTags_react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTags, {\n                                className: \"text-accent\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap gap-2\",\n                                children: blog.tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"bg-accent/10 text-accent px-4 py-1 rounded-full text-sm hover:bg-accent/20 transition-colors\",\n                                        children: tag\n                                    }, index, false, {\n                                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl text-gray-300 mb-8 leading-relaxed\",\n                        children: blog.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prose prose-invert prose-lg max-w-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            dangerouslySetInnerHTML: {\n                                __html: blog.content\n                            },\n                            className: \"[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4   [&>p]:text-gray-300 [&>p]:leading-relaxed [&>p]:mb-6   [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6   [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\workspace\\\\vscode\\\\portfolio-me-caoanhvu\\\\frontend\\\\app\\\\blogs\\\\[id]\\\\page.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogDetail, \"bpU29x45hmVIyvAFv41UcJW9NfA=\", true, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = BlogDetail;\nvar _c;\n$RefreshReg$(_c, \"BlogDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDQTtBQUNiO0FBQ3lCO0FBQ21CLENBQUMsYUFBYTtBQUUxRSxTQUFTVTs7SUFDdEIsTUFBTSxFQUFFQyxFQUFFLEVBQUUsR0FBR1QsMERBQVNBO0lBQ3hCLE1BQU1VLFNBQVNDO0lBQ2YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDaUIsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQTtnQ0FBQztZQUNSaUIsV0FBVztZQUNYLE1BQU1HO2tEQUFZO29CQUNoQixJQUFJO3dCQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxjQUFpQixPQUFIWDt3QkFDdEMsSUFBSSxDQUFDVSxJQUFJRSxFQUFFLEVBQUUsTUFBTSxJQUFJQyxNQUFNO3dCQUM3QixNQUFNQyxPQUFPLE1BQU1KLElBQUlLLElBQUk7d0JBQzNCWCxRQUFRVSxLQUFLWCxJQUFJO29CQUNuQixFQUFFLE9BQU9hLEtBQUs7d0JBQ1pSLFNBQVNRLElBQUlDLE9BQU87b0JBQ3RCLFNBQVU7d0JBQ1JYLFdBQVc7b0JBQ2I7Z0JBQ0Y7O1lBRUEsSUFBSU4sSUFBSTtnQkFDTlM7WUFDRjtRQUNGOytCQUFHO1FBQUNUO0tBQUc7SUFFUCxJQUFJSyxTQUFTO1FBQ1gscUJBQ0UsOERBQUNhO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7Ozs7OztJQUdyQjtJQUVBLElBQUlaLE9BQU87UUFDVCxxQkFDRSw4REFBQ1c7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDeEMsOERBQUNFO2tDQUFHZDs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJWjtJQUVBLElBQUksQ0FBQ0osTUFBTTtRQUNULHFCQUNFLDhEQUFDZTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEwQjs7Ozs7O2tDQUN4Qyw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztJQUlyQztJQUVBLHFCQUNFLDhEQUFDMUIsaURBQU1BLENBQUN5QixHQUFHO1FBQUNJLFNBQVM7WUFBRUMsU0FBUztZQUFHQyxHQUFHO1FBQUc7UUFBR0MsU0FBUztZQUFFRixTQUFTO1lBQUdDLEdBQUc7UUFBRTtRQUFHRSxNQUFNO1lBQUVILFNBQVM7WUFBR0MsR0FBRztRQUFHO1FBQUdMLFdBQVU7OzBCQUVoSCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaaEIsS0FBS3dCLEtBQUssa0JBQUksOERBQUNuQyxrREFBS0E7d0JBQUNvQyxLQUFLLHdCQUFtQyxPQUFYekIsS0FBS3dCLEtBQUs7d0JBQUlFLEtBQUsxQixLQUFLMkIsS0FBSzt3QkFBRUMsSUFBSTt3QkFBQ1osV0FBVTt3QkFBZWEsUUFBUTs7Ozs7O2tDQUN4SCw4REFBQ2Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FHZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQThEaEIsS0FBSzJCLEtBQUs7Ozs7Ozs4Q0FHdEYsOERBQUNaO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDeEIsb0hBQVVBO29EQUFDd0IsV0FBVTs7Ozs7OzhEQUN0Qiw4REFBQ2U7OERBQ0UsSUFBSUMsS0FBS2hDLEtBQUtpQyxTQUFTLEVBQUVDLGtCQUFrQixDQUFDLFNBQVM7d0RBQ3BEQyxNQUFNO3dEQUNOQyxPQUFPO3dEQUNQQyxLQUFLO29EQUNQOzs7Ozs7Ozs7Ozs7d0NBSUhyQyxLQUFLc0MsUUFBUSxrQkFDWiw4REFBQ3ZCOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ3ZCLGtIQUFRQTtvREFBQ3VCLFdBQVU7Ozs7Ozs4REFDcEIsOERBQUNlOzhEQUFNL0IsS0FBS3NDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVNoQyw4REFBQ3ZCO2dCQUFJQyxXQUFVOztvQkFFWmhCLEtBQUt1QyxJQUFJLElBQUl2QyxLQUFLdUMsSUFBSSxDQUFDQyxNQUFNLEdBQUcsbUJBQy9CLDhEQUFDekI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDdEIsZ0hBQU1BO2dDQUFDc0IsV0FBVTs7Ozs7OzBDQUNsQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1poQixLQUFLdUMsSUFBSSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ25CLDhEQUFDWjt3Q0FBaUJmLFdBQVU7a0RBQ3pCMEI7dUNBRFFDOzs7Ozs7Ozs7Ozs7Ozs7O2tDQVNuQiw4REFBQ3pCO3dCQUFFRixXQUFVO2tDQUE4Q2hCLEtBQUs0QyxXQUFXOzs7Ozs7a0NBRzNFLDhEQUFDN0I7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUNDOEIseUJBQXlCO2dDQUFFQyxRQUFROUMsS0FBSytDLE9BQU87NEJBQUM7NEJBQ2hEL0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEI7R0E3SHdCcEI7O1FBQ1BSLHNEQUFTQTs7O0tBREZRIiwic291cmNlcyI6WyJEOlxcd29ya3NwYWNlXFx2c2NvZGVcXHBvcnRmb2xpby1tZS1jYW9hbmh2dVxcZnJvbnRlbmRcXGFwcFxcYmxvZ3NcXFtpZF1cXHBhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IEZhQ2FsZW5kYXIsIEZhRm9sZGVyLCBGYVRhZ3MsIEZhQXJyb3dMZWZ0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7IC8vIFRow6ptIGljb25zXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nRGV0YWlsKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtibG9nLCBzZXRCbG9nXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgZmV0Y2hCbG9nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2Jsb2dzLyR7aWR9YCk7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBibG9nXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldEJsb2coZGF0YS5ibG9nKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICBmZXRjaEJsb2coKTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gcm91bmRlZC1mdWxsIGgtMTIgdy0xMiBib3JkZXItdC0yIGJvcmRlci1iLTIgYm9yZGVyLWFjY2VudFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMlwiPkVycm9yPC9oMj5cclxuICAgICAgICAgIDxwPntlcnJvcn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmICghYmxvZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTJcIj5CbG9nIG5vdCBmb3VuZDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwXCI+VGhlIGJsb2cgcG9zdCB5b3UncmUgbG9va2luZyBmb3IgZG9lc24ndCBleGlzdC48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fSBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1bIzFBMUExRl1cIj5cclxuICAgICAgey8qIEhlcm8gU2VjdGlvbiB3aXRoIEltYWdlICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzYwdmhdIHctZnVsbFwiPlxyXG4gICAgICAgIHtibG9nLmltYWdlICYmIDxJbWFnZSBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjUwMDAke2Jsb2cuaW1hZ2V9YH0gYWx0PXtibG9nLnRpdGxlfSBmaWxsIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiIHByaW9yaXR5IC8+fVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tWyMxQTFBMUZdIHRvLXRyYW5zcGFyZW50XCIgLz5cclxuXHJcbiAgICAgICAgey8qIFRpdGxlIE92ZXJsYXkgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBwLTggbWQ6cC0xNlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy00eGxcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNXhsIGxnOnRleHQtNnhsIGZvbnQtYm9sZCBtYi00IHRleHQtd2hpdGVcIj57YmxvZy50aXRsZX08L2gxPlxyXG5cclxuICAgICAgICAgICAgey8qIE1ldGEgSW5mb3JtYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC00IHRleHQtZ3JheS0zMDAgdGV4dC1zbSBtZDp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8RmFDYWxlbmRhciBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAge25ldyBEYXRlKGJsb2cuY3JlYXRlZEF0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7YmxvZy5jYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGYUZvbGRlciBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntibG9nLmNhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYXgtdy00eGwgcHgtNCBweS0xMlwiPlxyXG4gICAgICAgIHsvKiBUYWdzICovfVxyXG4gICAgICAgIHtibG9nLnRhZ3MgJiYgYmxvZy50YWdzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi04XCI+XHJcbiAgICAgICAgICAgIDxGYVRhZ3MgY2xhc3NOYW1lPVwidGV4dC1hY2NlbnRcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAge2Jsb2cudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWFjY2VudC8xMCB0ZXh0LWFjY2VudCBweC00IHB5LTEgcm91bmRlZC1mdWxsIHRleHQtc20gaG92ZXI6YmctYWNjZW50LzIwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgey8qIERlc2NyaXB0aW9uICovfVxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTMwMCBtYi04IGxlYWRpbmctcmVsYXhlZFwiPntibG9nLmRlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgey8qIE1haW4gQ29udGVudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3NlIHByb3NlLWludmVydCBwcm9zZS1sZyBtYXgtdy1ub25lXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmxvZy5jb250ZW50IH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIlsmPmgyXTp0ZXh0LTJ4bCBbJj5oMl06Zm9udC1ib2xkIFsmPmgyXTptdC04IFsmPmgyXTptYi00XHJcbiAgICAgICAgICAgICAgICAgICAgICAgWyY+cF06dGV4dC1ncmF5LTMwMCBbJj5wXTpsZWFkaW5nLXJlbGF4ZWQgWyY+cF06bWItNlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFsmPnVsXTpsaXN0LWRpc2MgWyY+dWxdOnBsLTYgWyY+dWxdOm1iLTZcclxuICAgICAgICAgICAgICAgICAgICAgICBbJj5vbF06bGlzdC1kZWNpbWFsIFsmPm9sXTpwbC02IFsmPm9sXTptYi02XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiSW1hZ2UiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJGYUNhbGVuZGFyIiwiRmFGb2xkZXIiLCJGYVRhZ3MiLCJGYUFycm93TGVmdCIsIkJsb2dEZXRhaWwiLCJpZCIsInJvdXRlciIsInVzZVJvdXRlciIsImJsb2ciLCJzZXRCbG9nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hCbG9nIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJlcnIiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsImV4aXQiLCJpbWFnZSIsInNyYyIsImFsdCIsInRpdGxlIiwiZmlsbCIsInByaW9yaXR5IiwiaDEiLCJzcGFuIiwiRGF0ZSIsImNyZWF0ZWRBdCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImNhdGVnb3J5IiwidGFncyIsImxlbmd0aCIsIm1hcCIsInRhZyIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[id]/page.jsx\n"));

/***/ })

});