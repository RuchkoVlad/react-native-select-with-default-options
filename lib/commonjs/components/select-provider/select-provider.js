"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectProvider = exports.SelectModalProvider = exports.SelectModalContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _portal = require("@gorhom/portal");
var _constants = require("../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PortalHosts = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_portal.PortalHost, {
    name: _constants.Portals.Backdrop
  }), /*#__PURE__*/_react.default.createElement(_portal.PortalHost, {
    name: _constants.Portals.OptionsList
  }));
};
const SelectProvider = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_portal.PortalProvider, null, children, /*#__PURE__*/_react.default.createElement(PortalHosts, null));
};
exports.SelectProvider = SelectProvider;
const SelectModalContext = exports.SelectModalContext = /*#__PURE__*/(0, _react.createContext)(0);
const SelectModalProvider = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(SelectModalContext.Provider, {
    value: _constants.APPROX_STATUSBAR_HEIGHT
  }, /*#__PURE__*/_react.default.createElement(PortalHosts, null), children);
};
exports.SelectModalProvider = SelectModalProvider;
//# sourceMappingURL=select-provider.js.map