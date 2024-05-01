function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { BORDER_WIDTH, COLORS, PADDING, SHAPE } from '../../constants';
import { Arrow } from '../arrow';
import { ClearOption } from '../clear-option';
import { SelectFieldType } from '../select-field-type';
import { useSelectControl } from './select-control.hooks';
export const SelectControl = /*#__PURE__*/forwardRef((_, ref) => {
  const {
    accessibilityHint,
    accessibilityLabel,
    onPressSelectControl,
    aboveSelectControl,
    selectLeftIconImageProps,
    selectRightIconsProps,
    selectLeftIconsProps,
    hideArrow,
    selectContainerProps,
    isOpened,
    disabled,
    showClearOptionA11y,
    showClearOption,
    buttonsStyles,
    leftIconStyles,
    containerStyles,
    disabledStyles,
    multiple
  } = useSelectControl();
  const clearOption = /*#__PURE__*/React.createElement(ClearOption, null);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.rootView
  }, /*#__PURE__*/React.createElement(Pressable, _extends({
    accessibilityHint: accessibilityHint,
    disabled: disabled,
    accessibilityState: {
      disabled
    }
  }, selectContainerProps, {
    ref: ref,
    accessibilityLabel: accessibilityLabel,
    style: [styles.container, multiple ? styles.multiSelect : styles.singleSelect, isOpened && (aboveSelectControl ? styles.openedAbove : styles.opened), containerStyles, disabled && [styles.disabled, disabledStyles]],
    onPress: onPressSelectControl
  }), !!(selectLeftIconImageProps !== null && selectLeftIconImageProps !== void 0 && selectLeftIconImageProps.source) && /*#__PURE__*/React.createElement(View, _extends({}, selectLeftIconsProps, {
    style: styles.leftIconWrapper
  }), /*#__PURE__*/React.createElement(Image, _extends({}, selectLeftIconImageProps, {
    style: [styles.leftIcon, leftIconStyles]
  }))), /*#__PURE__*/React.createElement(SelectFieldType, null), /*#__PURE__*/React.createElement(View, _extends({}, selectRightIconsProps, {
    style: [styles.buttonsContainer, buttonsStyles]
  }), showClearOption && clearOption, !hideArrow && /*#__PURE__*/React.createElement(Arrow, null))), showClearOptionA11y && /*#__PURE__*/React.createElement(View, {
    style: styles.a11IconWrapper
  }, clearOption));
});
const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    right: 8,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%'
  },
  leftIconWrapper: {
    height: '100%',
    justifyContent: 'center'
  },
  leftIcon: {
    marginRight: 8
  },
  a11IconWrapper: {
    position: 'absolute',
    right: -20,
    borderWidth: 1,
    height: '100%'
  },
  rootView: {
    position: 'relative',
    width: '100%'
  },
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: SHAPE,
    borderWidth: BORDER_WIDTH,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: PADDING
  },
  disabled: {
    backgroundColor: COLORS.DISABLED
  },
  openedAbove: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  opened: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  multiSelect: {
    paddingRight: 40
  },
  singleSelect: {
    paddingRight: 55
  }
});
SelectControl.displayName = 'SelectControl';
//# sourceMappingURL=select-control.js.map