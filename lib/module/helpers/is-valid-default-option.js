export const isValidDefaultOption = defaultOption => {
  if (!defaultOption) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(defaultOption, 'value') && Object.prototype.hasOwnProperty.call(defaultOption, 'label');
};
//# sourceMappingURL=is-valid-default-option.js.map