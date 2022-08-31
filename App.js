import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import RootNav from './Screens/Nav/RootNav'
import { Provider } from 'react-redux'
import { store } from './Store'
import HomeNav from './Screens/Nav/HomeNav'
import SplashScreen from 'react-native-splash-screen';
import {enableScreens} from 'react-native-screens';
import {request, PERMISSIONS, requestMultiple} from 'react-native-permissions';
import {useTranslation} from 'react-i18next';
import i18n from './Utils/i18n'
const initI18n = i18n;
export default function App() {
  React.useEffect(() => {
    enableScreens(true);
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    // init();
  }, []);
  const {t, i18n} = useTranslation();
  const [PermissionResult, setPermissionResult] = React.useState(null);
  request(
    Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.MICROPHONE]
      : [PERMISSIONS.ANDROID.RECORD_AUDIO],
  ).then(result => {
    setPermissionResult(result);
  });
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background
    }}>
      <Provider store={store}>
      <HomeNav screenProps={{t, i18n}} />
      </Provider>
    </View>
  )
}