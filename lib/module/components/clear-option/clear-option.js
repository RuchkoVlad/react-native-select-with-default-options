function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { useClearOption } from './clear-option.hooks';
const iconSource = require('./../../assets/icons/x.png');
export const ClearOption = () => {
  const {
    disabled,
    clearOptionButtonProps,
    clearOptionImageProps,
    iconCustomStyles,
    containerCustomStyles,
    onPressClearOption
  } = useClearOption();
  return /*#__PURE__*/React.createElement(Pressable, _extends({
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
  }), /*#__PURE__*/React.createElement(Image, _extends({
    source: iconSource
  }, clearOptionImageProps, {
    style: [styles.xIcon, iconCustomStyles]
  })));
};
const styles = StyleSheet.create({
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