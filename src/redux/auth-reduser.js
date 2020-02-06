import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'samuraiNetwork/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samuraiNetwork/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha dosen`t required
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const authUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});

const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

// =================== Thunk

export const setAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me(); // в этой переменной лежит response, он втоматом возвращается с помощью asyc await
    // .then(response => {
        if(response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(authUserData(id, email, login, true));
        };
    // });
};

export const login = (email, login, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, login, rememberMe, captcha);

    if(response.data.resultCode === 0) {
        // success, get auth data
        dispatch(setAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        // failed, dosn`t get auth data
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}));
    };
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if(response.data.resultCode === 0) {
        dispatch(authUserData(null, null, null, false));  // Урок 90 8:39
    };
};

// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     withCredentials: true
// }).then(response => {
//     if(response.data.resultCode === 0) {
//         let {email, id, login} = response.data.data
//         this.props.setAuthUserData( email, id, login );
//     }
// });

export default authReduser;