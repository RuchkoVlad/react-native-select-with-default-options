"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelect = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _helpers = require("../../helpers");
var _types = require("../../types");
var _selectProvider = require("../select-provider");
const useSelect = ({
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
  } = (0, _reactNative.useWindowDimensions)();
  const valueY = (0, _react.useContext)(_selectProvider.SelectModalContext);
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
  } = (0, _helpers.selectedOptionResolver)(selectedOption);
  const isSectionedOptions = (0, _types.isSectionOptionsType)(optionsData);
  const open = (0, _react.useCallback)(() => {
    dispatch({
      type: 'open'
    });
    onSelectOpened === null || onSelectOpened === void 0 || onSelectOpened();
  }, [dispatch, onSelectOpened]);
  const close = (0, _react.useCallback)(() => {
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
    const top = isOverflow ? y - optionsListHeight + _constants.APPROX_STATUSBAR_HEIGHT : y + height - valueY + _constants.APPROX_STATUSBAR_HEIGHT;
    const left = _reactNative.I18nManager.getConstants().isRTL ? screenWidth - width - x : x;
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
  (0, _react.useImperativeHandle)(ref, () => ({
    clear: () => {
      dispatch({
        type: 'selectOption',
        payload: {
          selectedOption: null,
          selectedOptionIndex: -1
        }
      });
      if (!multiple && selectedOption && (0, _types.isOptionType)(selectedOption) && (0, _types.isOptionIndexType)(selectedOptionIndex)) {
        return {
          removedSelectedOption: selectedOption,
          removedSelectedOptionIndex: selectedOptionIndex
        };
      }
      if (multiple && selectedOption && !(0, _types.isOptionType)(selectedOption) && !(0, _types.isOptionIndexType)(selectedOptionIndex)) {
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
  const hideKeyboardIfNeeded = (0, _react.useCallback)(() => {
    var _searchInputRef$curre;
    return searchInputRef === null || searchInputRef === void 0 || (_searchInputRef$curre = searchInputRef.current) === null || _searchInputRef$curre === void 0 ? void 0 : _searchInputRef$curre.blur();
  }, [searchInputRef]);
  const resolveOption = (0, _react.useCallback)((option, optionIndex) => {
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
    const resolvedOptionsData = isSectionedOptions ? (0, _helpers.getReducedSectionData)(optionsData) : optionsData;
    const optionsIndexes = mergedOptions.map(item => resolvedOptionsData.findIndex(({
      value
    }) => value === item.value)).filter(item => item !== null);
    return {
      selectedOption: mergedOptions,
      selectedOptionIndex: optionsIndexes.length > 0 ? [...optionsIndexes] : -1
    };
  }, [isSectionedOptions, multiple, optionsData, selectedOptionIndex, selectedOptions]);
  const onPressOption = (0, _react.useCallback)((option, optionIndex) => {
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
        onSectionRemove === null || onSectionRemove === void 0 || onSectionRemove(formattedSectionOptions, (0, _helpers.getSectionOptionsIndexes)(optionsData, formattedSectionOptions));
        const restOptions = selectedOptions.filter(item => !formattedSectionOptions.some(selected => selected.value === item.value));
        return {
          selectedOption: restOptions.length > 0 ? restOptions : null,
          selectedOptionIndex: restOptions ? (0, _helpers.getSectionOptionsIndexes)(optionsData, restOptions) : -1
        };
      }
      const mergedOptions = selectedOptions ? selectedOptions.concat(newSectionOptions) : newSectionOptions;
      const optionsIndexes = (0, _helpers.getSectionOptionsIndexes)(optionsData, mergedOptions);
      onSectionSelect === null || onSectionSelect === void 0 || onSectionSelect(newSectionOptions, (0, _helpers.getSectionOptionsIndexes)(optionsData, newSectionOptions));
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
exports.useSelect = useSelect;
//# sourceMappingURL=select.hooks.js.map