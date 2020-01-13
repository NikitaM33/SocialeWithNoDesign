import React from 'react';
import style from './FormControls.module.css';

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

export const Textarea = ({input, meta, ...props}) => { // 77 урок 36:36
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
}