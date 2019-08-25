webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/date.js":
/*!***********************!*\
  !*** ./utils/date.js ***!
  \***********************/
/*! exports provided: isFuture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFuture", function() { return isFuture; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

luxon__WEBPACK_IMPORTED_MODULE_0__["Settings"].defaultZoneName = 'America/Recife'; // eslint-disable-next-line import/prefer-default-export

var isFuture = function isFuture(endAtISO) {
  var dateTime = luxon__WEBPACK_IMPORTED_MODULE_0__["DateTime"].fromISO(endAtISO).diffNow().valueOf();
  return dateTime > 0;
};

/***/ })

})
//# sourceMappingURL=index.js.e6394d09bcca8c1b69b2.hot-update.js.map