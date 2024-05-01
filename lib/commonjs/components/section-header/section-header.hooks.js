"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSectionHeader = void 0;
var _context = require("../../context");
const useSectionHeader = () => {
  const {
    styles,
    onPressSection,
    sectionHeaderButtonProps,
    sectionHeaderTextProps,
    sectionHeaderImageProps,
    multiple,
    disabled
  } = (0, _context.useOptionsListContext)();
  const {
    sectionHeader: sectionHeaderCustomStyles
  } = styles ?? {};
  const isDisabled = disabled ?? !multiple;
  return {
    onPressSection,
    sectionHeaderButtonProps,
    sectionHeaderTextProps,
    sectionHeaderImageProps,
    multiple,
    disabled,
    sectionHeaderCustomStyles,
    isDisabled
  };
};
exports.useSectionHeader = useSectionHeader;
//# sourceMappingURL=section-header.hooks.js.map