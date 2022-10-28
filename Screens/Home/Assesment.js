import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'
import Header from '../../Component/Header'
import Card from '../../Component/Card'
import { AssesmentData } from '../../Constant/Constant'

export default function Assesment() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.background
    }}>
      <Header title={"Assesment"} />
      <Text style={{
        ...FONTS.h1,
        alignSelf: "center",
        color: COLORS.purple
      }}>
        ~~Coming Soon~~
      </Text>
      <FlatList
        data={AssesmentData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              diff={item.diff}
            />
          )
        }} />
      
    </View>
  )
}