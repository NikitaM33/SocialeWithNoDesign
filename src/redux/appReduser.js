import { setAuthUserData } from './auth-reduser'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReduser = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
        let thisIsPromis = dispatch(setAuthUserData());
        thisIsPromis.then(() => {
            dispatch(initializedSuccess());
        });
        // Promise.all([thisIsPromis, thisIsPromis, thisIsPromis]).then(() => {dispatch(initializedSuccess())}); // если много промисов
};

export default appReduser;