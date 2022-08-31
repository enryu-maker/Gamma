import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Theme'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import SettingPages from '../Home/SettingPages/SettingPages';
import HomePage from '../Home/HomeContent/HomePage';
export default function HomeNav() {
    const Stack = createNativeStackNavigator()
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background
        }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={({ navigation }) => {
                    return {
                        detachPreviousScreen: !navigation.isFocused(),
                        headerShown: false,
                        animation: Platform.OS == "ios" ? "default" : "slide_from_right",
                        onTransitionStart: () => Keyboard.dismiss(),
                    }
                }} initialRouteName="/">
                    <Stack.Screen name="/" component={BottomTab} />
                    <Stack.Screen name="settingpage" component={SettingPages} />
                    <Stack.Screen name="homepage" component={HomePage} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}