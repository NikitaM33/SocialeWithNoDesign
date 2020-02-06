import React from 'react';
import st from './ProfileDataForm.module.css';
import style from '../../../common/FormControls/FormControls.module.css';
import { Field, reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/FormControls/FormControls';

const ProfileDataForm = ({handleSubmit, profile, error}) => { // 97 1:02:19
    return (
        <form onSubmit={handleSubmit}>
            <button>Save</button>
            {error && <div className={style.errorSummaryError}>
                <h3>
                    {error}
                </h3>
            </div>}
            <div>
                <b>Full name: </b> { createField("Full name", "fullName", [], Input) }
            </div>

            <div>
                <b>Looking for a job:</b>{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>

            <div>
                <b>My professional skills: </b>{createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>

            <div>
                <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
            </div>

            <div>
                <b>Contacts: {Object.keys(profile.contacts).map(k => {
                return <div key={k} className={st.contact}>
                    <b>{k}: </b> {createField(k, "contacts." + k, [], Input)}
                </div>
                })}</b>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;