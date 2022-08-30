const initialState = {
    token: null,
    dark: false,
    language: "English"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                authToken: action.payload,
            };
        case 'THEME':
            return {
                ...state,
                dark: action.payload,
            };
        case 'LANG':
            return {
                ...state,
                language: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
}