"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logError = exports.ERRORS = void 0;
let ERRORS = exports.ERRORS = /*#__PURE__*/function (ERRORS) {
  ERRORS["NO_ARRAY_OPTIONS"] = "Options is not an array";
  ERRORS["SCREEN_READER_ERROR"] = "isScreenReaderEnabled error";
  ERRORS["SCROLL_TO_LOCATION"] = "scrollToLocation error";
  return ERRORS;
}({}); // eslint-disable-next-line no-console
const logError = error => console.error(error);
exports.logError = logError;
//# sourceMappingURL=log-error.js.map