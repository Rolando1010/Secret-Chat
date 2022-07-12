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

/***/ "./apps/web/src/components/menu.jsx":
/*!******************************************!*\
  !*** ./apps/web/src/components/menu.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useGlobalState */ \"./apps/web/src/hooks/useGlobalState.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\nconst Menu = () => {\n  const {\n    globalState\n  } = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"section\", {\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"img\", {\n          src: \"https://cdn-icons-png.flaticon.com/512/7118/7118737.png\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h2\", {\n          children: \"Secret Chat\"\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"section\", {\n        children: globalState !== undefined && (globalState.authtoken ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n          href: \"\",\n          children: \"Cerrar Sesi\\xF3n\"\n        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n            href: \"\",\n            children: \"Iniciar Sesi\\xF3n\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n            href: \"\",\n            children: \"Registrarse\"\n          })]\n        }))\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"style\", {\n      jsx: true,\n      children: `\n            header {\n                border-bottom: var(--border) 1px solid;\n                padding: 15px;\n                display: flex;\n                justify-content: space-between;\n            }\n            img {\n                width: 40px;\n                margin-right: 5px;\n            }\n            h2 {\n                margin: 0;\n                display: inline-block;\n            }\n            section {\n                display: flex;\n                align-items: center;\n            }\n            a {\n                color: var(--font-2);\n                text-decoration: none;\n                font-weight: bold;\n            }\n            a:visited{\n                color: var(--font);\n            }\n        `\n    })]\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://web-api/./apps/web/src/components/menu.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("933b5dd8d201282f84fe")
/******/ })();
/******/ 
/******/ }
);