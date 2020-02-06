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
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('Some error accrued');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledRejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledRejection', this.catchAllUnhandledErrors)
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
            {/* <Route exact path="/" render={withSuspens(ProfileContainer)} /> Можно сделать так, но так будет две одинаковых страницы на разных урлах */} 
            <Route exact path="/" render={() => {return <Redirect to={"/profile"} />}} />
            <Route path="/profile/:userId?" render={withSuspens(ProfileContainer)} />
            <Route path="/dialogs" render={withSuspens(DialogsContainer)} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" 
              render={() => <div>404 NOT FOUND</div>} />
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

const SamuraiJSApp = (props) => { // 99 lesson 16:38
  return(
    // <BrowserRouter basename={process.env.PUBLIC_URL}> 
    <BrowserRouter> 
    {/* <HashRouter> */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
    {/* </HashRouter> */}
    </BrowserRouter>
  )
}

export default SamuraiJSApp;