export const isSectionSelected = ({
  title,
  selectedOptions,
  sectionData
}) => {
  var _sectionData$find;
  return Array.isArray(selectedOptions) && ((_sectionData$find = sectionData.find(item => item.title === title)) === null || _sectionData$find === void 0 ? void 0 : _sectionData$find.data.filter(item => !selectedOptions.some(selected => selected.value === item.value)).length) === 0;
};
//# sourceMappingURL=is-section-selected.js.map