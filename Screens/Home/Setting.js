import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Theme/Theme'
import Header from '../../Component/Header'
import { settingData } from '../../Constant/Constant'
import InfoItem from '../../Component/InfoItem'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { LogoutAction } from '../../Store/actions'
export default function Setting() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  function Zero(){
    const { t } = useTranslation();
    const lang = useSelector(state=>state.Reducers.language)
    const theme = useSelector(state=>state.Reducers.dark)
    return(
      <View style={{
        width:"88%",
        backgroundColor:COLORS.card,
        padding:5,
        alignSelf:"center",
        borderRadius:SIZES.padding
      }}>
        <FlatList 
        data={settingData}
        keyExtractor={(item)=>item.id}
        renderItem={({ item, index }) => {
          return(
            <InfoItem key={index} title={t(item.name)} 
            value={item.name==="Language"?lang:theme?"Dark":"Light"}
            onPress={()=>{
              navigation.navigate('settingpage',{
                data:item,
                value:item.name==="Language"?lang:theme?"Dark":"Light"
              })
            }}/>
          )
        }}/>
      </View>
    )
  }
  function Logout(){
    return(
      <View style={{
        width:"88%",
        backgroundColor:COLORS.card,
        padding:5,
        alignSelf:"center",
        borderRadius:SIZES.padding,
        marginTop:20
      }}>
        <InfoItem title={"Logout"} titleStyle={{
          color:COLORS.red,
          ...FONTS.h2
        }} 
        onPress={()=>{
          dispatch(LogoutAction())
        }}
        />
      </View>
    )
  }
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background
    }}>
      <Header title={"Setting"}/>
      <Zero/>
      <Logout/>
    </View>
  )
}
