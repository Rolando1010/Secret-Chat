"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateweb_api"]("main",{

/***/ "./apps/web/src/index.jsx":
/*!********************************!*\
  !*** ./apps/web/src/index.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ \"./apps/web/src/routes.jsx\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ \"./apps/web/src/context/index.js\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useGlobalState */ \"./apps/web/src/hooks/useGlobalState.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/theme */ \"./apps/web/src/styles/theme.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu */ \"./apps/web/src/components/menu.jsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst App = () => {\n  const {\n    updateGlobalState\n  } = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const [globalState, setGlobalState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const valueGlobalState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({\n    globalState,\n    setGlobalState\n  }), [globalState]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    updateGlobalState(setGlobalState);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n      value: valueGlobalState,\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, {\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {})]\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"style\", {\n      children: _styles_theme__WEBPACK_IMPORTED_MODULE_5__.globalStyles\n    })]\n  });\n};\n\n(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root')).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(App, {}));\n\n//# sourceURL=webpack://web-api/./apps/web/src/index.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("167fe5cc4f93c7610502")
/******/ })();
/******/ 
/******/ }
);