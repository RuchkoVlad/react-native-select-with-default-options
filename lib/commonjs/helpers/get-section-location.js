"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionLocation = void 0;
const getSectionLocation = ({
  data,
  selectedOption,
  scrollToSelectedOption
}) => {
  let indexes = {
    sectionIndex: 0,
    itemIndex: 0
  };
  if (scrollToSelectedOption && selectedOption && 'section' in selectedOption) {
    const {
      value,
      section
    } = selectedOption;
    const sectionItem = data.find(item => item.title === (section === null || section === void 0 ? void 0 : section.title));
    if (sectionItem) {
      indexes = {
        sectionIndex: data.findIndex(item => item.title === sectionItem.title),
        itemIndex: sectionItem === null || sectionItem === void 0 ? void 0 : sectionItem.data.findIndex(item => item.value === value)
      };
    }
  }
  return indexes;
};
exports.getSectionLocation = getSectionLocation;
//# sourceMappingURL=get-section-location.js.map