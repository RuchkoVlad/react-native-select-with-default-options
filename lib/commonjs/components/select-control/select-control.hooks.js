"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectControl = void 0;
var _react = require("react");
var _context = require("../../context");
var _helpers = require("../../helpers");
var _hooks = require("../../hooks");
const useSelectControl = () => {
  const {
    isOpened,
    clearable,
    disabled,
    multiple,
    selectedOption,
    selectContainerProps,
    hideArrow,
    selectLeftIconsProps,
    selectLeftIconImageProps,
    selectRightIconsProps,
    styles,
    aboveSelectControl,
    onPressSelectControl
  } = (0, _context.useSelectContext)();
  const {
    selectedOptionLabel
  } = (0, _helpers.selectedOptionResolver)(selectedOption);
  const isScreenReaderEnabled = (0, _hooks.useAccessibilityScreenReader)();
  const accessibilityHint = (0, _react.useMemo)(() => {
    if (!selectedOptionLabel) {
      return;
    }
    if (!multiple) {
      return `Current selected item is ${selectedOptionLabel}`;
    }
    return 'You have selected multiple items';
  }, [selectedOptionLabel, multiple]);
  const accessibilityLabel = (0, _react.useMemo)(() => isOpened ? '' : (selectContainerProps === null || selectContainerProps === void 0 ? void 0 : selectContainerProps.accessibilityLabel) ?? 'Open a dropdown', [isOpened, selectContainerProps === null || selectContainerProps === void 0 ? void 0 : selectContainerProps.accessibilityLabel]);
  const clearOptionStatus = (0, _react.useMemo)(() => {
    const result = {
      showClearOption: false,
      showClearOptionA11y: false
    };
    if (!multiple && clearable && selectedOption) {
      if (!isScreenReaderEnabled) {
        result.showClearOption = true;
      } else if (!_helpers.isAndroid) {
        result.showClearOptionA11y = true;
      }
    }
    return result;
  }, [clearable, isScreenReaderEnabled, multiple, selectedOption]);
  const {
    showClearOption,
    showClearOptionA11y
  } = clearOptionStatus;
  const {
    select: selectStyles
  } = styles ?? {};
  const {
    buttons: buttonsStyles,
    leftIcon: leftIconStyles,
    container: containerStyles,
    disabled: disabledStyles
  } = selectStyles ?? {};
  return {
    accessibilityHint,
    accessibilityLabel,
    hideArrow,
    selectLeftIconsProps,
    selectLeftIconImageProps,
    selectRightIconsProps,
    aboveSelectControl,
    onPressSelectControl,
    selectContainerProps,
    isOpened,
    disabled,
    showClearOption,
    showClearOptionA11y,
    buttonsStyles,
    leftIconStyles,
    containerStyles,
    disabledStyles,
    multiple
  };
};
exports.useSelectControl = useSelectControl;
//# sourceMappingURL=select-control.hooks.js.map