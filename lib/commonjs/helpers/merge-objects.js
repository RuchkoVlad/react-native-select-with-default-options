"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeObjects = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeObjects = (a, b) => {
  if (!b) {
    return a;
  }
  const result = {};
  for (const key in a) {
    if (key in b) {
      if (typeof a[key] === 'object' && typeof b[key] === 'object') {
        result[key] = mergeObjects(a[key], b[key]);
      } else {
        result[key] = b[key];
      }
    } else {
      result[key] = a[key];
    }
  }
  for (const key in b) {
    if (!(key in result)) {
      result[key] = b[key];
    }
  }
  return result;
};
exports.mergeObjects = mergeObjects;
//# sourceMappingURL=merge-objects.js.map