export const searchNormalize = (regex, label) => {
  const lowerCaseLabel = label.toLowerCase();
  const normalizedLabel = lowerCaseLabel.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
  return regex.test(lowerCaseLabel) || regex.test(normalizedLabel);
};
//# sourceMappingURL=search-normalize.js.map