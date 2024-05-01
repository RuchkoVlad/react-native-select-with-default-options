"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidDefaultOption = void 0;
const isValidDefaultOption = defaultOption => {
  if (!defaultOption) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(defaultOption, 'value') && Object.prototype.hasOwnProperty.call(defaultOption, 'label');
};
exports.isValidDefaultOption = isValidDefaultOption;
//# sourceMappingURL=is-valid-default-option.js.map