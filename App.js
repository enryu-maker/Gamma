import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import RootNav from './Screens/Nav/RootNav'
import { Provider } from 'react-redux'
import { store } from './Store'
import HomeNav from './Screens/Nav/HomeNav'

export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background
    }}>
      <Provider store={store}>
      <HomeNav/>
      </Provider>
    </View>
  )
}