import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';
import { FONTS, COLORS, SIZES } from "../Theme/Theme";
const TextButton = ({
    buttonContainerStyle,
    disabled,
    label,
    labelStyle,
    label2 = "",
    label2Style,
    onPress,
    icon,
    iconStyle,
    buttonContainerStyle2,
    loading,
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.card,
                borderRadius: SIZES.radius,
                height: SIZES.height > 800 ? 55 : 45,
                width: '60%',
                alignSelf: 'center',
                marginTop:35,
                ...buttonContainerStyle,
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.background,
                    borderRadius: SIZES.radius,
                    height: SIZES.height > 800 ? 45 : 35,
                    width: '95%',
                    alignSelf: 'center',
                    ...buttonContainerStyle,
                }}
                disabled={disabled}
                onPress={onPress}
            >
                <Text style={{ color: COLORS.purple, ...FONTS.h2, ...labelStyle, alignSelf: "center" }}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default TextButton;