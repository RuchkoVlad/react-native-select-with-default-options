"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.NoOptions = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _noOptions = require("./no-options.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const NoOptions = () => {
  const {
    noOptionsText,
    noOptionsProps,
    noOptionsTextProps,
    textCustomStyles,
    containerCustomStyles
  } = (0, _noOptions.useNoOptions)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, noOptionsProps, {
    style: [styles.option, containerCustomStyles]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({}, noOptionsTextProps, {
    style: [styles.text, textCustomStyles]
  }), noOptionsText));
};
exports.NoOptions = NoOptions;
const styles = exports.styles = _reactNative.StyleSheet.create({
  option: {
    padding: _constants.PADDING
  },
  text: {
    fontSize: _constants.FONT_SIZE,
    color: _constants.COLORS.BLACK,
    textAlign: 'left'
  }
});
//# sourceMappingURL=no-options.js.map