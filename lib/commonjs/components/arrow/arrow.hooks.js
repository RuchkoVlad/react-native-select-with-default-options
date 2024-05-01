"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArrow = void 0;
var _context = require("../../context");
var _hooks = require("../../hooks");
const useArrow = () => {
  const {
    isOpened,
    styles: mainStyles,
    animation,
    arrowImageProps,
    arrowContainerProps
  } = (0, _context.useSelectContext)();
  const {
    arrow: arrowStyles
  } = (mainStyles === null || mainStyles === void 0 ? void 0 : mainStyles.select) ?? {};
  const {
    icon: iconCustomStyles,
    container: containerCustomStyles
  } = arrowStyles ?? {};
  const rotateAnimation = (0, _hooks.useAnimation)({
    isOpened,
    animation
  });
  return {
    arrowImageProps,
    arrowContainerProps,
    rotateAnimation,
    iconCustomStyles,
    containerCustomStyles,
    isOpened
  };
};
exports.useArrow = useArrow;
//# sourceMappingURL=arrow.hooks.js.map