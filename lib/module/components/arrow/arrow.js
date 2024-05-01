function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { useArrow } from './arrow.hooks';
const arrowImage = require('./../../assets/icons/chevron-down.png');
export const Arrow = () => {
  const {
    arrowImageProps,
    arrowContainerProps,
    rotateAnimation,
    containerCustomStyles,
    iconCustomStyles,
    isOpened
  } = useArrow();
  const renderImage = useMemo(() => {
    if (rotateAnimation) {
      const rotate = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
      });
      return /*#__PURE__*/React.createElement(Animated.Image, _extends({
        source: arrowImage
      }, arrowImageProps, {
        style: [styles.arrowIcon, {
          transform: [{
            rotate
          }]
        }, iconCustomStyles]
      }));
    }
    return /*#__PURE__*/React.createElement(Image, _extends({
      source: arrowImage
    }, arrowImageProps, {
      style: [styles.arrowIcon, isOpened && styles.arrowIconOpened, iconCustomStyles]
    }));
  }, [iconCustomStyles, arrowImageProps, isOpened, rotateAnimation]);
  return /*#__PURE__*/React.createElement(View, _extends({
    testID: "Dropdown arrow"
  }, arrowContainerProps, {
    style: containerCustomStyles
  }), renderImage);
};
const styles = StyleSheet.create({
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