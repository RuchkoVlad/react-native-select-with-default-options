import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import type { TextStyle, ViewStyle } from 'react-native';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

import { COLORS, FONT_SIZE, PRESSED_STYLE } from '../../constants';

import type { MultiSelectedOptionProps } from './multi-selected-option.types';
const iconSource = require('./../../assets/icons/x.png');

export const MultiSelectedOption = memo(
    <T,>({
             option,
             multiSelectedCustomStyles,
             optionWidth,
             onPressRemove,
             disabled,
         }: MultiSelectedOptionProps<T>) => {
        return (
            <Pressable
                accessibilityLabel={
                    option ? `${option.label} selected` : 'Placeholder in multiple select'
                }
                style={({ pressed }) => [
                    styles.multiSelectedOption,
                    multiSelectedCustomStyles?.container,
                    { width: optionWidth },
                    pressed && (multiSelectedCustomStyles?.pressed ?? PRESSED_STYLE),
                ]}
                disabled={disabled}
                onPress={() => (onPressRemove ? onPressRemove(option) : null)}
            >
                <Text
                    numberOfLines={1}
                    style={[
                        styles.text,
                        multiSelectedCustomStyles?.text,
                        {
                            color:
                                StyleSheet.flatten(multiSelectedCustomStyles?.text)?.color ??
                                COLORS.BLACK,
                        },
                    ]}
                >
                    {option?.label}
                </Text>

                <Image
                    source={iconSource}
                    style={{width: 15, height: 15, marginRight: 2}}
                />
            </Pressable>
        );
    },
    isEqual,
);

type Styles = {
    text: TextStyle;
    multiSelectedOption: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
    text: {
        fontSize: FONT_SIZE,
        textAlign: 'left',
    },
    multiSelectedOption: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 4,
        height: 25,
        backgroundColor: '#E5ECFF',
        marginTop: 3,
        marginRight: 3,
        paddingHorizontal: 10,
    },
});

MultiSelectedOption.displayName = 'MultiSelectedOption';
