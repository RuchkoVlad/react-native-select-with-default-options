import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { MultiSelectedOption } from '../multi-selected-option';
import { SelectInput } from '../select-input';
import { SelectText } from '../select-text';
import { useMultiSelect } from './multi-select.hooks';
export const MultiSelect = ({
  selectedOptions
}) => {
  const {
    calculatedOptionWidth,
    onPressRemove,
    multiSelectedCustomStyles,
    disabled,
    isSearchable
  } = useMultiSelect({
    selectedOptions
  });
  const resolveSelectedOptionsList = () => {
    if (!selectedOptions) {
      return isSearchable ? null : /*#__PURE__*/React.createElement(SelectText, null);
    }
    return selectedOptions.map(option => /*#__PURE__*/React.createElement(MultiSelectedOption, {
      key: `${option.section}-${option.value}`,
      optionWidth: calculatedOptionWidth,
      option: option,
      multiSelectedCustomStyles: multiSelectedCustomStyles,
      disabled: disabled,
      onPressRemove: onPressRemove
    }));
  };
  return /*#__PURE__*/React.createElement(ScrollView, {
    scrollEnabled: !disabled,
    style: styles.container,
    horizontal: true
  }, isSearchable && /*#__PURE__*/React.createElement(SelectInput, null), resolveSelectedOptionsList());
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=multi-select.js.map