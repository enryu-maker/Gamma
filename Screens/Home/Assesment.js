import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Theme'
import Header from '../../Component/Header'
import Card from '../../Component/Card'
import { AssesmentData } from '../../Constant/Constant'

export default function Assesment() {
  return (
    <View style={{
        flex:1,
        backgroundColor:COLORS.background
    }}>
        <Header title={"Assesment"}/>
        <FlatList
      data={AssesmentData}
      keyExtractor={(item)=>item.id}
      renderItem={({ item, index }) => {
        return(
            <Card
            key={item.id}
            name={item.name}
            diff={item.diff}
            />
        )
      }}/>
    </View>
  )
}