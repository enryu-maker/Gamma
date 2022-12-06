import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'
import Header from '../../Component/Header'
import Card from '../../Component/Card'
import { AssesmentData } from '../../Constant/Constant'

export default function Assesment({
  navigation
}) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.background
    }}>
      <Header title={"Assesment"} />
      
            <Card
              key={0}
              name={"Start Test"}
              onPress={() => navigation.navigate("test")}
              // diff={"Easy"}
            />
         
    </View>
  )
}