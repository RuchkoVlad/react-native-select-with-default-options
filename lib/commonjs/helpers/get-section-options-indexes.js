"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSectionOptionsIndexes = void 0;
var _getReducedSectionData = require("./get-reduced-section-data");
const getSectionOptionsIndexes = (data, options) => options.map(item => (0, _getReducedSectionData.getReducedSectionData)(data).findIndex(({
  value
}) => value === item.value)).filter(item => item !== null);
exports.getSectionOptionsIndexes = getSectionOptionsIndexes;
//# sourceMappingURL=get-section-options-indexes.js.map