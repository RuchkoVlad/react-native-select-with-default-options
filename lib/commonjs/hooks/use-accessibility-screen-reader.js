"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAccessibilityScreenReader = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _helpers = require("../helpers");
const useAccessibilityScreenReader = () => {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (_helpers.isAndroid) {
      return;
    }
    let subscription = null;
    void (async () => {
      try {
        await _reactNative.AccessibilityInfo.isScreenReaderEnabled();
      } catch {
        (0, _helpers.logError)(_helpers.ERRORS.SCREEN_READER_ERROR);
      }
      subscription = _reactNative.AccessibilityInfo.addEventListener('change', e => {
        setIsScreenReaderEnabled(e);
      });
    })();
    return () => {
      var _subscription;
      (_subscription = subscription) === null || _subscription === void 0 || _subscription.remove();
    };
  }, []);
  return isScreenReaderEnabled;
};
exports.useAccessibilityScreenReader = useAccessibilityScreenReader;
//# sourceMappingURL=use-accessibility-screen-reader.js.map