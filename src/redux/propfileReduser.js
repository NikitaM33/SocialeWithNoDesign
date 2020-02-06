import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'samuraiNetwork/profile/ADD-POST';
const SET_USER_PROFILE = 'samuraiNetwork/profile/SET_USER_PROFILE';
const SET_STATUS = 'samuraiNetwork/profile/SET_STATUS';
const DELETE_POST = 'samuraiNetwork/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = "samuraiNetwork/profileInfo/SAVE_PHOTO_SUCCESS";

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

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default: return state;
    };
};

export const addPostActionCreater = (newPostText) => ({ type: ADD_POST, newPostText });
const userProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

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
};

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
};

export const updateStatus = (status) => async (dispatch) => {
    try{
        let response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
        };
    } catch (error) {
        alert('Some error')
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if(response.data.resultCode == 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    };
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if(response.data.resultCode == 0) {
        dispatch(setUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
};

export default profileReduser;