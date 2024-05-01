"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.createInitialState = void 0;
var _reactNative = require("react-native");
var _constants = require("../constants");
var _helpers = require("../helpers");
var _types = require("../types");
const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      if (state.searchValue !== null) {
        var _state$searchInputRef;
        (_state$searchInputRef = state.searchInputRef) === null || _state$searchInputRef === void 0 || (_state$searchInputRef = _state$searchInputRef.current) === null || _state$searchInputRef === void 0 || _state$searchInputRef.focus();
      }
      return {
        ...state,
        isOpened: true
      };
    case 'close':
      state.animationDuration > 0 && _reactNative.LayoutAnimation.configureNext({
        duration: state.animationDuration
      });
      return {
        ...state,
        isOpened: false
      };
    case 'selectOption':
      return {
        ...state,
        selectedOption: action.payload.selectedOption,
        selectedOptionIndex: action.payload.selectedOptionIndex
      };
    case 'setSearchValue':
      return {
        ...state,
        searchValue: action.payload
      };
    case 'searchOptions':
      {
        if (action.payload === '') {
          return {
            ...state,
            searchedOptions: []
          };
        }
        const regex = new RegExp(action.searchPattern(action.payload.toLowerCase()));
        if ((0, _types.isSectionOptionsType)(state.optionsData)) {
          const filteredSections = state.optionsData.map(section => ({
            ...section,
            data: (0, _helpers.searchNormalize)(regex, section.title) ? section.data : section.data.filter(option => (0, _helpers.searchNormalize)(regex, option.label))
          })).filter(section => section.data.length > 0);
          return {
            ...state,
            searchedOptions: filteredSections
          };
        }
        return {
          ...state,
          searchedOptions: state.optionsData.filter(option => (0, _helpers.searchNormalize)(regex, option.label))
        };
      }
    case 'setSearchInputRef':
      return {
        ...state,
        searchInputRef: action.payload
      };
    case 'setOptionsListPosition':
      return {
        ...state,
        openedPosition: {
          ...state.openedPosition,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
exports.reducer = reducer;
const setDefaultOption = (options, defaultOption) => {
  if ((0, _helpers.isValidDefaultOption)(defaultOption) && options.length > 0) {
    const isSectionedOptions = (0, _types.isSectionOptionsType)(options);
    const foundIndex = isSectionedOptions ? (0, _helpers.getReducedSectionData)(options).findIndex(item => item.value === defaultOption.value) : options.findIndex(item => item.value === defaultOption.value);
    if (foundIndex !== -1) {
      return {
        selectedOption: defaultOption,
        selectedOptionIndex: foundIndex
      };
    }
  }
  return {
    selectedOption: null,
    selectedOptionIndex: -1
  };
};
const createInitialState = ({
  options,
  searchable,
  animation,
  defaultOption
}) => {
  if (!Array.isArray(options)) {
    throw new TypeError(_helpers.ERRORS.NO_ARRAY_OPTIONS);
  }
  const {
    selectedOption,
    selectedOptionIndex
  } = setDefaultOption(options, defaultOption);
  return {
    isOpened: false,
    selectedOption,
    selectedOptionIndex,
    searchedOptions: [],
    searchInputRef: null,
    openedPosition: {
      width: 0,
      top: 0,
      left: 0,
      aboveSelectControl: false
    },
    optionsData: options,
    searchValue: searchable ? '' : null,
    animationDuration: typeof animation === 'boolean' ? animation ? _constants.ANIMATION_DURATION : 0 : animation
  };
};
exports.createInitialState = createInitialState;
//# sourceMappingURL=reducer.js.map