"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedOptionResolver = void 0;
const selectedOptionResolver = selectedOption => {
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
exports.selectedOptionResolver = selectedOptionResolver;
//# sourceMappingURL=selected-option-resolver.js.map