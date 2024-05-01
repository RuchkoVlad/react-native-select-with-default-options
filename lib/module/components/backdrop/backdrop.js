function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
export const Backdrop = ({
  onOutsidePress,
  backdropCustomStyles,
  backdropProps,
  backdropChildProps
}) => {
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, _extends({
    accessibilityLabel: "Close a dropdown from outside",
    accessibilityRole: "button"
  }, backdropProps, {
    onPress: onOutsidePress
  }), /*#__PURE__*/React.createElement(View, _extends({}, backdropChildProps, {
    style: [styles.modalOverlay, backdropCustomStyles]
  })));
};
const styles = StyleSheet.create({
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1
  }
});
//# sourceMappingURL=backdrop.js.map