import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objectHelper/objectHelper';


const FOLLOW = 'samuraiNetwork/users/FOLLOW';
const UNFOLLOW = 'samuraiNetwork/users/UNFOLLOW';
const SET_USERS = 'samuraiNetwork/users/SET_USERS';
const SET_CURRENT_PAGE = 'samuraiNetwork/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'samuraiNetwork/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'samuraiNetwork/users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'samuraiNetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReduser = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}) // если это не понятно, то смотри урок 90

                // users: state.users.map((u) => {
                //     if(u.id === action.userId){
                //         return {...u, followed: true};
                //     };

                //     return u;
                // })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };

        case SET_USERS: {
            return {
                ...state, 
                users: action.users
            }
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    };
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

// Санки

export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch (toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize)
        // .then(data => {
            dispatch (toggleIsFetching(false))
            dispatch (setUsers(data.items));
            dispatch (setTotalUsersCount(data.totalCount))
        // });
    }
};


const folowUnfolowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch( toggleFollowingProgress(true, userId) );

    let data = await apiMethod(userId);

    if(data.resultCode == 0) {
        dispatch( actionCreator(userId) );
    }
    dispatch( toggleFollowingProgress(false, userId) );
};

export const follow = (userId) => {
    return async (dispatch) => {
        folowUnfolowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        folowUnfolowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
};

export default usersReduser;