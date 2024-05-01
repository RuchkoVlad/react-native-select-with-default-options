"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _selectInput = require("./select-input.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectInput = () => {
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
  } = (0, _selectInput.useSelectInput)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    accessibilityLabel: "Place text"
  }, selectInputProps, {
    ref: searchInputRef,
    editable: !disabled,
    placeholder: resolvedPlaceholder,
    placeholderTextColor: placeholderTextColor,
    style: disabled ? [styles.disabled, styles.text, multiple && styles.marginMultiple] : [styles.text, textCustomStyles],
    textAlign: _reactNative.I18nManager.getConstants().isRTL ? 'right' : 'left',
    value: searchValue ?? '',
    onChangeText: onChangeText,
    onPressIn: disabled ? undefined : onPressSelectControl
  }));
};
exports.SelectInput = SelectInput;
const styles = _reactNative.StyleSheet.create({
  text: {
    fontSize: _constants.FONT_SIZE
  },
  disabled: {
    backgroundColor: _constants.COLORS.DISABLED
  },
  marginMultiple: {
    marginRight: 6
  }
});
//# sourceMappingURL=select-input.js.map