export const isFlatOptionsType = val => val.length > 0 && 'label' in val[0] && 'value' in val[0];
export const isSectionOptionsType = val => val.length > 0 && 'title' in val[0] && 'data' in val[0];
export const isOptionType = val => 'label' in val && 'value' in val;
export const isOptionIndexType = val => typeof val === 'number';
//# sourceMappingURL=guards.js.map