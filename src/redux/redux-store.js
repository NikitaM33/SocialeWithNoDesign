import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import profileReduser from './propfileReduser';
import messageReduser from './messageReduser';
import friendsReduser from './friendsReduser';
import usersReduser from './userReduser';
import authReduser from './auth-reduser';
import appReduser from './appReduser';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReduser,
    messagePage: messageReduser,
    friendsPage: friendsReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
