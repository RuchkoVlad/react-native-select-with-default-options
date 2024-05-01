function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { I18nManager, StyleSheet, TextInput } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants';
import { useSelectInput } from './select-input.hooks';
export const SelectInput = () => {
  const {
    disabled,
    multiple,
    placeholderTextColor,
    searchValue,
    onPressSelectControl,
    selectInputProps,
    textCustomStyles,
    searchInputRef,
    resolvedPlaceholder,
    onChangeText
  } = useSelectInput();
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    accessibilityLabel: "Place text"
  }, selectInputProps, {
    ref: searchInputRef,
    editable: !disabled,
    placeholder: resolvedPlaceholder,
    placeholderTextColor: placeholderTextColor,
    style: disabled ? [styles.disabled, styles.text, multiple && styles.marginMultiple] : [styles.text, textCustomStyles],
    textAlign: I18nManager.getConstants().isRTL ? 'right' : 'left',
    value: searchValue ?? '',
    onChangeText: onChangeText,
    onPressIn: disabled ? undefined : onPressSelectControl
  }));
};
const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE
  },
  disabled: {
    backgroundColor: COLORS.DISABLED
  },
  marginMultiple: {
    marginRight: 6
  }
});
//# sourceMappingURL=select-input.js.map