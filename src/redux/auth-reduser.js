import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'samuraiNetwork/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const authUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth
    }
});

// =================== Thunk

export const setAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me(); // в этой переменной лежит responseб он втоматом возвращается с помощью asyc await
    // .then(response => {
        if(response.data.resultCode === 0) {
            let { email, id, login } = response.data.data;
            dispatch(authUserData(email, id, login, true));
        };
    // });
};

export const login = (email, login, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, login, rememberMe);

    if(response.data.resultCode === 0) {
        dispatch(setAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}));
    };
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