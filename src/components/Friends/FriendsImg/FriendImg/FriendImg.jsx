import React from 'react';
import style from './FriendImg.module.css';

const FriendImg = (props) => {
    return (
        <div>
            <div className={style.fImg}>
                {props.foto}
            </div>
        </div>
    )
}

export default FriendImg;