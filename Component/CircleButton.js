import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Theme/Theme'
import { IMAGE } from '../Theme/Image'

export default function CircleButton({
    outerStyle,
    innerStyle,
    innerIcon=IMAGE.Right,
    iconStyle,
    onPress
}) {
  return (
    <TouchableOpacity style={{
        // outer
        height:100,
        width:100,
        alignSelf:"center",
        backgroundColor:COLORS.purple,
        borderRadius:60,
        // borderWidth:1,
        // borderColor:COLORS.border,
        justifyContent:"center",
        ...outerStyle
    }}
    onPress={onPress}
    >
        <View style={{
        // inner
        height:70,
        width:70,
        alignSelf:"center",
        backgroundColor:COLORS.background,
        borderRadius:45,
        justifyContent:"center",
        ...innerStyle
    }}>
        <Image source={innerIcon} style={{
            height:25,
            width:25,
            tintColor:COLORS.purple,
            alignSelf:"center",
            ...iconStyle
        }}/>
    </View>
    </TouchableOpacity>
  )
}