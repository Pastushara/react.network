import React from 'react';
import Element from './Element';
import s from './Post.module.css';

const Post = (props) => {

    let postElement = props.posts.map (p => <Element message={p.message} likesCount={p.likesCount} />)

    return  (
      <div>
      <h3>My posts:</h3>
        { postElement }
      </div>
    )
}

export default Post;