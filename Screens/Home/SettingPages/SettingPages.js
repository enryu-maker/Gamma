import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../../../Theme/Theme'
import Header from '../../../Component/Header'
import { IMAGE } from '../../../Theme/Image'
import InfoItem from '../../../Component/InfoItem'
import { useDispatch } from 'react-redux'
import { Language, Theme } from '../../../Store/actions'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
export default function SettingPages({
    navigation,
    route,
}) {
    const { t,i18n } = useTranslation();
    const setLanguage = code => {
        return i18n.changeLanguage(code);
    };

    const [data, setData] = React.useState([])
    const [value, setValue] = React.useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        const { data } = route.params
        const { value } = route.params
        setValue(value)
        setData(data)
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
                            transform: [{ rotate: '180deg' }]
                        }} />
                    </TouchableOpacity>
                }
                title={data.name}
                titleStyle={{
                    marginLeft: -65
                }}
            />
            <View style={{
                width: "88%",
                backgroundColor: COLORS.card,
                padding: 5,
                alignSelf: "center",
                borderRadius: SIZES.padding,
                marginTop: 20
            }}>
                <FlatList
                    data={data.data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <InfoItem title={t(item.label)} show={item.label === value} onPress={() => {
                                if (data.name === "Language") {
                                    dispatch(Language(item.value))
                                    setLanguage(item.code)
                                }
                                else {
                                    dispatch(Theme(item.value))
                                }
                                navigation.goBack()
                            }} />
                        )
                    }} />
            </View>

        </View>
    )
}