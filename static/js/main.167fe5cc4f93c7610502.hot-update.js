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

/***/ "./apps/web/src/hooks/useAuth.js":
/*!***************************************!*\
  !*** ./apps/web/src/hooks/useAuth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/requests */ \"./apps/web/src/utils/requests.js\");\n/* harmony import */ var _useGlobalState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useGlobalState */ \"./apps/web/src/hooks/useGlobalState.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth */ \"./apps/auth/index.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst useAuth = () => {\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  const {\n    updateGlobalState\n  } = (0,_useGlobalState__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const register = credentials => new Promise(resolve => {\n    _utils_requests__WEBPACK_IMPORTED_MODULE_0__.post(\"/api/register\", credentials).then(({\n      success,\n      message\n    }) => {\n      if (success) {\n        updateGlobalState();\n        navigate(\"/\");\n      }\n\n      resolve({\n        success,\n        message\n      });\n    });\n  });\n\n  const login = credentials => new Promise(resolve => {\n    _utils_requests__WEBPACK_IMPORTED_MODULE_0__.post(\"/api/login\", credentials).then(({\n      success,\n      message\n    }) => {\n      if (success) {\n        updateGlobalState();\n        navigate(\"/\");\n      }\n\n      resolve({\n        success,\n        message\n      });\n    });\n  });\n\n  const logout = () => {\n    (0,_auth__WEBPACK_IMPORTED_MODULE_2__.deleteAuth)();\n    navigate(\"/inicio-sesion\");\n  };\n\n  return {\n    register,\n    login,\n    logout\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);\n\n//# sourceURL=webpack://web-api/./apps/web/src/hooks/useAuth.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b98fb7b714fdbee740b5")
/******/ })();
/******/ 
/******/ }
);