import React from 'react';
import {sendMessageCreater} from '../../redux/messageReduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
// import StoreContext from '../../storeContext';


// const DialogsContainer = (props) =>{
//     let state = props.store.getState().messagePage;

//     let addNewDialog = () => {
//         props.store.dispatch(sendMessageCreater());
//     };

//     let onPostChange = (body) => {
//         props.store.dispatch(newMessageBodyCreater(body));
//     };

//     return(<Dialogs newMessageBody={onPostChange} sendMessage={addNewDialog} messagePage={state} />);


    // return(
    //     <StoreContext.Consumer>
    //         {
    //             (store) => {
    //                 let state = store.getState().messagePage;

    //                 let addNewDialog = () => {
    //                     store.dispatch(sendMessageCreater());
    //                 };

    //                 let onPostChange = (body) => {
    //                     store.dispatch(newMessageBodyCreater(body));
    //                 };

    //                 return <Dialogs newMessageBody={onPostChange} sendMessage={addNewDialog} messagePage={state} />
    //             }
                
    //         }
    //     </StoreContext.Consumer>
    // );
// };



// Это НОС
let AuthRedirectComponent = withAuthRedirect(Dialogs);
    
//     (props) => {
//     if(!props.isAuth) {
//         return <Redirect to="/login" />
//     }
//     return <Dialogs {...props} />
// }


let mapStateToProps = (state) => {
    return{
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    };
};

let mapDispatchToProps = (dispatch) => {
    return{ 
        // newMessageBody: (body) => {
        //     dispatch(newMessageBodyCreater(body)); // Не нужен потому, что теперь это все делает redux-form
        // },
        
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreater(newMessageBody));
        }
    };
}


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(AuthRedirectComponent);