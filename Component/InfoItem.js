import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import { IMAGE } from '../Theme/Image'

export default function InfoItem({
    title,
    value,
    onPress,
    titleStyle,
    show = false
}) {
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 12
                }}>
                <Text style={{
                    ...FONTS.h2,
                    marginLeft: 20,
                    color: COLORS.text,
                    ...titleStyle
                }}>{title}</Text>
                {
                    show ?
                        <Image source={IMAGE.tick} style={{
                            height:30,
                            width:30,
                            tintColor:COLORS.purple,
                            marginRight: 20,

                        }}/> :
                        <Text style={{
                            ...FONTS.body2,
                            marginRight: 20,
                            color: COLORS.text
                        }}>{value}</Text>
                }
            </TouchableOpacity>
        </>
    )
}