import React, { forwardRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { BORDER_WIDTH, COLORS, OPTIONS_LIST_HEIGHT, SHAPE } from '../../constants';
import { useOptionListWrapper } from './option-list-wrapper.hooks';
export const OptionsListWrapper = /*#__PURE__*/forwardRef(({
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
  } = useOptionListWrapper();
  return fadeAnimation ? /*#__PURE__*/React.createElement(Animated.View, {
    ref: ref,
    pointerEvents: isOpened ? 'auto' : 'none',
    style: [styles.optionsList, aboveSelectControl ? styles.overflown : styles.notOverflown, optionsListCustomStyles, {
      top,
      left,
      width
    }, {
      opacity: fadeAnimation
    }]
  }, children) : isOpened ? /*#__PURE__*/React.createElement(View, {
    ref: ref,
    style: [styles.optionsList, aboveSelectControl ? styles.overflown : styles.notOverflown, optionsListCustomStyles, {
      top,
      left,
      width
    }]
  }, children) : null;
});
const styles = StyleSheet.create({
  optionsList: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
    borderWidth: BORDER_WIDTH,
    maxHeight: OPTIONS_LIST_HEIGHT,
    elevation: 5
  },
  notOverflown: {
    borderTopWidth: 0,
    borderBottomRightRadius: SHAPE,
    borderBottomLeftRadius: SHAPE
  },
  overflown: {
    borderBottomWidth: 0,
    borderTopRightRadius: SHAPE,
    borderTopLeftRadius: SHAPE
  }
});
OptionsListWrapper.displayName = 'OptionsListWrapper';
//# sourceMappingURL=options-list-wrapper.js.map