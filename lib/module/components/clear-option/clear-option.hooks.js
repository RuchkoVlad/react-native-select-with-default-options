import { useSelectContext } from '../../context';
import { isOptionIndexType, isOptionType } from '../../types';
export const useClearOption = () => {
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
  } = useSelectContext();
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
    if (onRemove && selectedOption && isOptionType(selectedOption) && isOptionIndexType(selectedOptionIndex)) {
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
//# sourceMappingURL=clear-option.hooks.js.map