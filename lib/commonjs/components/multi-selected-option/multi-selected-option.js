"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectedOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const MultiSelectedOption = exports.MultiSelectedOption = /*#__PURE__*/(0, _react.memo)(({
  option,
  multiSelectedCustomStyles,
  optionWidth,
  onPressRemove,
  disabled
}) => {
  var _StyleSheet$flatten;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    accessibilityLabel: option ? `${option.label} selected` : 'Placeholder in multiple select',
    style: ({
      pressed
    }) => [styles.multiSelectedOption, multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.container, {
      width: optionWidth
    }, pressed && ((multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.pressed) ?? _constants.PRESSED_STYLE)],
    disabled: disabled,
    onPress: () => onPressRemove ? onPressRemove(option) : null
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [styles.text, multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.text, {
      color: ((_StyleSheet$flatten = _reactNative.StyleSheet.flatten(multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.text)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.color) ?? _constants.COLORS.BLACK
    }]
  }, option === null || option === void 0 ? void 0 : option.label));
}, _reactFastCompare.default);
const styles = _reactNative.StyleSheet.create({
  text: {
    fontSize: _constants.FONT_SIZE,
    textAlign: 'left'
  },
  multiSelectedOption: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 4,
    backgroundColor: _constants.COLORS.DISABLED,
    borderWidth: 1,
    borderColor: _constants.COLORS.BLACK,
    margin: 2,
    paddingHorizontal: 5
  }
});
MultiSelectedOption.displayName = 'MultiSelectedOption';
//# sourceMappingURL=multi-selected-option.js.map