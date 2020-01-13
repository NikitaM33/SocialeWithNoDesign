import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJSApp from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import store from './redux/redux-store';
// import {Provider} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom';
// import StoreContext from './storeContext';
// не удалять! это для шпоргалки!
// import store from './redux/store';

// let rerenderEntireTree = (state) => {
        ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'));
                // <StoreContext.Provider value={store}>
                //         <App store={store} dispatch = {store.dispatch.bind(store)} />
                // </StoreContext.Provider>, document.getElementById('root'));
// };

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//         let state = store.getState();
//         rerenderEntireTree(state);
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
