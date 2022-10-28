import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import RootNav from './Screens/Nav/RootNav'
import { Provider, useSelector,useDispatch } from 'react-redux'
import { store } from './Store'
import HomeNav from './Screens/Nav/HomeNav'
import SplashScreen from 'react-native-splash-screen';
import { enableScreens } from 'react-native-screens';
import { request, PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native-paper'
import i18n from './Utils/i18n'
const initI18n = i18n;
import { Init } from './Store/actions'
import { SIZES } from './Theme/Theme'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: COLORS.purple }}
      contentContainerStyle={{ paddingHorizontal: SIZES.padding }}
      text1Style={{
        ...FONTS.body3,
        color: COLORS.Primary
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: COLORS.red }}
      text1Style={{
        ...FONTS.body3,
        color: COLORS.red
      }}
    />
  )
};
const RootNavigation=()=>{
  const token = useSelector(state => state.Reducers.token);
  const [loading, setLoading] = React.useState(true);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const init = async() => {
    await dispatch(Init());
    setLoading(false);
  };
  React.useEffect(() => {
    enableScreens(true);
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    init();
  }, []);
  // const [PermissionResult, setPermissionResult] = React.useState(null);
  // request(
  //   Platform.OS === 'ios'
  //     ? [PERMISSIONS.IOS.MICROPHONE]
  //     : [PERMISSIONS.ANDROID.RECORD_AUDIO],
  // ).then(result => {
  //   setPermissionResult(result);
  // });
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', height:'100%' }}>
        <ActivityIndicator size="large" color={COLORS.Primary} />
        <Text style={{
          ...FONTS.body3,
          color: COLORS.Primary,
          alignSelf: "center"
        }}>Loading...</Text>
      </View>
    );
  }

  return (

      <View style={{
        flex:1,
        height:'100%',
        width:'100%'
      }}>
      {token === null ? <RootNav screenProps={{ t, i18n }} /> : <HomeNav screenProps={{ t, i18n }} />}
      </View>


  );
};
export default function App() {
  return (

        <Provider store={store}>
          <RootNavigation/>
        </Provider>

  )
}