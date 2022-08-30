import { useSelector } from "react-redux";
import { IMAGE } from "../Theme/Image";
import { COLORS } from "../Theme/Theme";

export const Gamma = [
    {
        id:1,
        name:'Gamma-0',
        img:IMAGE.Gamma1,
        L1:"AI for Improving Your ",
        L2:"Grammer",
        L3:"Start Conversation With Zero"
    },
    {
        id:2,
        name:'Gamma-1',
        img:IMAGE.Gamma2,
        L1:"AI for Improving Your ",
        L2:"Conversation Skill",
        L3:"Start Conversation With One"
    }
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
                label:"English",
                value:"English"
            },
            {
                label:"French",
                value:"French"

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
