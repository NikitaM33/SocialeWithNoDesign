import React from 'react';
import { addPostActionCreater, updateNewPostTextactionCreater } from '../../../redux/propfileReduser';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch( addPostActionCreater() );
//   };

  // let onPostChange = (text) => {
  //   let action = updateNewPostTextactionCreater(text);
  //   props.store.dispatch( action )
  // };

//   return(<MyPosts updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />);
// };

let mapStateToProps = (state) => {
  return{
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = (dispatch) => {
  return{
    addPost: (newPostText) => {
      dispatch(addPostActionCreater(newPostText));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;