"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectFieldType = void 0;
var _context = require("../../context");
var _helpers = require("../../helpers");
const useSelectFieldType = () => {
  const {
    multiple,
    searchValue,
    selectedOption
  } = (0, _context.useSelectContext)();
  const {
    selectedOptionLabel,
    selectedOptions
  } = (0, _helpers.selectedOptionResolver)(selectedOption);
  const isSearchable = typeof searchValue === 'string';
  return {
    multiple,
    searchValue,
    selectedOptionLabel,
    selectedOptions,
    isSearchable
  };
};
exports.useSelectFieldType = useSelectFieldType;
//# sourceMappingURL=select-field-type.hooks.js.map