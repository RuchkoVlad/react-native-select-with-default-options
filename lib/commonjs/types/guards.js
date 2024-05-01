"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSectionOptionsType = exports.isOptionType = exports.isOptionIndexType = exports.isFlatOptionsType = void 0;
const isFlatOptionsType = val => val.length > 0 && 'label' in val[0] && 'value' in val[0];
exports.isFlatOptionsType = isFlatOptionsType;
const isSectionOptionsType = val => val.length > 0 && 'title' in val[0] && 'data' in val[0];
exports.isSectionOptionsType = isSectionOptionsType;
const isOptionType = val => 'label' in val && 'value' in val;
exports.isOptionType = isOptionType;
const isOptionIndexType = val => typeof val === 'number';
exports.isOptionIndexType = isOptionIndexType;
//# sourceMappingURL=guards.js.map