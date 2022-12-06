import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'

export default function TestComp({
    question,
    option1,
    option2,
    option3,
    option4,
    answer,
    count,
    setCount
}) {
    const [selected, setSelected] = React.useState("")
    return (
        <View style={{
            width: "88%",
            backgroundColor: COLORS.card,
            alignSelf: "center",
            borderRadius: 10,
            margin: 5,
        }}>
            <View
                style={{
                    width: "88%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    borderRadius: 10,
                    margin: 10,
                }} >
                <Text style={{
                    color: COLORS.text,
                    padding: 10,
                    ...FONTS.body3
                }}>{`${question}`}</Text>
            </View>
            <TouchableOpacity
                disabled={selected != ""}

                style={{
                    width: "58%",
                    backgroundColor: selected === "" ? "white" : option1 === answer ? "green" : selected != answer ? "red" : "white",
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }}
                onPress={() => {
                    setSelected(option1)
                    setCount(option1 === answer ? count + 1 : count)

                }}
            >
                <Text style={{
                    color: selected === answer && option1 === answer ? "white" : COLORS.text,
                    padding: 10,
                    ...FONTS.body4

                }}>{`A. ${option1}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={selected != ""}
                onPress={() => {
                    setSelected(option2)
                    setCount(option2 === answer ? count + 1 : count)

                }}
                style={{
                    width: "58%",
                    backgroundColor: selected === "" ? "white" : option2 === answer ? "green" : selected != answer ? "red" : "white",
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }} >
                <Text style={{
                    color: selected === answer && option2 === answer ? "white" : COLORS.text,
                    padding: 10,
                    ...FONTS.body4

                }}>{`B. ${option2}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={selected != ""}

                onPress={() => {
                    setSelected(option3)
                    setCount(option3 === answer ? count + 1 : count)

                }}
                style={{
                    width: "58%",
                    backgroundColor: selected === "" ? "white" : selected != answer ? "red" : option3 === answer ? "green" : "white",
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }} >
                <Text style={{
                    color: selected === answer && option3 === answer ? "white" : COLORS.text,
                    padding: 10,
                    ...FONTS.body4
                }}>{`C. ${option3}`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                disabled={selected != ""}

                onPress={() => {
                    setSelected(option4)
                    setCount(option4 === answer ? count + 1 : count)
                }}
                style={{
                    width: "58%",
                    backgroundColor: selected === "" ? "white" : option4 === answer ? "green" : selected != answer ? "red" : "white",
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }} >
                <Text style={{
                    color: selected === answer && option4 === answer ? "white" : COLORS.text,
                    padding: 10,
                    ...FONTS.body4

                }}>{`D. ${option4}`}</Text>
            </TouchableOpacity>
        </View>
    )
}