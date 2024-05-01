"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _sectionHeader = require("./section-header.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const iconSource = require('./../../assets/icons/x.png');
const SectionHeader = ({
  title,
  isSelected
}) => {
  var _sectionHeaderCustomS2, _sectionHeaderCustomS3;
  const {
    sectionHeaderCustomStyles,
    onPressSection,
    sectionHeaderButtonProps,
    sectionHeaderTextProps,
    sectionHeaderImageProps,
    isDisabled
  } = (0, _sectionHeader.useSectionHeader)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
    disabled: isDisabled,
    accessibilityState: {
      disabled: isDisabled
    }
  }, sectionHeaderButtonProps, {
    style: ({
      pressed
    }) => {
      var _sectionHeaderCustomS;
      return [styles.sectionHeaderContainerStyle, sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 ? void 0 : sectionHeaderCustomStyles.container, isSelected && (sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 || (_sectionHeaderCustomS = sectionHeaderCustomStyles.selected) === null || _sectionHeaderCustomS === void 0 ? void 0 : _sectionHeaderCustomS.container), pressed && ((sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 ? void 0 : sectionHeaderCustomStyles.pressed) ?? _constants.PRESSED_STYLE)];
    },
    onPress: () => onPressSection(title)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({}, sectionHeaderTextProps, {
    style: [styles.sectionHeaderTextStyle, sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 ? void 0 : sectionHeaderCustomStyles.text, isSelected && (sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 || (_sectionHeaderCustomS2 = sectionHeaderCustomStyles.selected) === null || _sectionHeaderCustomS2 === void 0 ? void 0 : _sectionHeaderCustomS2.text)]
  }), title), isSelected && /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({
    source: iconSource
  }, sectionHeaderImageProps, {
    style: [styles.xIcon, sectionHeaderCustomStyles === null || sectionHeaderCustomStyles === void 0 || (_sectionHeaderCustomS3 = sectionHeaderCustomStyles.clear) === null || _sectionHeaderCustomS3 === void 0 ? void 0 : _sectionHeaderCustomS3.icon]
  })));
};
exports.SectionHeader = SectionHeader;
const styles = _reactNative.StyleSheet.create({
  sectionHeaderTextStyle: {
    fontSize: _constants.FONT_SIZE,
    color: _constants.COLORS.BLACK,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  sectionHeaderContainerStyle: {
    padding: _constants.PADDING,
    backgroundColor: _constants.COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  xIcon: {
    width: 16,
    height: 16
  }
});
//# sourceMappingURL=section-header.js.map