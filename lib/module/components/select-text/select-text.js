function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants';
import { useSelectText } from './select-text.hooks';
export const SelectText = ({
  selectedOptionLabel
}) => {
  var _StyleSheet$flatten;
  const {
    placeholderText,
    placeholderTextColor,
    selectTextProps,
    multiple,
    textCustomStyles
  } = useSelectText();
  if (multiple) {
    return /*#__PURE__*/React.createElement(Text, _extends({
      numberOfLines: 1
    }, selectTextProps, {
      style: [styles.multiple, textCustomStyles, {
        color: placeholderTextColor
      }]
    }), placeholderText);
  }
  return /*#__PURE__*/React.createElement(Text, _extends({
    numberOfLines: 1
  }, selectTextProps, {
    style: [styles.text, textCustomStyles, {
      color: selectedOptionLabel ? ((_StyleSheet$flatten = StyleSheet.flatten(textCustomStyles)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.color) ?? COLORS.BLACK : placeholderTextColor
    }]
  }), selectedOptionLabel || placeholderText);
};
const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE,
    textAlign: 'left'
  },
  multiple: {
    fontSize: FONT_SIZE,
    textAlign: 'left',
    alignSelf: 'center'
  }
});
//# sourceMappingURL=select-text.js.map