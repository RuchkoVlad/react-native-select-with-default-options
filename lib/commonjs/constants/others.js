"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APPROX_STATUSBAR_HEIGHT = void 0;
var _reactNative = require("react-native");
var _NativeModules$Native;
// based on: https://github.com/callstack/react-native-paper/blob/main/src/constants.tsx
const statusBarHeight = ((_NativeModules$Native = _reactNative.NativeModules.NativeUnimoduleProxy) === null || _NativeModules$Native === void 0 || (_NativeModules$Native = _NativeModules$Native.modulesConstants) === null || _NativeModules$Native === void 0 || (_NativeModules$Native = _NativeModules$Native.ExponentConstants) === null || _NativeModules$Native === void 0 ? void 0 : _NativeModules$Native.statusBarHeight) ?? 0;
const APPROX_STATUSBAR_HEIGHT = exports.APPROX_STATUSBAR_HEIGHT = _reactNative.Platform.select({
  android: statusBarHeight,
  ios: _reactNative.Platform.Version < 11 ? statusBarHeight : 0
});
//# sourceMappingURL=others.js.map