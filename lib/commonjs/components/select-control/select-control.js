"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _arrow = require("../arrow");
var _clearOption = require("../clear-option");
var _selectFieldType = require("../select-field-type");
var _selectControl = require("./select-control.hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectControl = exports.SelectControl = /*#__PURE__*/(0, _react.forwardRef)((_, ref) => {
  const {
    accessibilityHint,
    accessibilityLabel,
    onPressSelectControl,
    aboveSelectControl,
    selectLeftIconImageProps,
    selectRightIconsProps,
    selectLeftIconsProps,
    hideArrow,
    selectContainerProps,
    isOpened,
    disabled,
    showClearOptionA11y,
    showClearOption,
    buttonsStyles,
    leftIconStyles,
    containerStyles,
    disabledStyles,
    multiple
  } = (0, _selectControl.useSelectControl)();
  const clearOption = /*#__PURE__*/_react.default.createElement(_clearOption.ClearOption, null);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.rootView
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
    accessibilityHint: accessibilityHint,
    disabled: disabled,
    accessibilityState: {
      disabled
    }
  }, selectContainerProps, {
    ref: ref,
    accessibilityLabel: accessibilityLabel,
    style: [styles.container, multiple ? styles.multiSelect : styles.singleSelect, isOpened && (aboveSelectControl ? styles.openedAbove : styles.opened), containerStyles, disabled && [styles.disabled, disabledStyles]],
    onPress: onPressSelectControl
  }), !!(selectLeftIconImageProps !== null && selectLeftIconImageProps !== void 0 && selectLeftIconImageProps.source) && /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, selectLeftIconsProps, {
    style: styles.leftIconWrapper
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, selectLeftIconImageProps, {
    style: [styles.leftIcon, leftIconStyles]
  }))), /*#__PURE__*/_react.default.createElement(_selectFieldType.SelectFieldType, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, selectRightIconsProps, {
    style: [styles.buttonsContainer, buttonsStyles]
  }), showClearOption && clearOption, !hideArrow && /*#__PURE__*/_react.default.createElement(_arrow.Arrow, null))), showClearOptionA11y && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.a11IconWrapper
  }, clearOption));
});
const styles = _reactNative.StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    right: 8,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%'
  },
  leftIconWrapper: {
    height: '100%',
    justifyContent: 'center'
  },
  leftIcon: {
    marginRight: 8
  },
  a11IconWrapper: {
    position: 'absolute',
    right: -20,
    borderWidth: 1,
    height: '100%'
  },
  rootView: {
    position: 'relative',
    width: '100%'
  },
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: _constants.SHAPE,
    borderWidth: _constants.BORDER_WIDTH,
    backgroundColor: _constants.COLORS.WHITE,
    paddingHorizontal: _constants.PADDING
  },
  disabled: {
    backgroundColor: _constants.COLORS.DISABLED
  },
  openedAbove: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  opened: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  multiSelect: {
    paddingRight: 40
  },
  singleSelect: {
    paddingRight: 55
  }
});
SelectControl.displayName = 'SelectControl';
//# sourceMappingURL=select-control.js.map