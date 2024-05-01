"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatOptionsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));
var _reactNative = require("react-native");
var _helpers = require("../../helpers");
var _noOptions = require("../no-options");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FlatOptionsList = exports.FlatOptionsList = /*#__PURE__*/(0, _react.memo)(({
  renderItem,
  getItemLayout,
  resolvedData,
  flatListProps,
  initialScrollIndex,
  accessibilityState,
  disabled
}) => {
  const flatListRef = (0, _react.useRef)(null);
  const scrollToIndex = () => {
    if (flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({
          animated: false,
          index: initialScrollIndex === -1 ? 0 : initialScrollIndex
        });
      } catch {
        (0, _helpers.logError)(_helpers.ERRORS.SCROLL_TO_LOCATION);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, _extends({
    testID: "Options list",
    accessibilityLabel: "Options list",
    accessibilityState: accessibilityState,
    bounces: false,
    keyboardShouldPersistTaps: "handled",
    persistentScrollbar: true,
    ListEmptyComponent: /*#__PURE__*/_react.default.createElement(_noOptions.NoOptions, null),
    scrollEnabled: !disabled
  }, flatListProps, {
    data: resolvedData,
    getItemLayout: getItemLayout,
    renderItem: renderItem,
    keyExtractor: ({
      value
    }) => value,
    onLayout: scrollToIndex
  }));
}, _reactFastCompare.default);
FlatOptionsList.displayName = 'FlatOptionsList';
//# sourceMappingURL=flat-options-list.js.map