import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getStatus, updateStatus } from '../../redux/propfileReduser';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile,
        getIsAuth,
        takeStatus,
        getAuthorizedUserId } from '../../redux/usersSelectors';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        
        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
        
        // usersAPI.getUserProfile(userId)
        // .then(data => {
        //     this.props.setUserProfile(data);
        // })

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // .then(response => {
        //     this.props.setUserProfile(response.data);
        // });
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}
                                        status={this.props.status}
                                        updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

// Это НОС
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

//     (props) => {
//     if(!props.isAuth) return <Redirect to={"/login"} />
//     return <ProfileContainer {...props} />
// }

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state),
        status: takeStatus(state),
        authorizedUserId: getAuthorizedUserId(state)
    }
}

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// export default connect(mapStateToProps, {
//     setUserProfile
// })(WithUrlDataContainerComponent);