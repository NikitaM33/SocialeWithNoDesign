import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {sendMessageCreater, newMessageBodyCreater} from '../../redux/messageReduser';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { required, maxLength } from '../../utils/validators/validators';


const DialogsForm = (props) =>{

    // let state = props.messagePage;
    // debugger
    let dialogItems = props.messagePage.dialogsData.map((nameApponent) => <DialogItem key={nameApponent.id} name={nameApponent.name} id={nameApponent.id} />);
    let messgeItems = props.messagePage.messgeData.map((messageApponent) => <MessageItem key={messageApponent.id} text={messageApponent.message} />);
    let newMessageBody = props.messagePage.newMessageBody;

    // let addNewDialog = () => { // Заменили на addNewMessage
    //     props.sendMessage();
    // };

    // let onPostChange = (event) => {
    //     let body = event.target.value; // Не нужен потому, что теперь это все делает redux-form
    //     props.newMessageBody(body);
    // };

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        // props.sendMessage();
    }

    // if(!props.isAuth) return <Redirect to={"/login"} />;
    
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogItems}
            </div>
            <div className={style.messages}>
                <div>
                    {messgeItems}
                </div>
            </div>

            {/* <div className={style.messages}>
                {messgeItems}
                <textarea onChange = { onPostChange } value = {newMessageBody} /> <br/>
                <button onClick = {addNewDialog}>Send</button>
            </div> */}

            <AddMessageFormRedux onSubmit={addNewMessage} />

        </div>
    )
}

const maxLength50 = maxLength(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}> {/* handleSubmit появляется из reduxForm*/}
            <div className={style.messages}>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter a massege" validate={[required, maxLength50]} />
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);

export default DialogsForm;