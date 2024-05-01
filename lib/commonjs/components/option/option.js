"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const OptionComponent = /*#__PURE__*/(0, _react.forwardRef)(({
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
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
      return [styles.option, optionCustomStyles === null || optionCustomStyles === void 0 ? void 0 : optionCustomStyles.container, isSelected && [styles.selected, optionCustomStyles === null || optionCustomStyles === void 0 || (_optionCustomStyles$s = optionCustomStyles.selected) === null || _optionCustomStyles$s === void 0 ? void 0 : _optionCustomStyles$s.container], pressed && ((optionCustomStyles === null || optionCustomStyles === void 0 ? void 0 : optionCustomStyles.pressed) ?? _constants.PRESSED_STYLE), overrideWithDisabledStyle && styles.disabled];
    },
    onPress: onChooseOption
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({
    numberOfLines: 1
  }, optionTextProps, {
    style: [styles.text, optionCustomStyles === null || optionCustomStyles === void 0 ? void 0 : optionCustomStyles.text, isSelected && (optionCustomStyles === null || optionCustomStyles === void 0 || (_optionCustomStyles$s2 = optionCustomStyles.selected) === null || _optionCustomStyles$s2 === void 0 ? void 0 : _optionCustomStyles$s2.text)]
  }), label));
});
const styles = _reactNative.StyleSheet.create({
  option: {
    height: _constants.ITEM_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: _constants.PADDING
  },
  text: {
    fontSize: _constants.FONT_SIZE,
    color: _constants.COLORS.BLACK,
    textAlign: 'left'
  },
  selected: {
    backgroundColor: _constants.COLORS.SELECTED
  },
  disabled: {
    backgroundColor: _constants.COLORS.DISABLED
  }
});
OptionComponent.displayName = 'OptionComponent';
const Option = exports.Option = /*#__PURE__*/(0, _react.memo)(OptionComponent, _reactFastCompare.default);
//# sourceMappingURL=option.js.map