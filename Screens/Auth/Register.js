import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'
import Header from '../../Component/Header'
import FormInput from '../../Component/FormInput'
import { IMAGE } from '../../Theme/Image'
import TextButton from '../../Component/TextButton'

export default function Register({
    navigation
}) {
    const [email, setEmail] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [pass1, setPass1] = React.useState("")
    const [show, setShow] = React.useState(false)
    return (
        <View style={{
            backgroundColor: COLORS.background
        }}>
            <Header />
            <View>
                <Text style={{
                    ...FONTS.body1,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>Getting Started</Text>
                <Text style={{
                    ...FONTS.body3,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>Create An Account To Continue! </Text>
            </View>
            <View>
                <FormInput
                    value={email}
                    label={"Email"}
                    onChange={(value) => {
                        setEmail(value)
                    }}
                    placeholder={"Enter Email"}
                    containerStyle={{
                        marginTop: 25
                    }}
                />
                <FormInput
                    value={pass}
                    label={"Password"}
                    onChange={(value) => {
                        setPass(value)
                    }}
                    placeholder={"Enter Password"}
                    secureTextEntry={show}
                    containerStyle={{
                        marginTop: 15
                    }}
                    appendComponent={
                        <TouchableOpacity style={{
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                            onPress={() => {
                                setShow(!show)
                            }}
                        >
                            <Image source={show ? IMAGE.close : IMAGE.open} style={{
                                height: 20,
                                width: 20,
                                alignSelf: "center",
                                justifyContent: "center",
                                tintColor: COLORS.text
                            }} />
                        </TouchableOpacity>
                    }
                />
                <FormInput
                    value={pass1}
                    label={"Password"}
                    onChange={(value) => {
                        setPass1(value)
                    }}
                    placeholder={"Enter Password"}
                    secureTextEntry={show}
                    containerStyle={{
                        marginTop: 15
                    }}
                    appendComponent={
                        <TouchableOpacity style={{
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                            onPress={() => {
                                setShow(!show)
                            }}
                        >
                            <Image source={show ? IMAGE.close : IMAGE.open} style={{
                                height: 20,
                                width: 20,
                                alignSelf: "center",
                                justifyContent: "center",
                                tintColor: COLORS.text
                            }} />
                        </TouchableOpacity>
                    }
                />
                
            </View>
            <TextButton label={"Signup"} />
            <Text style={{
                color: COLORS.text,
                ...FONTS.body4,
                alignSelf:"center",
                marginTop:15
            }}> Already have an account?<TouchableOpacity onPress={()=>{
                navigation.navigate('Login')
            }}>
                <Text style={{
                color: COLORS.purple,
                ...FONTS.body4,
                justifyContent:"center",
            }}> Login</Text>
                </TouchableOpacity></Text>
        </View>
    )
}