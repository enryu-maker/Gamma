import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Platform } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../../Theme/Theme'
import Header from '../../../Component/Header'
import { IMAGE } from '../../../Theme/Image'
import Voice from '@react-native-voice/voice';
import TextCard from '../../../Component/TextCard'
export default function HomePage({
    navigation,
    route
}) {
    const [data, setData] = React.useState({})
    const [isRecord, setIsRecord] = React.useState(false);
    const [text, setText] = React.useState('');
    const [textList, setTextList] = React.useState([]);
    const buttonLabel = isRecord ? 'Stop' : 'Start';
    const startLabel = isRecord
        ? 'Listening...'
        : 'Press Start Button';
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
            d['id'] = textList.length + 1
            d['text'] = text
            d['type'] = false
            textList.push(d)
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
            <View style={{
                justifyContent: "space-evenly"
            }}>
                <Image source={data.img} style={{
                    height: 250,
                    width: 250,
                    alignSelf: "center",
                }} />
                <Text style={{
                    ...FONTS.h3,
                    alignSelf: "center",
                    marginTop: -40,
                    color: COLORS.purple
                }}>
                    {startLabel}
                </Text>
                <View style={{
                    marginTop: 5,
                    height: 350,
                    width: "88%",
                    borderRadius: SIZES.padding,
                    alignSelf: "center"
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
                <TouchableOpacity style={{
                    marginBottom: Platform.OS == "ios" ? 0 : 100
                }} onPress={_onRecordVoice}>
                    <Image source={IMAGE.siri} style={{
                        height: 120,
                        width: 120,
                        alignSelf: "center",
                    }} />
                    <Text style={{
                        alignSelf: "center",
                        marginTop: -20,
                        ...FONTS.h3,
                        color:COLORS.text
                    }}>
                        {buttonLabel}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}