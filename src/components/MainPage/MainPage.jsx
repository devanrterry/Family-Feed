import React from 'react';
import Feed from '../Feed/Feed';
// import styles from './GameBoard.module.css';

const MainPage = (props) => (
  <div style={{display: props.user ? 'block' : 'none'}}>
      <Feed 
      posts={props.posts}
      handleAddPost={props.handleAddPost}
      handleDeletePost={props.handleDeletePost}
      handleUpdatePost={props.handleUpdatePost}
      />
  </div>
);

export default MainPage;