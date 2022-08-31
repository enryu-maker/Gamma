import React from 'react';
import { 
    View,
    Text,
    Image,
    Platform
} from 'react-native';
import { COLORS, FONTS } from '../Theme/Theme';
import { useTranslation } from 'react-i18next';

const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent,img ,imgstyle,props}) => {
    const {t, i18n} = useTranslation(); 
    return (       
        <View
            style={{
                height: 80,
                flexDirection: 'row',
                ...containerStyle,
                alignSelf:'center',
                marginTop:Platform.OS=="android"? '0%' :30
            }}
        >
            {
                leftComponent
            }
            {title?
            (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{  ...FONTS.h2, ...titleStyle,color:COLORS.text}}>{t(title)}</Text>
        </View>):(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image
                        source={img}
                        resizeMode="contain"
                        style={{
                            height: 200,
                            width: 250,
                            ...imgstyle
                        }}
                    />
            </View>
        )}
            
            {
                rightComponent
            }

        </View>
        
    )
}

export default Header