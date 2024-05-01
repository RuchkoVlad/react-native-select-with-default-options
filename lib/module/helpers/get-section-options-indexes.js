import { getReducedSectionData } from './get-reduced-section-data';
export const getSectionOptionsIndexes = (data, options) => options.map(item => getReducedSectionData(data).findIndex(({
  value
}) => value === item.value)).filter(item => item !== null);
//# sourceMappingURL=get-section-options-indexes.js.map