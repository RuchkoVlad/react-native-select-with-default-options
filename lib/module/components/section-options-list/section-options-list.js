function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, useRef } from 'react';
import isEqual from 'react-fast-compare';
import { SectionList } from 'react-native';
import { ERRORS, isSectionSelected, logError } from '../../helpers';
import { getSectionLocation } from '../../helpers/get-section-location';
import { NoOptions } from '../no-options';
import { SectionHeader } from '../section-header';
export const SectionOptionsList = /*#__PURE__*/memo(({
  resolvedData,
  getItemLayout,
  renderItem,
  accessibilityState,
  selectedOption,
  scrollToSelectedOption,
  sectionListProps,
  disabled
}) => {
  const sectionOptionsListRef = useRef(null);
  const renderSectionHeader = info => {
    const isSelected = isSectionSelected({
      title: info.section.title,
      selectedOptions: selectedOption,
      sectionData: resolvedData
    });
    return /*#__PURE__*/React.createElement(SectionHeader, {
      title: info.section.title,
      isSelected: isSelected
    });
  };
  const scrollToIndex = () => {
    if (sectionOptionsListRef.current) {
      try {
        sectionOptionsListRef.current.scrollToLocation({
          ...getSectionLocation({
            data: resolvedData,
            selectedOption,
            scrollToSelectedOption
          }),
          animated: false
        });
      } catch {
        logError(ERRORS.SCROLL_TO_LOCATION);
      }
    }
  };
  return /*#__PURE__*/React.createElement(SectionList, _extends({
    testID: "Options list",
    accessibilityLabel: "Options list",
    accessibilityState: accessibilityState,
    bounces: false,
    keyboardShouldPersistTaps: "handled",
    persistentScrollbar: true,
    ListEmptyComponent: /*#__PURE__*/React.createElement(NoOptions, null),
    scrollEnabled: !disabled
  }, sectionListProps, {
    ref: sectionOptionsListRef,
    renderSectionHeader: renderSectionHeader,
    sections: resolvedData,
    getItemLayout: getItemLayout,
    renderItem: renderItem,
    keyExtractor: ({
      value
    }) => value,
    onLayout: scrollToIndex
  }));
}, isEqual);
SectionOptionsList.displayName = 'SectionOptionsList';
//# sourceMappingURL=section-options-list.js.map