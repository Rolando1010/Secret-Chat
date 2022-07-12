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

/***/ "./apps/web/src/hooks/useGlobalState.js":
/*!**********************************************!*\
  !*** ./apps/web/src/hooks/useGlobalState.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./apps/web/src/context/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth */ \"./apps/auth/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/requests */ \"./apps/web/src/utils/requests.js\");\n\n\n\n\n\nconst useGlobalState = () => {\n  const {\n    globalState,\n    setGlobalState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) || {};\n\n  const updateGlobalState = async externalSetGlobalState => {\n    const authtoken = (0,_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\n    const {\n      userdata\n    } = await _utils_requests__WEBPACK_IMPORTED_MODULE_3__.get(\"/api/user/basic-data\");\n    console.log(authtoken);\n    (setGlobalState || externalSetGlobalState)({\n      authtoken,\n      userdata\n    });\n  };\n\n  return {\n    globalState,\n    setGlobalState,\n    updateGlobalState\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGlobalState);\n\n//# sourceURL=webpack://web-api/./apps/web/src/hooks/useGlobalState.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("60fb024897d6b958e363")
/******/ })();
/******/ 
/******/ }
);