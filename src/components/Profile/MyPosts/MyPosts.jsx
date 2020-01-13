import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength10 = maxLength(10);

const AddNewPostForm = React.memo((props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} validate={[required, maxLength10]} />
        {/* <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /> */}
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
})

const ReduxAddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {
  let postItem = props.postData.map(mes => <Post key={mes.id} message={mes.message} like={mes.like} />);

  // let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsDescr}>
      <h3>My posts</h3>
        <ReduxAddNewPostForm onSubmit={onAddPost} />
      <div className={style.item}>
        {postItem}
      </div>
    </div>
  )
}

// const MyPostsRedux = reduxForm({
//   form: 'posts'
// })(MyPosts);

// const myPostsForm = (props) => {
//   const onSubmit = (formData) => {
//     console.log(formData);
//   }

//   return (
//     <div>
//       <h4>New posts</h4>
//       <MyPostsRedux onSubmit={onSubmit} />
//     </div>
//   )
// }

export default MyPosts;