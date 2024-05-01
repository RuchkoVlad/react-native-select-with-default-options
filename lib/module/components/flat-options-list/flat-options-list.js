function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { memo, useRef } from 'react';
import isEqual from 'react-fast-compare';
import { FlatList } from 'react-native';
import { ERRORS, logError } from '../../helpers';
import { NoOptions } from '../no-options';
export const FlatOptionsList = /*#__PURE__*/memo(({
  renderItem,
  getItemLayout,
  resolvedData,
  flatListProps,
  initialScrollIndex,
  accessibilityState,
  disabled
}) => {
  const flatListRef = useRef(null);
  const scrollToIndex = () => {
    if (flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({
          animated: false,
          index: initialScrollIndex === -1 ? 0 : initialScrollIndex
        });
      } catch {
        logError(ERRORS.SCROLL_TO_LOCATION);
      }
    }
  };
  return /*#__PURE__*/React.createElement(FlatList, _extends({
    testID: "Options list",
    accessibilityLabel: "Options list",
    accessibilityState: accessibilityState,
    bounces: false,
    keyboardShouldPersistTaps: "handled",
    persistentScrollbar: true,
    ListEmptyComponent: /*#__PURE__*/React.createElement(NoOptions, null),
    scrollEnabled: !disabled
  }, flatListProps, {
    data: resolvedData,
    getItemLayout: getItemLayout,
    renderItem: renderItem,
    keyExtractor: ({
      value
    }) => value,
    onLayout: scrollToIndex
  }));
}, isEqual);
FlatOptionsList.displayName = 'FlatOptionsList';
//# sourceMappingURL=flat-options-list.js.map