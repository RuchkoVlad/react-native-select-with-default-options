import { useCallback } from 'react';
import { AccessibilityInfo, findNodeHandle, StyleSheet } from 'react-native';
import { ITEM_HEIGHT } from '../../constants';
import { useOptionsListContext } from '../../context';
import { selectedOptionResolver } from '../../helpers';
import { isFlatOptionsType, isSectionOptionsType } from '../../types';
export const useOptionsList = () => {
  var _styles$option2;
  const {
    optionsData,
    searchValue,
    searchedOptions,
    styles,
    isOpened,
    selectedOptionIndex,
    scrollToSelectedOption,
    flatListProps,
    selectedOption,
    sectionListProps,
    disabled,
    onPressOption,
    optionButtonProps,
    optionTextProps,
    pressableSelectedOption
  } = useOptionsListContext();
  const {
    selectedOptionValue,
    selectedOptionLabel,
    selectedOptions
  } = selectedOptionResolver(selectedOption);
  const measuredRef = useCallback(node => {
    if (node !== null) {
      const reactTag = findNodeHandle(node);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, []);
  const resolveData = useCallback(() => {
    if (!searchValue || searchValue.length > 0 && searchValue === selectedOptionLabel) {
      return optionsData;
    }
    return searchedOptions;
  }, [optionsData, searchValue, searchedOptions, selectedOptionLabel]);
  const findSelectedOption = useCallback(item => {
    if (selectedOptionValue) {
      return item.value === selectedOptionValue;
    }
    if (selectedOptions) {
      return selectedOptions.some(option => item.value === option.value);
    }
    return false;
  }, [selectedOptionValue, selectedOptions]);
  const findSelectedOptionIndex = useCallback(item => {
    if (isFlatOptionsType(optionsData)) {
      return optionsData.findIndex(option => option.value === item.value);
    }
    return -1;
  }, [optionsData]);
  const getItemLayout = useCallback((_data, index) => {
    var _StyleSheet$flatten, _styles$option;
    const height = (_StyleSheet$flatten = StyleSheet.flatten(styles === null || styles === void 0 || (_styles$option = styles.option) === null || _styles$option === void 0 ? void 0 : _styles$option.container)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.height;
    const isNumber = typeof height === 'number';
    return {
      length: isNumber ? height : ITEM_HEIGHT,
      offset: isNumber ? height * index : ITEM_HEIGHT * index,
      index
    };
  }, [styles === null || styles === void 0 || (_styles$option2 = styles.option) === null || _styles$option2 === void 0 ? void 0 : _styles$option2.container]);
  const resolvedData = resolveData();
  const isSectionedOptions = isSectionOptionsType(resolvedData);
  const initialScrollIndex = typeof selectedOptionIndex === 'number' && scrollToSelectedOption ? selectedOptionIndex : -1;
  const accessibilityState = {
    expanded: isOpened
  };
  const {
    option: optionCustomStyles
  } = styles ?? {};
  const isDisabledResolveOption = useCallback(isSelected => {
    let isDisabledOption = false;
    if (disabled) {
      isDisabledOption = disabled;
    } else if (pressableSelectedOption) {
      isDisabledOption = false;
    } else if (isSelected) {
      isDisabledOption = true;
    }
    return isDisabledOption;
  }, [disabled, pressableSelectedOption]);
  return {
    getItemLayout,
    measuredRef,
    resolvedData,
    findSelectedOption,
    findSelectedOptionIndex,
    scrollToSelectedOption,
    flatListProps,
    sectionListProps,
    selectedOption,
    optionCustomStyles,
    isSectionedOptions,
    initialScrollIndex,
    accessibilityState,
    disabled,
    onPressOption,
    optionButtonProps,
    optionTextProps,
    isDisabledResolveOption
  };
};
//# sourceMappingURL=options-list.hooks.js.map