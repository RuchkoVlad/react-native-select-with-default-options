"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _multiSelectedOption = require("../multi-selected-option");
var _selectInput = require("../select-input");
var _selectText = require("../select-text");
var _multiSelect = require("./multi-select.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MultiSelect = ({
  selectedOptions
}) => {
  const {
    calculatedOptionWidth,
    onPressRemove,
    multiSelectedCustomStyles,
    disabled,
    isSearchable
  } = (0, _multiSelect.useMultiSelect)({
    selectedOptions
  });
  const resolveSelectedOptionsList = () => {
    if (!selectedOptions) {
      return isSearchable ? null : /*#__PURE__*/_react.default.createElement(_selectText.SelectText, null);
    }
    return selectedOptions.map(option => /*#__PURE__*/_react.default.createElement(_multiSelectedOption.MultiSelectedOption, {
      key: `${option.section}-${option.value}`,
      optionWidth: calculatedOptionWidth,
      option: option,
      multiSelectedCustomStyles: multiSelectedCustomStyles,
      disabled: disabled,
      onPressRemove: onPressRemove
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    scrollEnabled: !disabled,
    style: styles.container,
    horizontal: true
  }, isSearchable && /*#__PURE__*/_react.default.createElement(_selectInput.SelectInput, null), resolveSelectedOptionsList());
};
exports.MultiSelect = MultiSelect;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=multi-select.js.map