"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _arrow = require("./arrow.hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const arrowImage = require('./../../assets/icons/chevron-down.png');
const Arrow = () => {
  const {
    arrowImageProps,
    arrowContainerProps,
    rotateAnimation,
    containerCustomStyles,
    iconCustomStyles,
    isOpened
  } = (0, _arrow.useArrow)();
  const renderImage = (0, _react.useMemo)(() => {
    if (rotateAnimation) {
      const rotate = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
      });
      return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Image, _extends({
        source: arrowImage
      }, arrowImageProps, {
        style: [styles.arrowIcon, {
          transform: [{
            rotate
          }]
        }, iconCustomStyles]
      }));
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({
      source: arrowImage
    }, arrowImageProps, {
      style: [styles.arrowIcon, isOpened && styles.arrowIconOpened, iconCustomStyles]
    }));
  }, [iconCustomStyles, arrowImageProps, isOpened, rotateAnimation]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    testID: "Dropdown arrow"
  }, arrowContainerProps, {
    style: containerCustomStyles
  }), renderImage);
};
exports.Arrow = Arrow;
const styles = _reactNative.StyleSheet.create({
  arrowIcon: {
    width: 24,
    height: 24,
    zIndex: -1
  },
  arrowIconOpened: {
    transform: [{
      rotate: '180deg'
    }]
  }
});
//# sourceMappingURL=arrow.js.map