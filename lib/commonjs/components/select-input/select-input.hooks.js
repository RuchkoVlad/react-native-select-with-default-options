"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectInput = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _context = require("../../context");
const useSelectInput = () => {
  const searchInputRef = (0, _react.useRef)(null);
  const {
    isOpened,
    disabled,
    multiple,
    placeholderText,
    placeholderTextColor,
    searchPattern,
    searchValue,
    onPressSelectControl,
    selectInputProps,
    dispatch,
    setOptionsListPosition,
    onSelectChangeText,
    styles,
    selectedOption
  } = (0, _context.useSelectContext)();
  const {
    select: selectStyles
  } = styles ?? {};
  const {
    text: textCustomStyles
  } = selectStyles ?? {};
  (0, _react.useEffect)(() => {
    const showSubscription = _reactNative.Keyboard.addListener('keyboardDidShow', async () => {
      await setOptionsListPosition();
    });
    const hideSubscription = _reactNative.Keyboard.addListener('keyboardDidHide', async () => {
      await setOptionsListPosition();
    });
    dispatch({
      type: 'setSearchInputRef',
      payload: searchInputRef
    });
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      dispatch({
        type: 'setSearchInputRef',
        payload: null
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onChangeText = payload => {
    if (disabled) {
      return;
    }
    if (!isOpened) {
      dispatch({
        type: 'open'
      });
    }
    dispatch({
      type: 'setSearchValue',
      payload
    });
    if (searchPattern) {
      dispatch({
        type: 'searchOptions',
        searchPattern,
        payload
      });
    }
    // callback

    onSelectChangeText === null || onSelectChangeText === void 0 || onSelectChangeText(payload);
  };
  const resolvePlaceholder = () => {
    if (multiple && Array.isArray(selectedOption) && selectedOption.length > 0) {
      return '  ';
    }
    return placeholderText;
  };
  const resolvedPlaceholder = resolvePlaceholder();
  return {
    disabled,
    multiple,
    placeholderTextColor,
    searchValue,
    onPressSelectControl,
    selectInputProps,
    textCustomStyles,
    searchInputRef,
    resolvedPlaceholder,
    onChangeText
  };
};
exports.useSelectInput = useSelectInput;
//# sourceMappingURL=select-input.hooks.js.map