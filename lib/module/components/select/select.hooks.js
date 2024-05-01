import { useCallback, useContext, useImperativeHandle } from 'react';
import { I18nManager, useWindowDimensions } from 'react-native';
import { APPROX_STATUSBAR_HEIGHT } from '../../constants';
import { getReducedSectionData, getSectionOptionsIndexes, selectedOptionResolver } from '../../helpers';
import { isOptionIndexType, isOptionType, isSectionOptionsType } from '../../types';
import { SelectModalContext } from '../select-provider';
export const useSelect = ({
  ref,
  selectControlRef,
  state,
  disabled,
  closeOptionsListOnSelect,
  searchable,
  multiple,
  dispatch,
  onSelectOpened,
  onSelectClosed,
  onSectionSelect,
  onSectionRemove,
  optionsListRef,
  onSelect
}) => {
  const {
    height: screenHeight,
    width: screenWidth
  } = useWindowDimensions();
  const valueY = useContext(SelectModalContext);
  const {
    isOpened,
    selectedOption,
    optionsData,
    searchInputRef,
    selectedOptionIndex
  } = state;
  const {
    selectedOptionLabel,
    selectedOptions
  } = selectedOptionResolver(selectedOption);
  const isSectionedOptions = isSectionOptionsType(optionsData);
  const open = useCallback(() => {
    dispatch({
      type: 'open'
    });
    onSelectOpened === null || onSelectOpened === void 0 || onSelectOpened();
  }, [dispatch, onSelectOpened]);
  const close = useCallback(() => {
    dispatch({
      type: 'close'
    });
    onSelectClosed === null || onSelectClosed === void 0 || onSelectClosed();
  }, [dispatch, onSelectClosed]);
  const measureSelectInWindow = () => {
    return new Promise(resolve => {
      if (selectControlRef.current) {
        selectControlRef.current.measureInWindow((x, y, width, height) => {
          resolve({
            x,
            y,
            width,
            height
          });
        });
      }
    });
  };
  const measureOptionsListInWindow = () => {
    return new Promise(resolve => {
      if (optionsListRef.current) {
        optionsListRef.current.measureInWindow((_x, _y, _width, height) => {
          resolve({
            height
          });
        });
      }
    });
  };
  const setOptionsListPosition = async () => {
    const {
      x,
      y,
      width,
      height
    } = await measureSelectInWindow();
    const {
      height: optionsListHeight
    } = await measureOptionsListInWindow();
    const isOverflow = y + height + optionsListHeight > screenHeight;
    const top = isOverflow ? y - optionsListHeight + APPROX_STATUSBAR_HEIGHT : y + height - valueY + APPROX_STATUSBAR_HEIGHT;
    const left = I18nManager.getConstants().isRTL ? screenWidth - width - x : x;
    dispatch({
      type: 'setOptionsListPosition',
      payload: {
        width,
        top,
        left,
        aboveSelectControl: isOverflow
      }
    });
  };
  const onPressSelectControl = async () => {
    if (disabled) {
      return;
    }
    if (isOpened) {
      close();
      return;
    }
    if (selectControlRef.current) {
      open();
      await setOptionsListPosition();
    }
  };
  useImperativeHandle(ref, () => ({
    clear: () => {
      dispatch({
        type: 'selectOption',
        payload: {
          selectedOption: null,
          selectedOptionIndex: -1
        }
      });
      if (!multiple && selectedOption && isOptionType(selectedOption) && isOptionIndexType(selectedOptionIndex)) {
        return {
          removedSelectedOption: selectedOption,
          removedSelectedOptionIndex: selectedOptionIndex
        };
      }
      if (multiple && selectedOption && !isOptionType(selectedOption) && !isOptionIndexType(selectedOptionIndex)) {
        return {
          removedSelectedOptions: selectedOption,
          removedSelectedOptionsIndexes: selectedOptionIndex
        };
      }
      return {};
    },
    open: async () => {
      if (selectControlRef.current) {
        open();
        await setOptionsListPosition();
      }
    },
    close,
    getState: () => state
  }));
  const hideKeyboardIfNeeded = useCallback(() => {
    var _searchInputRef$curre;
    return searchInputRef === null || searchInputRef === void 0 || (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 ? void 0 : _searchInputRef$curre.blur();
  }, [searchInputRef]);
  const resolveOption = useCallback((option, optionIndex) => {
    if (!multiple) {
      return {
        selectedOption: option,
        selectedOptionIndex: optionIndex
      };
    }
    const foundSelectedOption = selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.find(selectedOption => selectedOption.value === option.value);
    if (foundSelectedOption) {
      return {
        selectedOption: selectedOptions,
        selectedOptionIndex: typeof selectedOptionIndex === 'number' ? selectedOptionIndex : [...selectedOptionIndex]
      };
    }
    const mergedOptions = selectedOptions ? selectedOptions.concat(option) : [option];
    const resolvedOptionsData = isSectionedOptions ? getReducedSectionData(optionsData) : optionsData;
    const optionsIndexes = mergedOptions.map(item => resolvedOptionsData.findIndex(({
      value
    }) => value === item.value)).filter(item => item !== null);
    return {
      selectedOption: mergedOptions,
      selectedOptionIndex: optionsIndexes.length > 0 ? [...optionsIndexes] : -1
    };
  }, [isSectionedOptions, multiple, optionsData, selectedOptionIndex, selectedOptions]);
  const onPressOption = useCallback((option, optionIndex) => {
    if (closeOptionsListOnSelect) {
      close();
    }
    dispatch({
      type: 'selectOption',
      payload: resolveOption(option, optionIndex)
    });
    if (searchable) {
      if (multiple) {
        dispatch({
          type: 'setSearchValue',
          payload: ''
        });
      } else {
        dispatch({
          type: 'setSearchValue',
          payload: option.label
        });
      }
    }
    if (option) {
      hideKeyboardIfNeeded();
    }

    // callback
    if (onSelect) {
      onSelect(option, optionIndex);
    }
  }, [close, closeOptionsListOnSelect, dispatch, hideKeyboardIfNeeded, multiple, onSelect, resolveOption, searchable]);
  const onPressSection = title => {
    if (closeOptionsListOnSelect && multiple) {
      close();
    }
    if (!multiple || !isSectionedOptions) {
      return;
    }
    const resolveOption = () => {
      var _optionsData$find;
      const sectionOptions = ((_optionsData$find = optionsData.find(item => item.title === title)) === null || _optionsData$find === void 0 ? void 0 : _optionsData$find.data) ?? [];
      const formattedSectionOptions = sectionOptions.map(item => ({
        ...item,
        section: {
          title,
          index: optionsData.findIndex(el => el.title === title)
        }
      }));
      const newSectionOptions = formattedSectionOptions.filter(item => !(selectedOptions !== null && selectedOptions !== void 0 && selectedOptions.some(selected => selected.value === item.value)));
      if (newSectionOptions.length === 0 && selectedOptions) {
        onSectionRemove === null || onSectionRemove === void 0 || onSectionRemove(formattedSectionOptions, getSectionOptionsIndexes(optionsData, formattedSectionOptions));
        const restOptions = selectedOptions.filter(item => !formattedSectionOptions.some(selected => selected.value === item.value));
        return {
          selectedOption: restOptions.length > 0 ? restOptions : null,
          selectedOptionIndex: restOptions ? getSectionOptionsIndexes(optionsData, restOptions) : -1
        };
      }
      const mergedOptions = selectedOptions ? selectedOptions.concat(newSectionOptions) : newSectionOptions;
      const optionsIndexes = getSectionOptionsIndexes(optionsData, mergedOptions);
      onSectionSelect === null || onSectionSelect === void 0 || onSectionSelect(newSectionOptions, getSectionOptionsIndexes(optionsData, newSectionOptions));
      return {
        selectedOption: mergedOptions,
        selectedOptionIndex: optionsIndexes.length > 0 ? optionsIndexes : -1
      };
    };
    dispatch({
      type: 'selectOption',
      payload: resolveOption()
    });
    if (searchable) {
      dispatch({
        type: 'setSearchValue',
        payload: ''
      });
    }
  };
  const onOutsidePress = () => {
    if (selectedOptionLabel && searchable) {
      dispatch({
        type: 'setSearchValue',
        payload: selectedOptionLabel
      });
    }
    close();
    hideKeyboardIfNeeded();
  };
  return {
    setOptionsListPosition,
    onPressOption,
    onPressSection,
    onOutsidePress,
    onPressSelectControl
  };
};
//# sourceMappingURL=select.hooks.js.map