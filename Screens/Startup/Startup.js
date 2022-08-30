import { View, Text, Image } from 'react-native'
import React from 'react'
import FormInput from '../../Component/FormInput'
import { COLORS, FONTS } from '../../Theme/Theme'
import { IMAGE } from '../../Theme/Image'
import CircleButton from '../../Component/CircleButton'

export default function Startup({
    navigation
}) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent:"space-evenly"
        }}>
            <Image source={IMAGE.Gamma} style={{
                height: 300,
                width: 300,
                alignSelf: "center"
            }} />
            <View>
                <Text style={{
                    ...FONTS.h1,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>Meet <Text style={{
                    ...FONTS.h1,
                    color: COLORS.purple
                }}>Gamma</Text></Text>
                <Text style={{
                    ...FONTS.h1,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>AI for LANGUAGE</Text>
                <Text style={{
                    ...FONTS.h1,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>Learning</Text>
            </View>
            <CircleButton onPress={()=>{
                navigation.replace('Login')
            }}/>
        </View>
    )
}