import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'
import Header from '../../Component/Header'

export default function Course() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.background
    }}>
      <Header title={"Course"} />
      <View style={{
        flex:1,
        justifyContent:"center",
        alignSelf:"center"
      }}>
      <Text style={{
        ...FONTS.h1,
        alignSelf: "center",
        color: COLORS.purple
      }}>
        ~~Coming Soon~~
      </Text>
      </View>
    </View>
  )
}