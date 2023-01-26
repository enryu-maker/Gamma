import { useSelector } from "react-redux";
import { IMAGE } from "../Theme/Image";
import { COLORS } from "../Theme/Theme";
import { useTranslation } from 'react-i18next';
export const Gamma = [
    {
        id:0,
        name:'Gamma-1',
        img:IMAGE.Gamma2,
        L1:"AI for Improving Your",
        L2:"Conversation Skills",
        L3:"Start Conversation With One",
        Use:""
    },
    {
        id:1,
        name:'Gamma-2',
        img:IMAGE.Gamma1,
        L1:"AI for",
        L2:"Translation",
        L3:"Start Conversation With Two",
        Use:"Start sentence with following text \n *Translate {sentence} in {lang}*",
        Lang:true


    },
    {
        id:2,
        name:'Gamma-3',
        img:IMAGE.Gamma1,
        L1:"AI for Improving Your",
        L2:"Grammar",
        L3:"Start Conversation With Three",
        Use:"Start sentence with text \n *Correct grammer of {Your Sentence}*"
    },
    
]
export const AssesmentData = [
    {
        id:1,
        name:'Noob',
        diff:COLORS.green
    },
    {
        id:2,
        name:'Pro',
        diff:COLORS.yellow
    },
    {
        id:3,
        name:'Advanced',
        diff:COLORS.red
    }
]
export const settingData = [
    {
        id:1,
        name:'Language',
        data:[
            {
                code:"en",
                label:"English",
                value:"English"
            },
            {
                code:"fr",
                label:"Français",
                value:"Français"

            }
        ],
    },
    {
        id:2,
        name:'Mode',
        data:[
            {
                label:"Dark",
                value:true

            },
            {
                label:"Light",
                value:false

            }
        ],

    }
]
// export function translate(msg){
//     const { t, i18n } = useTranslation();
//     return t(msg);
// }
