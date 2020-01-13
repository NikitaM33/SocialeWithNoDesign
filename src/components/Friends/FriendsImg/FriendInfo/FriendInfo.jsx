import React from 'react';
import style from './FriendInfo.module.css';

const FriendInfo = (props) => {
    return (
        <div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default FriendInfo;