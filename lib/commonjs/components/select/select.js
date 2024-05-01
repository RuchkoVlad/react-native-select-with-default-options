"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _portal = require("@gorhom/portal");
var _constants = require("../../constants");
var _context = require("../../context");
var _helpers = require("../../helpers");
var _state = require("../../state");
var _themes = require("../../themes");
var _backdrop = require("../backdrop");
var _optionsList = require("../options-list");
var _selectControl = require("../select-control");
var _select = require("./select.hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
if (_helpers.isAndroid && _reactNative.UIManager.setLayoutAnimationEnabledExperimental) {
  _reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
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
    placeholderTextColor = _constants.COLORS.GRAY,
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
  const [state, dispatch] = (0, _react.useReducer)(_state.reducer, {
    options,
    searchable,
    animation,
    defaultOption
  }, _state.createInitialState);
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
  const mainStyles = (0, _helpers.mergeObjects)(_themes.themes[theme], customStyles);
  const selectControlRef = (0, _react.useRef)(null);
  const optionsListRef = (0, _react.useRef)(null);
  const {
    setOptionsListPosition,
    onPressOption,
    onOutsidePress,
    onPressSelectControl,
    onPressSection
  } = (0, _select.useSelect)({
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.relative
  }, /*#__PURE__*/_react.default.createElement(_context.SelectContextProvider, {
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
  }, /*#__PURE__*/_react.default.createElement(_selectControl.SelectControl, {
    ref: selectControlRef
  })), isOpened && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hasBackdrop && /*#__PURE__*/_react.default.createElement(_portal.Portal, {
    hostName: _constants.Portals.Backdrop
  }, /*#__PURE__*/_react.default.createElement(_backdrop.Backdrop, {
    backdropCustomStyles: mainStyles === null || mainStyles === void 0 ? void 0 : mainStyles.backdrop,
    backdropProps: backdropProps,
    backdropChildProps: backdropChildProps,
    onOutsidePress: onOutsidePress
  })), /*#__PURE__*/_react.default.createElement(_portal.Portal, {
    hostName: _constants.Portals.OptionsList
  }, /*#__PURE__*/_react.default.createElement(_context.OptionsListContextProvider, {
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
  }, /*#__PURE__*/_react.default.createElement(_optionsList.OptionsList, {
    ref: optionsListRef
  })))));
};
const styles = _reactNative.StyleSheet.create({
  relative: {
    position: 'relative'
  }
});
const Select = exports.Select = /*#__PURE__*/(0, _react.forwardRef)(SelectComponent);
//# sourceMappingURL=select.js.map