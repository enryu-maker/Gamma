import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Theme/Theme'
import CircleButton from './CircleButton'

export default function BigCard({
    img,
    onPress,
    name,
    L1,
    L2,
    L3
}) {
    return (
        <View style={{
            height: SIZES.height>700?SIZES.height * 0.60:SIZES.height * 0.60,
            width:SIZES.width-30,
            backgroundColor: COLORS.card,
            borderRadius: SIZES.padding,
            alignSelf: "center",
            justifyContent:"space-evenly",
            margin:15,
        }}>
            <View style={{
            }}>

            <Image source={img} style={{
                height: 200,
                width: 200,
                alignSelf: "center",
            }} />
            <Text style={{
                    ...FONTS.h2,
                    alignSelf:"center",
                    marginTop:-40
                }}>
                    {name}
                </Text>
            </View>

            <View>
                <Text style={{
                    ...FONTS.body2,
                textAlign:"center"
                }}>
                   {L1}
                </Text>
                <Text style={{
                    ...FONTS.body2,
                    textAlign:"center"
                }}>
                    {L2}
                </Text>
                <Text style={{
                    ...FONTS.body2,
                    textAlign:"center"
                }}>
                   {L3}
                </Text>
            </View>
            <CircleButton 
            onPress={onPress}
            outerStyle={{
                backgroundColor:COLORS.background
            }}
            innerStyle={{
                backgroundColor:COLORS.purple
            }}
            iconStyle={{
                tintColor:COLORS.background
            }}
            />
        </View>
    )
}