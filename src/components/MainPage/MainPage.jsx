import React from 'react';
import Feed from '../Feed/Feed';
// import styles from './GameBoard.module.css';

const MainPage = (props) => (
  <div style={{display: props.user ? 'block' : 'none'}}>
      <Feed />
  </div>
);

export default MainPage;