"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducedSectionData = void 0;
const getReducedSectionData = data => data.reduce((prev, current) => [...prev, ...current.data], []);
exports.getReducedSectionData = getReducedSectionData;
//# sourceMappingURL=get-reduced-section-data.js.map