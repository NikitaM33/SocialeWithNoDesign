import { createSelector } from 'reselect';

// ============= Users container ============

const takeUsers = (state) => {
    return state.usersPage.users;
};

export const takeUsersSelector = (state) => {
    return takeUsers(state).filter(u => true);
};

// export const takeUsersSuperSelector = createSelector(takeUsers, getIsFetching,  //принимает несколько селекторов
//     (users, IsFetching) => {
//     return users.filter(u => true);
// });



export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};


// ============= Profile container ===========

export const getProfile = (state) => {
    return state.profilePage.profile;
};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};

export const takeStatus = (state) => {
    return state.profilePage.status;
};

export const getAuthorizedUserId = (state) => {
    return state.auth.userId;
};