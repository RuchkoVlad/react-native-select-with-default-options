import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { ANIMATION_DURATION } from '../constants';
export const useAnimation = ({
  isOpened,
  animation
}) => {
  const ref = useRef(new Animated.Value(0));
  const isAnimated = typeof animation === 'number' && animation === 0 || animation;
  useEffect(() => {
    if (isAnimated) {
      Animated.timing(ref.current, {
        toValue: isOpened ? 1 : 0,
        duration: typeof animation === 'boolean' ? ANIMATION_DURATION : animation,
        useNativeDriver: true
      }).start();
    }
  }, [isOpened, animation, isAnimated]);
  return isAnimated ? ref.current : null;
};
//# sourceMappingURL=use-animation.js.map