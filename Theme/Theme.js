import { Dimensions,Platform } from "react-native";
const { width, height } = Dimensions.get("window");
export const COLORS={
    background:"#F1F2F5",
    text:"#050511",
    purple:"#AE42AC",
    card:"#AEABC7",
    red:"#FF1E00",
    green:"#3EC70B",
    yellow:"#F7EC09",
    border:"#4F4F4F"
}

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    base2: 10,
    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
    // app dimensions
    width,
    height
};
const type = { base:"Poppins-Regular", 
bold: "Poppins-SemiBold", 
emphasis: "Poppins-Regular"}
export const FONTS = {
    largeTitle: { fontFamily: type.bold, fontSize: SIZES.largeTitle },
    h1: { fontFamily: type.bold, fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: type.bold, fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: type.bold, fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: type.bold, fontSize: SIZES.h4, lineHeight: 20},
    h5: { fontFamily: type.bold, fontSize: SIZES.h5, lineHeight: 18},
    body1: { fontFamily: type.base, fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily:type.base, fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily:type.base, fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily:type.base, fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontFamily:type.base, fontSize: SIZES.body5, lineHeight: 18 },
};