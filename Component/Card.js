import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../Theme/Theme'
import CircleButton from './CircleButton'

export default function Card({
    name,
    diff,
    onPress
}) {
    return (
        <View style={{
            height: 120,
            width: "88%",
            backgroundColor: COLORS.card,
            alignSelf: "center",
            borderRadius: SIZES.padding,
            flexDirection:"row",
            justifyContent:"space-evenly",
            margin:10
        }} >
            <View style={{
                alignSelf:"center",
                justifyContent:"space-evenly"
            }}>
            <Text style={{
                ...FONTS.h1,
                alignSelf: "flex-start",
                color:COLORS.text
            }}>
                {name}
            </Text>
            <Text style={{
                ...FONTS.body3,
                alignSelf: "flex-start",
                justifyContent:"center",
                color:COLORS.text
            }}>
                Difficulty: <View style={{
                    height:10,
                    width:60,
                    backgroundColor:diff,
                    borderRadius:5,
                    alignSelf:"center"
                }}/>
            </Text>
            </View>

            <CircleButton 
            onPress={onPress}
            outerStyle={{
                height:70,
                width:70,
                backgroundColor:COLORS.background
            }}
            innerStyle={{
                height:50,
                width:50,
                backgroundColor:COLORS.purple
            }}
            iconStyle={{
                tintColor:COLORS.background
            }}/>
        </View>
    )
}