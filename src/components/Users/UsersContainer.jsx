import React from 'react';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/userReduser';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    takeUsersSelector,
    // takeUsersSuperSelector
} from '../../redux/usersSelectors';



class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render(){ // 99 39:20
        return(
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users {...this.props} onPageChanged={this.onPageChanged} />
            </>
        )
    }
}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };

let mapStateToProps = (state) => {
    return {
        // users: takeUsersSuperSelector(state),
        users: takeUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);