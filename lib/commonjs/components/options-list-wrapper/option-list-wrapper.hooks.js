"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOptionListWrapper = void 0;
var _context = require("../../context");
var _hooks = require("../../hooks");
const useOptionListWrapper = () => {
  const {
    animation,
    isOpened,
    styles,
    aboveSelectControl,
    openedPosition: {
      top,
      left,
      width
    }
  } = (0, _context.useOptionsListContext)();
  const {
    optionsList: optionsListCustomStyles
  } = styles ?? {};
  const fadeAnimation = (0, _hooks.useAnimation)({
    isOpened,
    animation
  });
  return {
    animation,
    isOpened,
    fadeAnimation,
    optionsListCustomStyles,
    aboveSelectControl,
    top,
    left,
    width
  };
};
exports.useOptionListWrapper = useOptionListWrapper;
//# sourceMappingURL=option-list-wrapper.hooks.js.map