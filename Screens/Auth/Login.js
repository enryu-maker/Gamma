import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import Header from '../../Component/Header'
import FormInput from '../../Component/FormInput'
import { IMAGE } from '../../Theme/Image'
import TextButton from '../../Component/TextButton'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../App'
import { baseURL } from '../../helpers/helpers'
import { LoginAction } from '../../Store/actions'
import axios from 'axios'
import Loader from '../../Component/Loader'
import { useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login({
    navigation
}) {
    const [email, setEmail] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [show, setShow] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    function isEnabled() {
        return email != "" && pass != ""
    }
    const dispatch = useDispatch()
    async function login() {
        if (isEnabled()) {
            setLoading(true);
            await axios.post(baseURL + '/login/',
                {
                    email: email,
                    password: pass,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then(response => {
                    if (response.status === 200) {
                        dispatch(LoginAction(response.data.access,response.data.userid))
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
        <View style={{
            flex:1,
            marginTop:SIZES.height*0.10,
            backgroundColor: COLORS.background
        }}>
            <Loader loading={loading}/>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 30
                }}>
            <Header />
           
            <View>
                <Text style={{
                    ...FONTS.body1,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>Let Sign You In</Text>
                <Text style={{
                    ...FONTS.body3,
                    color: COLORS.text,
                    alignSelf: "center"
                }}>Login To Continue! </Text>
            </View>
            
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
                <TouchableOpacity style={{
                    width: "80%",
                    alignSelf: "center",
                    marginTop: 15
                }}>
                    <Text style={{
                        alignSelf: "flex-end",
                        color: COLORS.text,
                        textDecorationLine: "underline",
                        textDecorationColor: COLORS.purple,
                        ...FONTS.body4
                    }}>Forgot Password?</Text>
                </TouchableOpacity>
                <TextButton label={"Login"} 
            onPress={()=>{
                login()
            }}
            />
            </KeyboardAwareScrollView>
            
            <Text style={{
                color: COLORS.text,
                ...FONTS.body4,
                alignSelf:"center",
                marginTop:15
            }}> Don't have an account?<TouchableOpacity onPress={()=>{
                navigation.navigate('Register')
            }}>
                <Text style={{
                color: COLORS.purple,
                ...FONTS.body4,
                justifyContent:"center",
            }}> Signup</Text>
                </TouchableOpacity></Text>
                <Toast ref={(ref) => { Toast.setRef(ref) }} config={toastConfig} />
            
        </View>
    )
}