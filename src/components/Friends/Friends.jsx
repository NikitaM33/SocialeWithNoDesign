import React from 'react';
import style from './Friends.module.css';
import FriendsImg from './FriendsImg/FriendsImg';


const Friends = (props) => {
    return(
        <div className={style.friendsWrapper}>
            <FriendsImg friendsData = {props.state.friendsData} />
        </div>
    )
}

export default Friends;