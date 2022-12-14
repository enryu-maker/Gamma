import { View, Text, Image } from 'react-native'
import React from 'react'
import {
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Assesment from '../Home/Assesment';
import Course from '../Home/Course';
import Setting from '../Home/Setting';
import { COLORS, FONTS, SIZES } from '../../Theme/Theme';
import { IMAGE } from '../../Theme/Image';
import { useTranslation } from 'react-i18next'

export default function BottomTab() {
    const { t } = useTranslation();

    const BottomTab = createBottomTabNavigator();
    return (
        <>
            <BottomTab.Navigator

                screenOptions={({ route }) => ({
                    headerShown: false,
                    // tabBarShowLabel:false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let iconColor;
                        if (route.name === t('Home')) {
                            iconName = focused ? IMAGE.home : IMAGE.home
                            iconColor = focused ? COLORS.purple : COLORS.text
                            // iconweight = focused ? "700" : null

                        } else if (route.name === t('Setting')) {
                            iconName = focused ? IMAGE.setting : IMAGE.setting;
                            iconColor = focused ? COLORS.purple : COLORS.text
                            // iconweight = focused ? "700" : null


                        } else if (route.name === t('Assesment')) {
                            iconName = focused ? IMAGE.test : IMAGE.test
                            iconColor = focused ? COLORS.purple : COLORS.text
                            // iconweight = focused ? "700" : null
                        }
                        else if (route.name === t('Course')) {
                            iconName = focused ? IMAGE.course : IMAGE.course
                            iconColor = focused ? COLORS.purple : COLORS.text
                            // iconweight = focused ? "700" : null
                        }
                        return (
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    backgroundColor: focused ? COLORS.background : COLORS.card,
                                    // justifyContent: 'center',
                                    justifyContent: "space-evenly",
                                    alignSelf: 'center',
                                    borderRadius: 12,
                                }}>

                                <Image
                                    source={iconName}
                                    resizeMode={"cover"}
                                    style={{
                                        alignSelf: 'center',
                                        height: focused ? 35 : 30,
                                        width: focused ? 35 : 30,
                                        tintColor: iconColor,
                                    }}
                                />
                            </View>
                        );
                    },
                    tabBarLabelStyle: {
                        ...FONTS.body3,
                        // fontWeight: 
                    },
                    tabBarStyle: {
                        height: SIZES.height > 700 ? Platform.OS == "ios" ? 120 : 90 : 75,
                        backgroundColor: COLORS.card,
                    },
                    tabBarActiveTintColor: COLORS.background,
                    tabBarInactiveTintColor: COLORS.text,
                })}>
                <BottomTab.Screen name={t("Home")} component={Home} />
                <BottomTab.Screen name={t("Assesment")} component={Assesment} />
                <BottomTab.Screen name={t("Course")} component={Course} />
                <BottomTab.Screen name={t("Setting")} component={Setting} />
            </BottomTab.Navigator>
        </>
    )
}