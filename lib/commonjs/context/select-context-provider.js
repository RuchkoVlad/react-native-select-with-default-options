"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectContext = exports.SelectContextProvider = void 0;
var _react = require("react");
const createSafeContext = () => {
  const context = /*#__PURE__*/(0, _react.createContext)(undefined);
  const useHookContext = () => {
    const value = (0, _react.useContext)(context);
    if (value === undefined) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return value;
  };
  return [useHookContext, context.Provider];
};
const [useSelectContext, SelectContextProvider] = createSafeContext();
exports.SelectContextProvider = SelectContextProvider;
exports.useSelectContext = useSelectContext;
//# sourceMappingURL=select-context-provider.js.map