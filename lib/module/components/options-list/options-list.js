import React, { forwardRef, useCallback } from 'react';
import { getReducedSectionData } from '../../helpers';
import { isSectionOptionsType } from '../../types';
import { FlatOptionsList } from '../flat-options-list';
import { Option } from '../option';
import { OptionsListWrapper } from '../options-list-wrapper';
import { SectionOptionsList } from '../section-options-list';
import { useOptionsList } from './options-list.hooks';
export const OptionsList = /*#__PURE__*/forwardRef((_, optionsListRef) => {
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
  } = useOptionsList();
  const isSectionedOptions = isSectionOptionsType(resolvedData);
  const renderSection = useCallback(({
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
    const optionIndex = getReducedSectionData(data).indexOf(item);
    const sectionObject = {
      title: sectionTitle,
      index: data.findIndex(el => el.title === sectionTitle)
    };
    const isDisabledOption = isDisabledResolveOption(isSelected);
    const sectionItem = {
      ...item,
      section: sectionObject
    };
    return /*#__PURE__*/React.createElement(Option, {
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
  const renderFlatItem = useCallback(({
    item,
    index
  }) => {
    const {
      value
    } = item;
    const isSelected = findSelectedOption(item);
    const optionIndex = findSelectedOptionIndex(item) ?? index;
    const isDisabledOption = isDisabledResolveOption(isSelected);
    return /*#__PURE__*/React.createElement(Option, {
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
  return /*#__PURE__*/React.createElement(OptionsListWrapper, {
    ref: optionsListRef
  }, isSectionedOptions ? /*#__PURE__*/React.createElement(SectionOptionsList, {
    resolvedData: resolvedData,
    getItemLayout: getItemLayout,
    renderItem: renderSection,
    accessibilityState: accessibilityState,
    selectedOption: selectedOption,
    scrollToSelectedOption: scrollToSelectedOption,
    sectionListProps: sectionListProps,
    disabled: disabled
  }) : /*#__PURE__*/React.createElement(FlatOptionsList, {
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