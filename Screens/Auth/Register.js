import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import Header from '../../Component/Header'
import FormInput from '../../Component/FormInput'
import { IMAGE } from '../../Theme/Image'
import TextButton from '../../Component/TextButton'
import { toastConfig } from '../../App'
import Loader from '../../Component/Loader'
import Toast from 'react-native-toast-message'
import utils from '../../Utils/utils'
import axios from 'axios'
import { baseURL } from '../../helpers/helpers'
export default function Register({
    navigation
}) {
    const [email, setEmail] = React.useState("")
    const [emailerr, setEmailerrr] = React.useState("")

    const [username, setUsername] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [passerr, setPasserr] = React.useState("")

    const [pass1, setPass1] = React.useState("")
    const [show, setShow] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    function isEnabled() {
        return email != "" && username != "" && pass != "" && pass1 != ""
    }
    async function signup() {
        if (isEnabled()) {
            setLoading(true);
            await axios.post(baseURL + '/register/',
                {
                    email: email,
                    username: username,
                    password: pass,
                    // password1: pass1,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then(response => {
                    console.log(response)
                    if (response.status === 201) {
                        Toast.show({
                            text1: 'User Registered Successfully',
                            type: 'success'
                        });
                        setLoading(false)
                    } else {
                        Toast.show({
                            text1: 'User Not Registered',
                            type: 'error'
                        });
                        setLoading(false);
                    }
                })
                .catch(error => {
                    console.log(error)
                    if (error.response) {
                        Toast.show({
                            text1: 'Invalid Email & Password',
                            type: 'error'
                        });
                        setLoading(false);
                    }
                });
        } else {
            Toast.show({
                text1: 'Invalid Input',
                type: 'error'
            });
            setLoading(false);
        }
    }
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: COLORS.background,
        }}>
            <Loader loading={loading} />
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
                    errorMsg={emailerr}
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailerrr)
                        setEmail(value)
                    }}
                    placeholder={"Enter Email"}
                    containerStyle={{
                        marginTop: 25
                    }}
                />
                <FormInput
                    value={username}
                    label={"Username"}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    placeholder={"Enter Username"}
                    containerStyle={{
                        marginTop: 15
                    }}
                />
                <FormInput
                    value={pass}
                    label={"Password"}
                    onChange={(value) => {
                        setPass(value)
                    }}
                    placeholder={"Enter Password"}
                    secureTextEntry={!show}
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
                    errorMsg={passerr}
                    onChange={(value) => {
                        utils.validatePassword(pass, value, setPasserr)

                        setPass1(value)
                    }}
                    placeholder={"Enter Password"}
                    secureTextEntry={!show}
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
            <TextButton label={"Signup"}
                onPress={() => {
                    signup()
                }}
            />
            <Text style={{
                color: COLORS.text,
                ...FONTS.body4,
                alignSelf: "center",
                marginTop: 10,
                marginBottom: 40

            }}> Already have an account?
            <TouchableOpacity 
            style={{
                justifyContent: "center",
                alignSelf:"center",
            }}
            onPress={() => {
                navigation.navigate('Login')
            }}>
                    <Text style={{
                        color: COLORS.purple,
                        ...FONTS.body4,
                        

                    }}> Login</Text>
                </TouchableOpacity></Text>
            <Toast ref={(ref) => { Toast.setRef(ref) }} config={toastConfig} />

        </ScrollView>
    )
}