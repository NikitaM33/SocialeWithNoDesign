import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setAuthUserData, logout } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {  // тут нужно доделать форму
    componentDidMount() {
        // this.props.setAuthUserData();

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // }).then(response => {
        //     if(response.data.resultCode === 0) {
        //         let {email, id, login} = response.data.data
        //         this.props.setAuthUserData( email, id, login );
        //     }
        // });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose(
    connect(mapStateToProps, {
        setAuthUserData,
        logout
    })
)(HeaderContainer)

// export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);