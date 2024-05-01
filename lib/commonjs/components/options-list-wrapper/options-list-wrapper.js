"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsListWrapper = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _optionListWrapper = require("./option-list-wrapper.hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OptionsListWrapper = exports.OptionsListWrapper = /*#__PURE__*/(0, _react.forwardRef)(({
  children
}, ref) => {
  const {
    isOpened,
    fadeAnimation,
    optionsListCustomStyles,
    aboveSelectControl,
    top,
    left,
    width
  } = (0, _optionListWrapper.useOptionListWrapper)();
  return fadeAnimation ? /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    ref: ref,
    pointerEvents: isOpened ? 'auto' : 'none',
    style: [styles.optionsList, aboveSelectControl ? styles.overflown : styles.notOverflown, optionsListCustomStyles, {
      top,
      left,
      width
    }, {
      opacity: fadeAnimation
    }]
  }, children) : isOpened ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    ref: ref,
    style: [styles.optionsList, aboveSelectControl ? styles.overflown : styles.notOverflown, optionsListCustomStyles, {
      top,
      left,
      width
    }]
  }, children) : null;
});
const styles = _reactNative.StyleSheet.create({
  optionsList: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: _constants.COLORS.WHITE,
    borderWidth: _constants.BORDER_WIDTH,
    maxHeight: _constants.OPTIONS_LIST_HEIGHT,
    elevation: 5
  },
  notOverflown: {
    borderTopWidth: 0,
    borderBottomRightRadius: _constants.SHAPE,
    borderBottomLeftRadius: _constants.SHAPE
  },
  overflown: {
    borderBottomWidth: 0,
    borderTopRightRadius: _constants.SHAPE,
    borderTopLeftRadius: _constants.SHAPE
  }
});
OptionsListWrapper.displayName = 'OptionsListWrapper';
//# sourceMappingURL=options-list-wrapper.js.map