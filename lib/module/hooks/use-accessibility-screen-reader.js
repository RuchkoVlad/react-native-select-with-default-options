import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';
import { ERRORS, isAndroid, logError } from '../helpers';
export const useAccessibilityScreenReader = () => {
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  useEffect(() => {
    if (isAndroid) {
      return;
    }
    let subscription = null;
    void (async () => {
      try {
        await AccessibilityInfo.isScreenReaderEnabled();
      } catch {
        logError(ERRORS.SCREEN_READER_ERROR);
      }
      subscription = AccessibilityInfo.addEventListener('change', e => {
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
//# sourceMappingURL=use-accessibility-screen-reader.js.map