import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MultiSelect } from '../multi-select';
import { SelectInput } from '../select-input';
import { SelectText } from '../select-text';
import { useSelectFieldType } from './select-field-type.hooks';
export const SelectFieldType = () => {
  const {
    multiple,
    selectedOptions,
    selectedOptionLabel,
    isSearchable
  } = useSelectFieldType();
  const renderSelectFieldType = () => {
    if (multiple) {
      return /*#__PURE__*/React.createElement(MultiSelect, {
        selectedOptions: selectedOptions
      });
    }
    if (isSearchable) {
      return /*#__PURE__*/React.createElement(SelectInput, null);
    }
    return /*#__PURE__*/React.createElement(SelectText, {
      selectedOptionLabel: selectedOptionLabel
    });
  };
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, renderSelectFieldType());
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=select-field-type.js.map