export const selectedOptionResolver = selectedOption => {
  if (!selectedOption) {
    return {
      selectedOptionValue: '',
      selectedOptionLabel: '',
      selectedOptions: null
    };
  }
  if (Array.isArray(selectedOption)) {
    return {
      selectedOptionValue: '',
      selectedOptionLabel: '',
      selectedOptions: selectedOption
    };
  }
  return {
    selectedOptionValue: selectedOption.value,
    selectedOptionLabel: selectedOption.label,
    selectedOptions: null
  };
};
//# sourceMappingURL=selected-option-resolver.js.map