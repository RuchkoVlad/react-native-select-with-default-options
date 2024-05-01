import React, { createContext } from 'react';
import { PortalHost, PortalProvider } from '@gorhom/portal';
import { APPROX_STATUSBAR_HEIGHT, Portals } from '../../constants';
const PortalHosts = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PortalHost, {
    name: Portals.Backdrop
  }), /*#__PURE__*/React.createElement(PortalHost, {
    name: Portals.OptionsList
  }));
};
export const SelectProvider = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(PortalProvider, null, children, /*#__PURE__*/React.createElement(PortalHosts, null));
};
export const SelectModalContext = /*#__PURE__*/createContext(0);
export const SelectModalProvider = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(SelectModalContext.Provider, {
    value: APPROX_STATUSBAR_HEIGHT
  }, /*#__PURE__*/React.createElement(PortalHosts, null), children);
};
//# sourceMappingURL=select-provider.js.map