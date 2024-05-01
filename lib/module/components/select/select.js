import React, { forwardRef, useReducer, useRef } from 'react';
import { StyleSheet, UIManager, View } from 'react-native';
import { Portal } from '@gorhom/portal';
import { COLORS, Portals } from '../../constants';
import { OptionsListContextProvider, SelectContextProvider } from '../../context';
import { isAndroid, mergeObjects } from '../../helpers';
import { createInitialState, reducer } from '../../state';
import { themes } from '../../themes';
import { Backdrop } from '../backdrop';
import { OptionsList } from '../options-list';
import { SelectControl } from '../select-control';
import { useSelect } from './select.hooks';
if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const SelectComponent = (props, ref) => {
  const {
    // Required
    options,
    // Basic
    animation = true,
    clearable = true,
    closeOptionsListOnSelect = true,
    defaultOption,
    disabled = false,
    hasBackdrop = true,
    hideArrow = false,
    multiple = false,
    noOptionsText = 'No options',
    placeholderText = 'Select...',
    placeholderTextColor = COLORS.GRAY,
    pressableSelectedOption = true,
    scrollToSelectedOption = true,
    searchable = false,
    searchPattern = payload => `(${payload})`,
    styles: customStyles,
    theme = 'none',
    // Callbacks
    onSelectChangeText,
    onSectionSelect,
    onSectionRemove,
    onSelect,
    onSelectOpened,
    onSelectClosed,
    onRemove,
    // Customized
    arrowContainerProps,
    arrowImageProps,
    backdropChildProps,
    backdropProps,
    clearOptionButtonProps,
    clearOptionImageProps,
    flatListProps,
    noOptionsProps,
    noOptionsTextProps,
    optionButtonProps,
    optionTextProps,
    selectContainerProps,
    selectInputProps,
    selectLeftIconImageProps,
    selectLeftIconsProps,
    selectRightIconsProps,
    selectTextProps,
    sectionHeaderButtonProps,
    sectionHeaderImageProps,
    sectionHeaderTextProps,
    sectionListProps
  } = props;
  const [state, dispatch] = useReducer(reducer, {
    options,
    searchable,
    animation,
    defaultOption
  }, createInitialState);
  const {
    isOpened,
    selectedOption,
    optionsData,
    openedPosition,
    searchValue,
    searchedOptions,
    selectedOptionIndex
  } = state;
  const {
    aboveSelectControl
  } = openedPosition;
  const mainStyles = mergeObjects(themes[theme], customStyles);
  const selectControlRef = useRef(null);
  const optionsListRef = useRef(null);
  const {
    setOptionsListPosition,
    onPressOption,
    onOutsidePress,
    onPressSelectControl,
    onPressSection
  } = useSelect({
    selectControlRef,
    optionsListRef,
    dispatch,
    onRemove,
    disabled,
    closeOptionsListOnSelect,
    searchable,
    multiple,
    onSelectOpened,
    onSelectClosed,
    ref,
    state,
    onSectionSelect,
    onSectionRemove,
    onSelect
  });
  return /*#__PURE__*/React.createElement(View, {
    style: styles.relative
  }, /*#__PURE__*/React.createElement(SelectContextProvider, {
    value: {
      isOpened,
      animation,
      aboveSelectControl,
      clearable,
      disabled,
      hideArrow,
      multiple,
      optionsData: optionsData,
      placeholderText,
      placeholderTextColor,
      searchPattern,
      searchValue,
      onPressSelectControl,
      selectInputProps,
      onRemove: onRemove,
      dispatch: dispatch,
      setOptionsListPosition,
      selectedOption,
      selectedOptionIndex,
      styles: mainStyles,
      clearOptionButtonProps,
      clearOptionImageProps,
      arrowContainerProps,
      arrowImageProps,
      selectRightIconsProps,
      selectLeftIconsProps,
      selectLeftIconImageProps,
      selectTextProps,
      selectContainerProps,
      onSelectChangeText
    }
  }, /*#__PURE__*/React.createElement(SelectControl, {
    ref: selectControlRef
  })), isOpened && /*#__PURE__*/React.createElement(React.Fragment, null, hasBackdrop && /*#__PURE__*/React.createElement(Portal, {
    hostName: Portals.Backdrop
  }, /*#__PURE__*/React.createElement(Backdrop, {
    backdropCustomStyles: mainStyles === null || mainStyles === void 0 ? void 0 : mainStyles.backdrop,
    backdropProps: backdropProps,
    backdropChildProps: backdropChildProps,
    onOutsidePress: onOutsidePress
  })), /*#__PURE__*/React.createElement(Portal, {
    hostName: Portals.OptionsList
  }, /*#__PURE__*/React.createElement(OptionsListContextProvider, {
    value: {
      animation,
      aboveSelectControl,
      flatListProps,
      isOpened,
      noOptionsText,
      openedPosition,
      optionsData: optionsData,
      scrollToSelectedOption,
      searchValue,
      onPressOption: onPressOption,
      onPressSection,
      selectedOption,
      searchedOptions: searchedOptions,
      selectedOptionIndex,
      sectionListProps: sectionListProps,
      styles: mainStyles,
      optionButtonProps,
      optionTextProps,
      noOptionsProps,
      noOptionsTextProps,
      sectionHeaderButtonProps,
      sectionHeaderImageProps,
      sectionHeaderTextProps,
      pressableSelectedOption,
      multiple,
      disabled
    }
  }, /*#__PURE__*/React.createElement(OptionsList, {
    ref: optionsListRef
  })))));
};
const styles = StyleSheet.create({
  relative: {
    position: 'relative'
  }
});
export const Select = /*#__PURE__*/forwardRef(SelectComponent);
//# sourceMappingURL=select.js.map