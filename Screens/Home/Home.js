import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BigCard from '../../Component/BigCard'
import Header from '../../Component/Header'
import { COLORS } from '../../Theme/Theme'
import { IMAGE } from '../../Theme/Image'
import { Gamma } from '../../Constant/Constant'

export default function Home({
  navigation
}) {
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background,
      justifyContent:"center"
    }}>
      <Header title={"Home"}/>
      <FlatList
      data={Gamma}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      keyExtractor={(item)=>item.id}
      renderItem={({ item, index }) => {
        return(
          <BigCard 
          img={item.img} 
          name={item.name}
          L1={item.L1}
          L2={item.L2}
          L3={item.L3}
          onPress={()=>{
            navigation.navigate("homepage",{
              data:item
            })
          }}
          />
        )
      }}/>
    </View>
  )
}