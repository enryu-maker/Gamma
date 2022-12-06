import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/Theme'

export default function TextCard({
    msg,
    type,
    ...mainView
}) {
  return (
    <View style={{
        width:"70%",
        backgroundColor:COLORS.card,
        borderRadius:SIZES.radius,
        padding:2,
        alignSelf:type?"flex-start":"flex-end",
        marginTop:10,
        ...mainView
    }}>
      <Text style={{
        ...FONTS.body3,
        alignSelf:"center",
      }}>{msg}</Text>
    </View>
  )
}