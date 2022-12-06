import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../Theme/Theme'
import Header from '../../Component/Header'
import axios from 'axios'
import CourseComp from './CourseComp'
import { ActivityIndicator } from 'react-native-paper'
export default function Course() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    axios.get('http://143.110.191.11/courses/').then((Response) => {
      setData(Response.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.background
    }}>
      <Header title={"Course"} />
      {
        data.length === 0 ? <ActivityIndicator
          style={{
            marginTop: 100
          }}
          size="large"
          color={COLORS.primary} /> :
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <CourseComp key={index} title={item.name}
              description={item.type}
              hrs={item.hours}
              link={item.link}
              />
          )
        }} />
      }


    </View>
  )
}