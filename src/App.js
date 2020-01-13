import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import GallaryContainer from './components/Gallary/GallaryContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReduser';
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { withSuspens } from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) { 
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile/:userId?" render={withSuspens(ProfileContainer)} />
            <Route path="/dialogs" render={withSuspens(DialogsContainer)} />
            <Route path="/music" render={withSuspens(Music)} />
            <Route path="/news" render={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <News />
                </Suspense>
              )
            }} />
            <Route path="/settings" render={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <Settings />
                </Suspense>
              )
            }} />
            <Route path="/friends" render={() => {
              return (
                <Suspense fallback={<div>Loading...</div>}>
                  <Friends state={this.props.state.friendsPage} />
                </Suspense>
              )
            }} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/gallary" render={() => <GallaryContainer />} />
          </Switch>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect( mapStateToProps, { initializeApp } )
)(App);

const SamuraiJSApp = (props) => {
  return(
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;