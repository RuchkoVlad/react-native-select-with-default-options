var _NativeModules$Native;
import { NativeModules, Platform } from 'react-native';

// based on: https://github.com/callstack/react-native-paper/blob/main/src/constants.tsx
const statusBarHeight = ((_NativeModules$Native = NativeModules.NativeUnimoduleProxy) === null || _NativeModules$Native === void 0 || (_NativeModules$Native = _NativeModules$Native.modulesConstants) === null || _NativeModules$Native === void 0 || (_NativeModules$Native = _NativeModules$Native.ExponentConstants) === null || _NativeModules$Native === void 0 ? void 0 : _NativeModules$Native.statusBarHeight) ?? 0;
export const APPROX_STATUSBAR_HEIGHT = Platform.select({
  android: statusBarHeight,
  ios: Platform.Version < 11 ? statusBarHeight : 0
});
//# sourceMappingURL=others.js.map