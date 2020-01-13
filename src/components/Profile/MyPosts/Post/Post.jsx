import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return(
      <div className={style.item}>
        <img src="https://media.comicbook.com/2018/05/avatar-the-last-airbender-blu-ray-set-1111431.jpeg" alt=""/>
        <div>
          {props.message}
        </div>
        <div>
          Like {props.like}
        </div>
      </div>
    )
}

export default Post;