import React from 'react';
import style from '../common/FormControls/FormControls.module.css'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reduser';
import { Redirect } from 'react-router-dom';


// ==============Сама форма===========

const LoginForm = ({handleSubmit, error}) => {
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    login
})(Login);