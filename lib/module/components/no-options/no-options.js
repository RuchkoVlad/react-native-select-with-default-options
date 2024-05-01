function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZE, PADDING } from '../../constants';
import { useNoOptions } from './no-options.hooks';
export const NoOptions = () => {
  const {
    noOptionsText,
    noOptionsProps,
    noOptionsTextProps,
    textCustomStyles,
    containerCustomStyles
  } = useNoOptions();
  return /*#__PURE__*/React.createElement(View, _extends({}, noOptionsProps, {
    style: [styles.option, containerCustomStyles]
  }), /*#__PURE__*/React.createElement(Text, _extends({}, noOptionsTextProps, {
    style: [styles.text, textCustomStyles]
  }), noOptionsText));
};
export const styles = StyleSheet.create({
  option: {
    padding: PADDING
  },
  text: {
    fontSize: FONT_SIZE,
    color: COLORS.BLACK,
    textAlign: 'left'
  }
});
//# sourceMappingURL=no-options.js.map