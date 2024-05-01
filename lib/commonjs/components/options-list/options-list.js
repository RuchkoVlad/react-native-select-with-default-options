"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../../helpers");
var _types = require("../../types");
var _flatOptionsList = require("../flat-options-list");
var _option = require("../option");
var _optionsListWrapper = require("../options-list-wrapper");
var _sectionOptionsList = require("../section-options-list");
var _optionsList = require("./options-list.hooks");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const OptionsList = exports.OptionsList = /*#__PURE__*/(0, _react.forwardRef)((_, optionsListRef) => {
  const {
    getItemLayout,
    measuredRef,
    findSelectedOption,
    findSelectedOptionIndex,
    resolvedData,
    scrollToSelectedOption,
    sectionListProps,
    flatListProps,
    selectedOption,
    optionCustomStyles,
    initialScrollIndex,
    accessibilityState,
    disabled,
    onPressOption,
    optionButtonProps,
    optionTextProps,
    isDisabledResolveOption
  } = (0, _optionsList.useOptionsList)();
  const isSectionedOptions = (0, _types.isSectionOptionsType)(resolvedData);
  const renderSection = (0, _react.useCallback)(({
    item,
    index,
    section
  }) => {
    const data = resolvedData;
    const {
      value
    } = item;
    const isSelected = findSelectedOption(item);
    const sectionTitle = section === null || section === void 0 ? void 0 : section.title;
    const optionIndex = (0, _helpers.getReducedSectionData)(data).indexOf(item);
    const sectionObject = {
      title: sectionTitle,
      index: data.findIndex(el => el.title === sectionTitle)
    };
    const isDisabledOption = isDisabledResolveOption(isSelected);
    const sectionItem = {
      ...item,
      section: sectionObject
    };
    return /*#__PURE__*/_react.default.createElement(_option.Option, {
      key: value,
      ref: index === 0 ? measuredRef : undefined,
      option: sectionItem,
      isSelected: isSelected,
      optionIndex: optionIndex,
      overrideWithDisabledStyle: !!disabled,
      optionButtonProps: optionButtonProps,
      optionTextProps: optionTextProps,
      optionCustomStyles: optionCustomStyles,
      isDisabled: isDisabledOption,
      onPressOption: onPressOption
    });
  }, [disabled, findSelectedOption, isDisabledResolveOption, measuredRef, onPressOption, optionButtonProps, optionCustomStyles, optionTextProps, resolvedData]);
  const renderFlatItem = (0, _react.useCallback)(({
    item,
    index
  }) => {
    const {
      value
    } = item;
    const isSelected = findSelectedOption(item);
    const optionIndex = findSelectedOptionIndex(item) ?? index;
    const isDisabledOption = isDisabledResolveOption(isSelected);
    return /*#__PURE__*/_react.default.createElement(_option.Option, {
      key: value,
      ref: index === 0 ? measuredRef : undefined,
      option: item,
      isSelected: isSelected,
      optionIndex: optionIndex,
      overrideWithDisabledStyle: !!disabled,
      optionButtonProps: optionButtonProps,
      optionTextProps: optionTextProps,
      optionCustomStyles: optionCustomStyles,
      isDisabled: isDisabledOption,
      onPressOption: onPressOption
    });
  }, [disabled, findSelectedOption, findSelectedOptionIndex, isDisabledResolveOption, measuredRef, onPressOption, optionButtonProps, optionCustomStyles, optionTextProps]);
  return /*#__PURE__*/_react.default.createElement(_optionsListWrapper.OptionsListWrapper, {
    ref: optionsListRef
  }, isSectionedOptions ? /*#__PURE__*/_react.default.createElement(_sectionOptionsList.SectionOptionsList, {
    resolvedData: resolvedData,
    getItemLayout: getItemLayout,
    renderItem: renderSection,
    accessibilityState: accessibilityState,
    selectedOption: selectedOption,
    scrollToSelectedOption: scrollToSelectedOption,
    sectionListProps: sectionListProps,
    disabled: disabled
  }) : /*#__PURE__*/_react.default.createElement(_flatOptionsList.FlatOptionsList, {
    initialScrollIndex: initialScrollIndex,
    getItemLayout: getItemLayout,
    renderItem: renderFlatItem,
    accessibilityState: accessibilityState,
    resolvedData: resolvedData,
    flatListProps: flatListProps,
    disabled: disabled
  }));
});
OptionsList.displayName = 'OptionsList';
//# sourceMappingURL=options-list.js.map