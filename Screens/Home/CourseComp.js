import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, } from '../../Theme/Theme'
import { IMAGE } from '../../Theme/Image'
export default function CourseComp({
    title,
    link,
    description,
    hrs
}) {
  return (
    <TouchableOpacity style={{
        flex:1,
        backgroundColor: COLORS.card,
        // height: 500,
        width: "88%",
        alignSelf: "center",
        borderRadius: SIZES.radius,
        marginBottom:10,
    }}
    onPress={()=>{
        Linking.openURL(link)
    }}
    >
      <Text style={{
            color:COLORS.text,
            padding:10,
            ...FONTS.h2
        }}>
             {title}
        </Text>
        <Text style={{
            color:COLORS.text,
            paddingHorizontal:10,
            ...FONTS.h3
        }}>
            {hrs}
        </Text>
        <Text style={{
            color:COLORS.text,
            padding:10,
            ...FONTS.h3
        }}>
            {description}
        </Text>
        <Image source={IMAGE.Right} style={{
            height: 28,
            width: 28,
            alignSelf: "center",
            // transform: [{ rotate: '180deg' }],
            tintColor: COLORS.purple,
            position:"absolute",
            bottom:10,
            right:10,

        }} />
    </TouchableOpacity>
  )
}