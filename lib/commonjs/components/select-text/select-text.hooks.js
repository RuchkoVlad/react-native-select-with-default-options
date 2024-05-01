"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectText = void 0;
var _context = require("../../context");
const useSelectText = () => {
  const {
    placeholderText,
    placeholderTextColor,
    selectTextProps,
    multiple,
    styles: mainStyles
  } = (0, _context.useSelectContext)();
  const {
    select
  } = mainStyles ?? {};
  const {
    text: textCustomStyles
  } = select ?? {};
  return {
    placeholderText,
    placeholderTextColor,
    selectTextProps,
    multiple,
    textCustomStyles
  };
};
exports.useSelectText = useSelectText;
//# sourceMappingURL=select-text.hooks.js.map