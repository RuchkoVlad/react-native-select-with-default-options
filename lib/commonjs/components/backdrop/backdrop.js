"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Backdrop = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Backdrop = ({
  onOutsidePress,
  backdropCustomStyles,
  backdropProps,
  backdropChildProps
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, _extends({
    accessibilityLabel: "Close a dropdown from outside",
    accessibilityRole: "button"
  }, backdropProps, {
    onPress: onOutsidePress
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, backdropChildProps, {
    style: [styles.modalOverlay, backdropCustomStyles]
  })));
};
exports.Backdrop = Backdrop;
const styles = _reactNative.StyleSheet.create({
  modalOverlay: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    zIndex: 1
  }
});
//# sourceMappingURL=backdrop.js.map