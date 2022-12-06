import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,FONTS } from '../../../Theme/Theme'
import Header from '../../../Component/Header'
import { IMAGE } from '../../../Theme/Image'
export default function Result({
    navigation,
    route
}) {
    const { count } = route.params
    const { total } = route.params
    
  return (
    <View style={{
        flex: 1,
        backgroundColor: COLORS.background
    }}>
        
        <View style={{
            flex:1,
            // justifyContent:"center",
            alignItems:"center"
        }}>
            <Image source={IMAGE.Gamma} style={{
            height:200,
            width:200,
            alignSelf:"center",
        }}/>
            <Text style={{
                ...FONTS.h1,
                color:COLORS.text
            }}>
                Your Result
            </Text>
            <Text style={{
                ...FONTS.h1,
                color:COLORS.text
            }}>
                {count}/{total}
            </Text>
            </View>
            <TouchableOpacity style={{
                height:50,
                width:"88%",
                backgroundColor:COLORS.card,
                alignSelf:"center",
                borderRadius:10,
                justifyContent:"center",
                alignItems:"center",
                marginBottom:20
            }} onPress={() => navigation.replace("/")}>
                <Text style={{
                    ...FONTS.h2,
                    color:COLORS.text
                }}>
                    Home
                </Text>
            </TouchableOpacity>

    </View>
  )
}