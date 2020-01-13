import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'samuraiNetwork/profile/ADD-POST';
const SET_USER_PROFILE = 'samuraiNetwork/profile/SET_USER_PROFILE';
const SET_STATUS = 'samuraiNetwork/profile/SET_STATUS';
const DELETE_POST = 'samuraiNetwork/profile/DELETE_POST';

let initialState = {
    postData: [
        {
            id: 1,
            like: 8,
            message: 'Hey, how r u?'
        },
        {
            id: 2,
            like: 10,
            message: 'Hey, it`s my first post!'
        },
        {
            id: 3,
            like: 25,
            message: 'Who`s there?'
        }
    ],
    profile: null,
    status: ""
};

const profileReduser = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
                let newPost = {
                    id: 4,
                    like: 0,
                    message: action.newPostText
                };

                return {
                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
                };
                // stateCopy.postData = [...state.postData];
                // stateCopy.postData.push(newPost);
                // stateCopy.newPostText = '';
            // return stateCopy;

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            }

        default: return state;
    };
};

export const addPostActionCreater = (newPostText) => ({ type: ADD_POST, newPostText });
const userProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId})

// ============ Санки
export const setUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getUserProfile(userId);
        // .then(data => {
        //     dispatch(userProfile(data));
        // })
        // .then(response => {
            dispatch(userProfile(response.data));
        // })
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    };
}

export default profileReduser;