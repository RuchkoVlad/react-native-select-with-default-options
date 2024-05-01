"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionOptionsList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));
var _reactNative = require("react-native");
var _helpers = require("../../helpers");
var _getSectionLocation = require("../../helpers/get-section-location");
var _noOptions = require("../no-options");
var _sectionHeader = require("../section-header");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SectionOptionsList = exports.SectionOptionsList = /*#__PURE__*/(0, _react.memo)(({
  resolvedData,
  getItemLayout,
  renderItem,
  accessibilityState,
  selectedOption,
  scrollToSelectedOption,
  sectionListProps,
  disabled
}) => {
  const sectionOptionsListRef = (0, _react.useRef)(null);
  const renderSectionHeader = info => {
    const isSelected = (0, _helpers.isSectionSelected)({
      title: info.section.title,
      selectedOptions: selectedOption,
      sectionData: resolvedData
    });
    return /*#__PURE__*/_react.default.createElement(_sectionHeader.SectionHeader, {
      title: info.section.title,
      isSelected: isSelected
    });
  };
  const scrollToIndex = () => {
    if (sectionOptionsListRef.current) {
      try {
        sectionOptionsListRef.current.scrollToLocation({
          ...(0, _getSectionLocation.getSectionLocation)({
            data: resolvedData,
            selectedOption,
            scrollToSelectedOption
          }),
          animated: false
        });
      } catch {
        (0, _helpers.logError)(_helpers.ERRORS.SCROLL_TO_LOCATION);
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.SectionList, _extends({
    testID: "Options list",
    accessibilityLabel: "Options list",
    accessibilityState: accessibilityState,
    bounces: false,
    keyboardShouldPersistTaps: "handled",
    persistentScrollbar: true,
    ListEmptyComponent: /*#__PURE__*/_react.default.createElement(_noOptions.NoOptions, null),
    scrollEnabled: !disabled
  }, sectionListProps, {
    ref: sectionOptionsListRef,
    renderSectionHeader: renderSectionHeader,
    sections: resolvedData,
    getItemLayout: getItemLayout,
    renderItem: renderItem,
    keyExtractor: ({
      value
    }) => value,
    onLayout: scrollToIndex
  }));
}, _reactFastCompare.default);
SectionOptionsList.displayName = 'SectionOptionsList';
//# sourceMappingURL=section-options-list.js.map