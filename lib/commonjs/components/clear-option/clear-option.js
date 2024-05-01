"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearOption = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _clearOption = require("./clear-option.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const iconSource = require('./../../assets/icons/x.png');
const ClearOption = () => {
  const {
    disabled,
    clearOptionButtonProps,
    clearOptionImageProps,
    iconCustomStyles,
    containerCustomStyles,
    onPressClearOption
  } = (0, _clearOption.useClearOption)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
    accessibilityLabel: "Clear a selected option",
    accessibilityRole: "button",
    accessible: true,
    accessibilityState: {
      disabled
    },
    hitSlop: {
      right: 3,
      left: 3
    },
    disabled: disabled
  }, clearOptionButtonProps, {
    style: [styles.xIconWrapper, containerCustomStyles],
    onPress: onPressClearOption
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({
    source: iconSource
  }, clearOptionImageProps, {
    style: [styles.xIcon, iconCustomStyles]
  })));
};
exports.ClearOption = ClearOption;
const styles = _reactNative.StyleSheet.create({
  xIconWrapper: {
    height: '100%',
    justifyContent: 'center'
  },
  xIcon: {
    width: 20,
    height: 20,
    zIndex: 1
  }
});
//# sourceMappingURL=clear-option.js.map