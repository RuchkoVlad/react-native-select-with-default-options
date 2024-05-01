import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZE, PRESSED_STYLE } from '../../constants';
export const MultiSelectedOption = /*#__PURE__*/memo(({
  option,
  multiSelectedCustomStyles,
  optionWidth,
  onPressRemove,
  disabled
}) => {
  var _StyleSheet$flatten;
  return /*#__PURE__*/React.createElement(Pressable, {
    accessibilityLabel: option ? `${option.label} selected` : 'Placeholder in multiple select',
    style: ({
      pressed
    }) => [styles.multiSelectedOption, multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.container, {
      width: optionWidth
    }, pressed && ((multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.pressed) ?? PRESSED_STYLE)],
    disabled: disabled,
    onPress: () => onPressRemove ? onPressRemove(option) : null
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    style: [styles.text, multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.text, {
      color: ((_StyleSheet$flatten = StyleSheet.flatten(multiSelectedCustomStyles === null || multiSelectedCustomStyles === void 0 ? void 0 : multiSelectedCustomStyles.text)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.color) ?? COLORS.BLACK
    }]
  }, option === null || option === void 0 ? void 0 : option.label));
}, isEqual);
const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE,
    textAlign: 'left'
  },
  multiSelectedOption: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: 4,
    backgroundColor: COLORS.DISABLED,
    borderWidth: 1,
    borderColor: COLORS.BLACK,
    margin: 2,
    paddingHorizontal: 5
  }
});
MultiSelectedOption.displayName = 'MultiSelectedOption';
//# sourceMappingURL=multi-selected-option.js.map