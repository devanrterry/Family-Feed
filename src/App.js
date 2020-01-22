import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import * as postAPI from './utils/postService';
import NavBar from "./components/NavBar/NavBar";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import userService from "./utils/userService";
import MainPage from "./components/MainPage/MainPage"
import postService from "./utils/postService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      posts: []
    };
  }

  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(state => ({
      posts: [...state.posts, newPost]
    }),
    // Using cb to wait for state to update before rerouting
    // () => this.props.history.push('/')
    );
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const posts = await postService.getAll();
    this.setState({posts});
  }

  render() {
    return (
      <div className="App">
        <header>Family Feed</header>
        <ToastContainer />
        <Switch>
        <Route
            exact
            path="/"
            render={() => (
              <NavBar user={this.state.user} handleLogout={this.handleLogout} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Switch>
        <div>
          <MainPage 
          user={this.state.user}
          posts={this.state.posts}
          handleAddPost={this.handleAddPost}
          />
        </div>
      </div>
    );
  }
}

export default App;
