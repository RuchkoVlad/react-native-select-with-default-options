"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimation = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _constants = require("../constants");
const useAnimation = ({
  isOpened,
  animation
}) => {
  const ref = (0, _react.useRef)(new _reactNative.Animated.Value(0));
  const isAnimated = typeof animation === 'number' && animation === 0 || animation;
  (0, _react.useEffect)(() => {
    if (isAnimated) {
      _reactNative.Animated.timing(ref.current, {
        toValue: isOpened ? 1 : 0,
        duration: typeof animation === 'boolean' ? _constants.ANIMATION_DURATION : animation,
        useNativeDriver: true
      }).start();
    }
  }, [isOpened, animation, isAnimated]);
  return isAnimated ? ref.current : null;
};
exports.useAnimation = useAnimation;
//# sourceMappingURL=use-animation.js.map