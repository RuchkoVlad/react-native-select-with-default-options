"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectText = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _selectText = require("./select-text.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectText = ({
  selectedOptionLabel
}) => {
  var _StyleSheet$flatten;
  const {
    placeholderText,
    placeholderTextColor,
    selectTextProps,
    multiple,
    textCustomStyles
  } = (0, _selectText.useSelectText)();
  if (multiple) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
      numberOfLines: 1
    }, selectTextProps, {
      style: [styles.multiple, textCustomStyles, {
        color: placeholderTextColor
      }]
    }), placeholderText);
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
    numberOfLines: 1
  }, selectTextProps, {
    style: [styles.text, textCustomStyles, {
      color: selectedOptionLabel ? ((_StyleSheet$flatten = _reactNative.StyleSheet.flatten(textCustomStyles)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.color) ?? _constants.COLORS.BLACK : placeholderTextColor
    }]
  }), selectedOptionLabel || placeholderText);
};
exports.SelectText = SelectText;
const styles = _reactNative.StyleSheet.create({
  text: {
    fontSize: _constants.FONT_SIZE,
    textAlign: 'left'
  },
  multiple: {
    fontSize: _constants.FONT_SIZE,
    textAlign: 'left',
    alignSelf: 'center'
  }
});
//# sourceMappingURL=select-text.js.map