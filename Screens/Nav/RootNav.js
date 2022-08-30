import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../Theme/Theme'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Startup from '../Startup/Startup';
export default function RootNav() {
    const Stack = createNativeStackNavigator()
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background
        }}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={({ navigation }) => {
                    return {
                        detachPreviousScreen: !navigation.isFocused(),
                        headerShown: false,
                        animation: Platform.OS == "ios" ? "default" : "slide_from_right",
                        onTransitionStart: () => Keyboard.dismiss(),

                    }
                }} initialRouteName={"Startup"}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Startup" component={Startup} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}