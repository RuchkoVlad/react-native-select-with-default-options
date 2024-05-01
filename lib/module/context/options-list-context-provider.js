import { createContext, useContext } from 'react';
const createSafeContext = () => {
  const context = /*#__PURE__*/createContext(undefined);
  const useHookContext = () => {
    const value = useContext(context);
    if (value === undefined) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return value;
  };
  return [useHookContext, context.Provider];
};
export const [useOptionsListContext, OptionsListContextProvider] = createSafeContext();
//# sourceMappingURL=options-list-context-provider.js.map