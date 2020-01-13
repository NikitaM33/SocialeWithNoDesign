import React from 'react';
import style from './FriendsImg.module.css';
import FriendInfo from './FriendInfo/FriendInfo';
import FriendImg from './FriendImg/FriendImg';

const FriendsImg = (props) => {
let friendsItem = props.friendsData.map( (friend) => <FriendInfo name={friend.name} />);
let friendsImgItem = props.friendsData.map( (img) => <FriendImg img={img.foto} />);

    return (
        <div className={style.friendsImgWrapper}>
            <div className={style.friendImg}>{friendsImgItem}</div>
            <div>
                <p>{friendsItem}</p>
            </div>
        </div>
    )
}

export default FriendsImg;