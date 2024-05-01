function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZE, PADDING, PRESSED_STYLE } from '../../constants';
import { useSectionHeader } from './section-header.hooks';
const iconSource = require('./../../assets/icons/x.png');
export const SectionHeader = ({
  title,
  isSelected
}) => {
  var _sectionHeaderCustomS2, _sectionHeaderCustomS3;
  const {
    sectionHeaderCustomStyles,
    onPressSection,
    sectionHeaderButtonProps,
    sectionHeaderTextProps,
    sectionHeaderImageProps,
    isDisabled
  } = useSectionHeader();
  return /*#__PURE__*/React.createElement(Pressable, _extends({
    disabled: isDisabled,
    accessibilityState: {
      disabled: isDisabled
    }
  }, sectionHeaderButtonProps, {
    style: ({
      pressed
    }) => {
      var _sectionHeaderCustomS;
      return [styles.sectionHeaderContainerStyle, sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 ? void 0 : sectionHeaderCustomStyles.container, isSelected && (sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 || (_sectionHeaderCustomS = sectionHeaderCustomStyles.selected) === null || _sectionHeaderCustomS === void 0 ? void 0 : _sectionHeaderCustomS.container), pressed && ((sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 ? void 0 : sectionHeaderCustomStyles.pressed) ?? PRESSED_STYLE)];
    },
    onPress: () => onPressSection(title)
  }), /*#__PURE__*/React.createElement(Text, _extends({}, sectionHeaderTextProps, {
    style: [styles.sectionHeaderTextStyle, sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 ? void 0 : sectionHeaderCustomStyles.text, isSelected && (sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 || (_sectionHeaderCustomS2 = sectionHeaderCustomStyles.selected) === null || _sectionHeaderCustomS2 === void 0 ? void 0 : _sectionHeaderCustomS2.text)]
  }), title), isSelected && /*#__PURE__*/React.createElement(Image, _extends({
    source: iconSource
  }, sectionHeaderImageProps, {
    style: [styles.xIcon, sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 || (_sectionHeaderCustomS3 = sectionHeaderCustomStyles.clear) === null || _sectionHeaderCustomS3 === void 0 ? void 0 : _sectionHeaderCustomS3.icon]
  })));
};
const styles = StyleSheet.create({
  sectionHeaderTextStyle: {
    fontSize: FONT_SIZE,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  sectionHeaderContainerStyle: {
    padding: PADDING,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  xIcon: {
    width: 16,
    height: 16
  }
});
//# sourceMappingURL=section-header.js.map