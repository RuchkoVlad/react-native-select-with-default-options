import React from 'react';
import type { ViewStyle } from 'react-native';
import {Animated, View, StyleSheet} from 'react-native';

import type { OnPressRemove, OptionType } from '../../types';
import { MultiSelectedOption } from '../multi-selected-option';
import { SelectInput } from '../select-input';
import { SelectText } from '../select-text';

import { useMultiSelect } from './multi-select.hooks';
import type { MultiSelectProps } from './multi-select.types';

export const MultiSelect = <T,>({ selectedOptions }: MultiSelectProps<T>) => {
    const {
        calculatedOptionWidth,
        onPressRemove,
        multiSelectedCustomStyles,
        disabled,
        isSearchable,
    } = useMultiSelect<T>({
        selectedOptions,
    });

    const resolveSelectedOptionsList = () => {
        if (!selectedOptions) {
            return isSearchable ? null : <SelectText />;
        }

        return selectedOptions.map((option: OptionType<T>) => (
            <MultiSelectedOption
                key={`${option.section}-${option.value}`}
                optionWidth={calculatedOptionWidth}
                option={option}
                multiSelectedCustomStyles={multiSelectedCustomStyles}
                disabled={disabled}
                onPressRemove={onPressRemove as OnPressRemove<unknown>}
            />
        ));
    };

    return (
        <View scrollEnabled={!disabled} style={styles.container}>
            {isSearchable && <SelectInput />}
            {resolveSelectedOptionsList()}
        </View>
    );
};

type Styles = {
    container: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        minWidth: '100%',
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
});

