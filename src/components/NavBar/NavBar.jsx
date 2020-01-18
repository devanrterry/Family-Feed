import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {

  return (
    <div className='NavBar'>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>
    </div>
  );
};

export default NavBar;