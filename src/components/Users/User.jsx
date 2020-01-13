import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/person-icon.png';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for( let i = 1; i <= pagesCount; i++ ){
        pages.push(i);
    }

    return (
        <div>
            <span>

                <div className={style.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                            // usersAPI.unfollow(u.id).then(data => {
                            //     if(data.resultCode == 0) {
                            //         props.unfollow(u.id);
                            //     }
                            //     props.toggleFollowingProgress(false, u.id);
                            // })

                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            //     withCredentials: true,
                            //     headers: {
                            //         "API-KEY": "b2de6c08-33b5-4aa7-b1b9-f605b1978dd4"
                            //     }
                            // }).then(response => {
                            //     if(response.data.resultCode == 0) {
                            //         props.unfollow(u.id)
                            //     }
                            // })

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id) 
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"user.location.country"}
                    </div>
                    <div>
                        {"user.location.city"}
                    </div>
                </span>
            </span>
        </div>
    );
}

export default User;