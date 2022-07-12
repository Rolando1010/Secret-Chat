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

/***/ "./apps/web/src/styles/theme.js":
/*!**************************************!*\
  !*** ./apps/web/src/styles/theme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalStyles\": () => (/* binding */ globalStyles),\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst theme = {\n  \"background-1\": \"#12111c\",\n  \"background-2\": \"#1d1c2b\",\n  \"background-3\": \"#151420\",\n  \"border\": \"#332e40\",\n  \"font-1\": \"#fff\",\n  \"font-2\": \"#5d3ba4\",\n  \"primary-1\": \"#1d384a\",\n  \"primary-2\": \"#2d9fc0\",\n  \"danger-1\": \"#412835\",\n  \"danger-2\": \"#b0555a\",\n  \"link-1\": \"#14a4ad\",\n  \"link-2\": \"#0e6f74\",\n  \"light-1\": \"#586575\",\n  \"light-2\": \"#c9d6e6\",\n  \"success-1\": \"#1e363c\",\n  \"success-2\": \"#21806e\"\n};\nconst globalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.css`\n    :root {\n        ${Object.entries(theme).map(([key, value]) => `--${key}: ${value}`).join(\";\")}\n    }\n    body {\n        background: linear-gradient(to right, ${theme[\"background-1\"]}, ${theme[\"background-2\"]}, ${theme[\"background-3\"]});\n        margin: 0;\n        color: ${theme[\"font-1\"]};\n        font-family: Noto Sans;\n    }\n`;\n\n\n//# sourceURL=webpack://web-api/./apps/web/src/styles/theme.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ec6f0bfff54bf39ef2b0")
/******/ })();
/******/ 
/******/ }
);