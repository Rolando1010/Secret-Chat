/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateweb_api"]("main",{

/***/ "./apps/auth/index.js":
/*!****************************!*\
  !*** ./apps/auth/index.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  getCookie,\n  setCookie,\n  deleteCookie\n} = __webpack_require__(/*! cookies-next */ \"../../../../../../node_modules/cookies-next/lib/index.js\");\n\nconst NAME_COOKIE_AUTH_TOKEN = \"authtoken\";\n\nconst getAuth = req => getCookie(NAME_COOKIE_AUTH_TOKEN, {\n  req\n});\n\nconst setAuth = (token, req, res) => setCookie(NAME_COOKIE_AUTH_TOKEN, token, {\n  req,\n  res\n});\n\nconst deleteAuth = (req, res) => deleteCookie(NAME_COOKIE_AUTH_TOKEN, {\n  req,\n  res\n});\n\nmodule.exports = {\n  getAuth,\n  setAuth,\n  deleteAuth\n};\n\n//# sourceURL=webpack://web-api/./apps/auth/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5d273c61884c8852933f")
/******/ })();
/******/ 
/******/ }
);