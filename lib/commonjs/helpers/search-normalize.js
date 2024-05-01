"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchNormalize = void 0;
const searchNormalize = (regex, label) => {
  const lowerCaseLabel = label.toLowerCase();
  const normalizedLabel = lowerCaseLabel.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
  return regex.test(lowerCaseLabel) || regex.test(normalizedLabel);
};
exports.searchNormalize = searchNormalize;
//# sourceMappingURL=search-normalize.js.map