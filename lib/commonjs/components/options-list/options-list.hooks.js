"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOptionsList = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _context = require("../../context");
var _helpers = require("../../helpers");
var _types = require("../../types");
const useOptionsList = () => {
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
  } = (0, _context.useOptionsListContext)();
  const {
    selectedOptionValue,
    selectedOptionLabel,
    selectedOptions
  } = (0, _helpers.selectedOptionResolver)(selectedOption);
  const measuredRef = (0, _react.useCallback)(node => {
    if (node !== null) {
      const reactTag = (0, _reactNative.findNodeHandle)(node);
      if (reactTag) {
        _reactNative.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, []);
  const resolveData = (0, _react.useCallback)(() => {
    if (!searchValue || searchValue.length > 0 && searchValue === selectedOptionLabel) {
      return optionsData;
    }
    return searchedOptions;
  }, [optionsData, searchValue, searchedOptions, selectedOptionLabel]);
  const findSelectedOption = (0, _react.useCallback)(item => {
    if (selectedOptionValue) {
      return item.value === selectedOptionValue;
    }
    if (selectedOptions) {
      return selectedOptions.some(option => item.value === option.value);
    }
    return false;
  }, [selectedOptionValue, selectedOptions]);
  const findSelectedOptionIndex = (0, _react.useCallback)(item => {
    if ((0, _types.isFlatOptionsType)(optionsData)) {
      return optionsData.findIndex(option => option.value === item.value);
    }
    return -1;
  }, [optionsData]);
  const getItemLayout = (0, _react.useCallback)((_data, index) => {
    var _StyleSheet$flatten, _styles$option;
    const height = (_StyleSheet$flatten = _reactNative.StyleSheet.flatten(styles === null || styles === void 0 || (_styles$option = styles.option) === null || _styles$option === void 0 ? void 0 : _styles$option.container)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.height;
    const isNumber = typeof height === 'number';
    return {
      length: isNumber ? height : _constants.ITEM_HEIGHT,
      offset: isNumber ? height * index : _constants.ITEM_HEIGHT * index,
      index
    };
  }, [styles === null || styles === void 0 || (_styles$option2 = styles.option) === null || _styles$option2 === void 0 ? void 0 : _styles$option2.container]);
  const resolvedData = resolveData();
  const isSectionedOptions = (0, _types.isSectionOptionsType)(resolvedData);
  const initialScrollIndex = typeof selectedOptionIndex === 'number' && scrollToSelectedOption ? selectedOptionIndex : -1;
  const accessibilityState = {
    expanded: isOpened
  };
  const {
    option: optionCustomStyles
  } = styles ?? {};
  const isDisabledResolveOption = (0, _react.useCallback)(isSelected => {
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
exports.useOptionsList = useOptionsList;
//# sourceMappingURL=options-list.hooks.js.map