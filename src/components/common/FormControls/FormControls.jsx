import React from 'react';
import style from './FormControls.module.css';
import { Field } from 'redux-form';

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ style.formControl + " " + (hasError ? style.error : "") }>
            <div>
                {props.child}
            </div>
            {hasError && <span>{meta.error}</span>} 
        </div>
    )
};

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={ style.formControl + " " + (hasError ? style.error : "") }>
            <textarea {...input} {...props} /> <br />
            {hasError && <span>{meta.error}</span>} 
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
};

export const createField = (placeholder, name, validators, component, props={}, text="") => (
    <div>
        <Field placeholder={placeholder} name={name} validate={validators}
            component={component}
            {...props} /> {text}
    </div>
)