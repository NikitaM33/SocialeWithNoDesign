import React from 'react';
import style from '../common/FormControls/FormControls.module.css'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reduser';
import { Redirect } from 'react-router-dom';
import { createField } from '../common/FormControls/FormControls';


// ==============Сама форма===========

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> Remember me
            </div>

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={style.errorSummaryError}>
                <h3>
                    {error}
                </h3>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login' // Этот form ни как не относится к тому форму который в стэйте. Это просто настройки
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {
    login
})(Login);