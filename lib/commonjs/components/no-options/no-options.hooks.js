"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNoOptions = void 0;
var _context = require("../../context");
const useNoOptions = () => {
  const {
    noOptionsText,
    noOptionsProps,
    noOptionsTextProps,
    styles: mainStyles
  } = (0, _context.useOptionsListContext)();
  const {
    noOptions
  } = mainStyles ?? {};
  const {
    text: textCustomStyles,
    container: containerCustomStyles
  } = noOptions ?? {};
  return {
    noOptionsText,
    noOptionsProps,
    noOptionsTextProps,
    textCustomStyles,
    containerCustomStyles
  };
};
exports.useNoOptions = useNoOptions;
//# sourceMappingURL=no-options.hooks.js.map