import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  let nav = props.user ? (
    <nav class="row lime darken-1">
      <div class="left-align">
      
        <a href="/" class="brand-logo">
          <div className="head">
          Family Feed
          </div>
        </a>
      </div>
      <div className="right-align head">
      <span className="NavBar-welcome">Welcome, {props.user.name}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="" className="NavBar-link" onClick={props.handleLogout}>
          Log Out
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
      </div>
    </nav>
  ) : (
    <nav class="row cyan darken-1">
      <div class="left-align">
        <a href="/" class="brand-logo">
          &nbsp;&nbsp;Family Feed
        </a>
      </div>
      <div class="right-align">
        <Link to="/login" className="NavBar-link">
          Log In
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/signup" className="NavBar-link">
          Sign Up
        </Link>
        &nbsp;&nbsp;
      </div>
    </nav>
  );

  return <div>{nav}</div>;
};

export default NavBar;
