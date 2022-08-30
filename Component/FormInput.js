import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

import { FONTS, SIZES, COLORS } from '../Theme/Theme';

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    errorMsg = "",
    maxLength,
    keytype="",
    onPressIn,
    returnKeyType,
    col=COLORS.red,
    multiline
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{ width:'80%',
                    justifyContent:"space-between",
                    flexDirection:"row",
                    alignSelf:"center"
                     }}>
                <Text style={{ color: COLORS.text, ...FONTS.body4}}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    height: SIZES.height > 800 ? 55 : 45,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.height > 800 ? SIZES.base : 10,
                    // borderRadius: SIZES.radius,
                    borderRadius:SIZES.radius,
                    backgroundColor: COLORS.card,
                    width:'80%',
                    alignSelf:'center',
                    ...inputContainerStyle
                }}
            >
                {
                    prependComponent
                }
                <TextInput
                    style={{ flex: 1, ...inputStyle }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.text}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                    returnKeyType={returnKeyType}
                    onPressIn={onPressIn}
                    multiline={multiline}
                />
                {
                    appendComponent
                }
            </View>
        </View>
    )
}

export default FormInput