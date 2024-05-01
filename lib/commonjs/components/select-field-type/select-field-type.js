"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectFieldType = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _multiSelect = require("../multi-select");
var _selectInput = require("../select-input");
var _selectText = require("../select-text");
var _selectFieldType = require("./select-field-type.hooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SelectFieldType = () => {
  const {
    multiple,
    selectedOptions,
    selectedOptionLabel,
    isSearchable
  } = (0, _selectFieldType.useSelectFieldType)();
  const renderSelectFieldType = () => {
    if (multiple) {
      return /*#__PURE__*/_react.default.createElement(_multiSelect.MultiSelect, {
        selectedOptions: selectedOptions
      });
    }
    if (isSearchable) {
      return /*#__PURE__*/_react.default.createElement(_selectInput.SelectInput, null);
    }
    return /*#__PURE__*/_react.default.createElement(_selectText.SelectText, {
      selectedOptionLabel: selectedOptionLabel
    });
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, renderSelectFieldType());
};
exports.SelectFieldType = SelectFieldType;
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=select-field-type.js.map