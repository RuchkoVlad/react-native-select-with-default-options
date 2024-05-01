"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useClearOption = void 0;
var _context = require("../../context");
var _types = require("../../types");
const useClearOption = () => {
  const {
    styles: mainStyles,
    disabled,
    clearOptionButtonProps,
    clearOptionImageProps,
    dispatch,
    searchValue,
    selectedOption,
    selectedOptionIndex,
    onRemove
  } = (0, _context.useSelectContext)();
  const {
    clear
  } = (mainStyles === null || mainStyles === void 0 ? void 0 : mainStyles.select) ?? {};
  const {
    icon: iconCustomStyles,
    container: containerCustomStyles
  } = clear ?? {};
  const removeSingleOption = () => {
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
  };
  const onPressClearOption = () => {
    if (disabled) {
      return;
    }
    removeSingleOption();
    if (onRemove && selectedOption && (0, _types.isOptionType)(selectedOption) && (0, _types.isOptionIndexType)(selectedOptionIndex)) {
      // callback
      onRemove(selectedOption, selectedOptionIndex);
    }
  };
  return {
    disabled,
    clearOptionButtonProps,
    clearOptionImageProps,
    iconCustomStyles,
    containerCustomStyles,
    onPressClearOption
  };
};
exports.useClearOption = useClearOption;
//# sourceMappingURL=clear-option.hooks.js.map