"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMultiSelect = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _context = require("../../context");
var _helpers = require("../../helpers");
var _types = require("../../types");
const WIDTH_THRESHOLD = 100;
const WIDTH_OFFSET = 72;
const useMultiSelect = ({
  selectedOptions
}) => {
  var _StyleSheet$flatten;
  const {
    width: screenWidth
  } = (0, _reactNative.useWindowDimensions)();
  const {
    dispatch,
    searchValue,
    optionsData,
    selectedOptionIndex,
    disabled,
    selectedOption,
    multiple,
    onRemove,
    styles
  } = (0, _context.useSelectContext)();
  const {
    select: selectStyles
  } = styles ?? {};
  const {
    multiSelectedOption: multiSelectedCustomStyles
  } = selectStyles ?? {};
  const removeSingleOption = (0, _react.useCallback)(() => {
    dispatch({
      type: 'selectOption',
      payload: {
        selectedOption: null,
        selectedOptionIndex: -1
      }
    });
    const isSearchable = typeof searchValue === 'string';
    if (isSearchable) {
      dispatch({
        type: 'setSearchValue',
        payload: ''
      });
    }
  }, [dispatch, searchValue]);
  const removeOptionInMultipleSelect = (0, _react.useCallback)((option, selectedOptions) => {
    const removedSelectedOptions = selectedOptions.filter(selected => selected.value !== option.value);
    const isSectionedOptions = (0, _types.isSectionOptionsType)(optionsData);
    const resolvedOptionsData = isSectionedOptions ? (0, _helpers.getReducedSectionData)(optionsData) : optionsData;
    const foundIndex = resolvedOptionsData.findIndex(item => 'value' in item && item.value === (option === null || option === void 0 ? void 0 : option.value));
    let resolveSelectedOptionsIndexes = -1;
    if (Array.isArray(selectedOptionIndex)) {
      const filteredIndexes = selectedOptionIndex.filter(item => item !== foundIndex);
      resolveSelectedOptionsIndexes = filteredIndexes.length > 0 ? filteredIndexes : resolveSelectedOptionsIndexes;
    }
    dispatch({
      type: 'selectOption',
      payload: {
        selectedOption: removedSelectedOptions.length > 0 ? removedSelectedOptions : null,
        selectedOptionIndex: resolveSelectedOptionsIndexes
      }
    });
    return {
      index: foundIndex,
      option
    };
  }, [dispatch, optionsData, selectedOptionIndex]);
  const onPressRemove = (0, _react.useCallback)((option = null) => {
    if (disabled) {
      return;
    }
    let removedOption;
    if (option && multiple && selectedOptions) {
      removedOption = removeOptionInMultipleSelect(option, selectedOptions);
    } else {
      removeSingleOption();
      removedOption = {
        option: selectedOption,
        index: selectedOptionIndex
      };
    }
    if (onRemove && removedOption.option && (0, _types.isOptionType)(removedOption.option) && (0, _types.isOptionIndexType)(removedOption.index)) {
      // callback
      onRemove(removedOption.option, removedOption.index);
    }
  }, [disabled, multiple, onRemove, removeOptionInMultipleSelect, removeSingleOption, selectedOption, selectedOptionIndex, selectedOptions]);
  const containerWidth = (_StyleSheet$flatten = _reactNative.StyleSheet.flatten(selectStyles === null || selectStyles === void 0 ? void 0 : selectStyles.container)) === null || _StyleSheet$flatten === void 0 ? void 0 : _StyleSheet$flatten.width;
  const calculatedOptionWidth = (0, _react.useMemo)(() => {
    if (!selectedOptions) {
      return 0;
    }
    const {
      length
    } = selectedOptions;
    const initialWidth = containerWidth ?? 100;
    if (typeof initialWidth === 'number') {
      const calculatedWidth = (initialWidth - WIDTH_OFFSET) / length;
      return calculatedWidth < WIDTH_THRESHOLD ? WIDTH_THRESHOLD : Math.floor(calculatedWidth);
    }
    if (typeof initialWidth === 'string') {
      const ratioToScreen = (0, _helpers.dimensionPercentageToDP)(initialWidth, screenWidth);
      const calculatedWidth = ratioToScreen / length;
      return calculatedWidth - WIDTH_OFFSET < WIDTH_THRESHOLD ? WIDTH_THRESHOLD : calculatedWidth - WIDTH_OFFSET;
    }
    return 0;
  }, [selectedOptions, containerWidth, screenWidth]);
  const isSearchable = typeof searchValue === 'string';
  return {
    calculatedOptionWidth,
    onPressRemove,
    disabled,
    isSearchable,
    multiSelectedCustomStyles
  };
};
exports.useMultiSelect = useMultiSelect;
//# sourceMappingURL=multi-select.hooks.js.map