function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef, memo } from 'react';
import isEqual from 'react-fast-compare';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZE, ITEM_HEIGHT, PADDING, PRESSED_STYLE } from '../../constants';
const OptionComponent = /*#__PURE__*/forwardRef(({
  isSelected,
  option,
  optionIndex,
  overrideWithDisabledStyle,
  onPressOption,
  optionButtonProps,
  optionTextProps,
  optionCustomStyles,
  isDisabled
}, ref) => {
  var _optionCustomStyles$s2;
  const onChooseOption = () => {
    onPressOption(option, optionIndex);
  };
  const {
    label
  } = option;
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    accessibilityLabel: `Select ${label}`
  }, optionButtonProps, {
    ref: ref,
    accessibilityRole: "menuitem",
    accessibilityState: {
      disabled: isDisabled
    },
    disabled: isDisabled,
    style: ({
      pressed
    }) => {
      var _optionCustomStyles$s;
      return [styles.option, optionCustomStyles === null || optionCustomStyles === void 0 ? void 0 : optionCustomStyles.container, isSelected && [styles.selected, optionCustomStyles === null || optionCustomStyles === void 0 || (_optionCustomStyles$s = optionCustomStyles.selected) === null || _optionCustomStyles$s === void 0 ? void 0 : _optionCustomStyles$s.container], pressed && ((optionCustomStyles === null || optionCustomStyles === void 0 ? void 0 : optionCustomStyles.pressed) ?? PRESSED_STYLE), overrideWithDisabledStyle && styles.disabled];
    },
    onPress: onChooseOption
  }), /*#__PURE__*/React.createElement(Text, _extends({
    numberOfLines: 1
  }, optionTextProps, {
    style: [styles.text, optionCustomStyles === null || optionCustomStyles === void 0 ? void 0 : optionCustomStyles.text, isSelected && (optionCustomStyles === null || optionCustomStyles === void 0 || (_optionCustomStyles$s2 = optionCustomStyles.selected) === null || _optionCustomStyles$s2 === void 0 ? void 0 : _optionCustomStyles$s2.text)]
  }), label));
});
const styles = StyleSheet.create({
  option: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: PADDING
  },
  text: {
    fontSize: FONT_SIZE,
    color: COLORS.BLACK,
    textAlign: 'left'
  },
  selected: {
    backgroundColor: COLORS.SELECTED
  },
  disabled: {
    backgroundColor: COLORS.DISABLED
  }
});
OptionComponent.displayName = 'OptionComponent';
export const Option = /*#__PURE__*/memo(OptionComponent, isEqual);
//# sourceMappingURL=option.js.map