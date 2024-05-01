"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionPercentageToDP = void 0;
var _reactNative = require("react-native");
const dimensionPercentageToDP = (dimensionPercentage, screenDimension) => {
  if (dimensionPercentage.length >= 2 && dimensionPercentage.endsWith('%')) {
    const numPercentage = Number(dimensionPercentage.slice(0, -1));
    if (numPercentage) {
      return _reactNative.PixelRatio.roundToNearestPixel(screenDimension * numPercentage / 100);
    }
  }
  return 0;
};
exports.dimensionPercentageToDP = dimensionPercentageToDP;
//# sourceMappingURL=dimension-percentage-to-dp.js.map