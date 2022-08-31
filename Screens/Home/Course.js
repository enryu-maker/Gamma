import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Theme'
import Header from '../../Component/Header'

export default function Course() {
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background
    }}>
      <Header title={"Course"}/>
    </View>
  )
}