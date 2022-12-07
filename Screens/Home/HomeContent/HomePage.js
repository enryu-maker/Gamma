import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Platform } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../Theme/Theme'
import Header from '../../../Component/Header'
import { IMAGE } from '../../../Theme/Image'
import Voice from '@react-native-voice/voice';
import TextCard from '../../../Component/TextCard'
import { useTranslation } from 'react-i18next'
import Tts from 'react-native-tts'
import axios from 'axios'
import axiosIns, { baseURL } from '../../../helpers/helpers'
import { ActivityIndicator } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../../../App'
export default function HomePage({
    navigation,
    route
}) {
    const [loading, setLoading] = React.useState(false);
    const { t } = useTranslation()
    const handleVoice = ttstext => {
        
            Platform.OS === 'ios' ?

                Tts.speak(ttstext, {
                    iosVoiceId: 'com.apple.ttsbundle.Samantha-compact',
                    rate: 0.5,
                })
                : Tts.speak(ttstext,
                    {
                        androidParams: {
                            KEY_PARAM_PAN: -1,
                            KEY_PARAM_VOLUME: 0.5,
                            KEY_PARAM_STREAM: 'STREAM_DTMF',
                        }

                    })
        

    }
    React.useEffect(() => {
        setLoading(true)
        Tts.getInitStatus().then(() => {
            setLoading(false)
            Toast.show({
                text1: 'Gamma is Ready',
                type: 'success'
            });
            handleVoice('Gamma is Ready')
        }).catch((err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
                Toast.show({
                    text1: 'Gamma Engine Cannot connect',
                    type: 'error'
                });
            setLoading(false)

            }
            else {
                Toast.show({
                    text1: 'Error',
                    type: 'error'
                });
            setLoading(false)

            }
        });
    }, [])
    const [data, setData] = React.useState({})
    // const [loading, setLoading] = React.useState(false);
    const [isRecord, setIsRecord] = React.useState(false);
    const [text, setText] = React.useState('');
    const [textList, setTextList] = React.useState([]);
    const buttonLabel = isRecord ? 'Stop' : 'Start';
    async function converse(d, id) {
        await axiosIns.post(baseURL + '/converse/', d).then((Response) => {
            let regex = /\?/g;
            let result = Response.data['output'].replace(regex, " ");
            console.log(result)
            handleVoice(result.trim())
            let dataValue = {}
            dataValue['id'] = id + 1
            dataValue['text'] = Response.data['output'].trim();
            dataValue['type'] = true
            setTextList([...textList, dataValue])
            dataValue = {}
        }).catch((e) => {
            console.log(e)
        })

    }
    const startLabel = isRecord
        ? t('Listening...')
        : t('Press Start Button');
    const _onSpeechStart = () => {
        console.log("start")
        setText('');
    };
    const _onSpeechEnd = () => {
        console.log("end")
    };
    const _onSpeechResults = (event) => {
        setText(event.value[0]);
    };
    const _onSpeechError = (event) => {
        console.log(event.error);
    };
    const _onRecordVoice = () => {
        var d = {}
        if (isRecord) {
            Voice.stop();
            if (text != "") {
                d['id'] = textList.length + 1
                d['text'] = text
                d['type'] = false
                textList.push(d)
                converse(d, textList.length)
            }

        } else {
            Voice.start('en-US', {
                "RECOGNIZER_ENGINE": "GOOGLE",
                "EXTRA_PARTIAL_RESULTS": true
            });
        }
        setIsRecord(!isRecord);
        d = {}
    };
    React.useEffect(() => {
        Voice.onSpeechStart = _onSpeechStart;
        Voice.onSpeechEnd = _onSpeechEnd;
        Voice.onSpeechResults = _onSpeechResults;
        Voice.onSpeechError = _onSpeechError;
        const { data } = route.params
        setData(data)
        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background
        }}>
            <Header
                leftComponent={
                    <TouchableOpacity style={{
                        height: 50,
                        width: 50,
                        backgroundColor: COLORS.card,
                        alignSelf: "center",
                        borderRadius: 25,
                        marginLeft: 20,
                        justifyContent: "center"
                    }}
                        onPress={() => {
                            Tts.stop()
                            navigation.goBack()
                        }}
                    >
                        <Image source={IMAGE.Right} style={{
                            height: 28,
                            width: 28,
                            alignSelf: "center",
                            transform: [{ rotate: '180deg' }],
                            tintColor: COLORS.purple
                        }} />
                    </TouchableOpacity>
                }
                title={data.name}
                titleStyle={{
                    marginLeft: -65
                }}
            />
            {
                loading ?
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ActivityIndicator size="large" color={COLORS.purple} />
                        <Text style={{
                            ...FONTS.h4,
                            color: COLORS.purple
                        }}>
                            Connecting...
                        </Text>
                    </View> 
                    :
            <View style={{
                flex: 1,
                justifyContent: "space-evenly",
            }}>
                

                <View style={{
                    // marginTop: 15,
                    height: "auto",
                    // maxHeight: 390,
                    width: "88%",
                    borderRadius: SIZES.padding,
                    alignSelf: "center",
                }}>
                    <Text style={{
                        ...FONTS.h4,
                        alignSelf: "center",
                        color: COLORS.purple
                    }}>
                        {startLabel}
                    </Text>
                    <View style={{
                        height: "auto",
                        maxHeight: 450,
                        width: "100%",
                        // backgroundColor:COLORS.purple
                    }}>
                        <FlatList
                            data={textList}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <TextCard key={item.id} msg={item.text} type={item.type} />
                                )
                            }} />
                    </View>

                </View>
                

                        <TouchableOpacity style={{
                        }} onPress={() => {
                            _onRecordVoice()
                            Tts.stop()
                        }}>
                            <Image source={IMAGE.siri} style={{
                                height: 120,
                                width: 120,
                                alignSelf: "center",
                            }} />
                            <Text style={{
                                alignSelf: "center",
                                // marginTop: -20,
                                ...FONTS.h3,
                                color: COLORS.text
                            }}>
                                {t(buttonLabel)}
                            </Text>
                        </TouchableOpacity>

            </View>
            
}
<Toast ref={(ref) => { Toast.setRef(ref) }} config={toastConfig} />

        </View>
    )
}