import { View, Text, FlatList, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'
import Header from '../../Component/Header'
import TestComp from './TestComp'
import axiosIns from '../../helpers/helpers'
export default function Test({
    navigation
}) {
    const [data, setData] = React.useState([])
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        axiosIns.get("http://143.110.191.11/getquestions/")
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background
        }}>
            <Header title={"Test"}
                leftComponent={
                    <TouchableOpacity style={{
                        padding: 5,
                        backgroundColor: COLORS.background,
                        borderWidth: 1,
                        alignSelf: "center",
                        marginLeft: 25,
                        borderRadius: 10,
                        ...FONTS.h3
                    }}
                    onPress={() => {
                        Alert.alert("Are you sure you want to cancle the test?"
                            , "You will not be able to resume the test later",
                            [
                                {
                                    text: "Yes",
                                    onPress: () => navigation.goBack()
                                },
                                {
                                    text: "No",
                                    onPress: () => console.log("No Pressed")
                                }
                            ])
                    }}
                    ><Text style={{
                        ...FONTS.h3,
                        color: COLORS.red,

                    }}>Cancle</Text></TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity style={{
                        padding: 5,
                        backgroundColor: COLORS.background,
                        borderWidth: 1,
                        alignSelf: "center",
                        alignSelf: "center",
                        marginRight: 25,
                        borderRadius: 10,
                    }}
                    onPress={() => {
                        Alert.alert("Are you sure you want to submit the test?"
                            , "You will not be able to resume the test later",
                            [
                                {
                                    text: "Yes",
                                    onPress: () => navigation.replace("result", { count: count, total: data.length })
                                },
                                {
                                    text: "No",
                                    onPress: () => console.log("No Pressed")
                                }
                            ])
                    }}
                    ><Text style={{
                        ...FONTS.h3,
                        color: COLORS.green,

                    }}>Submit</Text></TouchableOpacity>
                }
            />
            <FlatList data={data}
                renderItem={({ item,index }) => 
                <TestComp key={index} question={item.question}
                    option1={item.option1}
                    option2={item.option2}
                    option3={item.option3}
                    option4={item.option4}
                    answer={item.answer}
                    count={count}
                    setCount={setCount}
                />} />
        </View>
    )
}