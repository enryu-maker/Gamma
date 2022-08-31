import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from 'react-i18next';
export const Init = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('token');
        let id = await AsyncStorage.getItem('id');
        let start = await AsyncStorage.getItem('start');

        if (token !== null && id !== null && start == "true") {
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
        }
    }
}
export const Login = (token, id) => {
    return async dispatch => {
        if (token && id) {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('id', id);
            await AsyncStorage.setItem('start', 'true');
        }
        dispatch({
            type: 'LOGIN',
            payload: token,
        })
    }
}
export const Language = (value) => {
    return async dispatch => {
        dispatch({
            type: 'LANG',
            payload: value,
        })
    }
}
export const Theme = (value) => {
    return async dispatch => {
        dispatch({
            type: 'THEME',
            payload: value,
        })
    }
}
export const Logout = () => {
    return async dispatch => {
        AsyncStorage.clear()
        dispatch({
            type: 'LOGOUT',
            payload: null,
        })
    }
}