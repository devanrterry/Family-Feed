import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import * as postAPI from "./utils/postService";
import NavBar from "./components/NavBar/NavBar";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EditPostPage from "./pages/EditPostPage/EditPostPage";
import userService from "./utils/userService";
import MainPage from "./components/MainPage/MainPage";
import postService from "./utils/postService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      posts: []
    };
  }

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postAPI.update(updatedPostData);
    const newPostsArray = this.state.posts.map(p =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState({ posts: newPostsArray }, () => this.props.history.push("/"));
  };

  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(
      state => ({
        posts: [...state.posts, newPost]
      })
     
    );
  };

  handleDeletePost = async id => {
    await postAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        posts: state.posts.filter(p => p._id !== id)
      }),
      () => this.props.history.push("/")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async componentDidMount() {
    const posts = await postService.getAll();
    this.setState({ posts });
  }

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <NavBar
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
                
                <div >
                
                  <MainPage
                    user={this.state.user}
                    posts={this.state.posts}
                    handleAddPost={this.handleAddPost}
                    handleDeletePost={this.handleDeletePost}
                    handleUpdatePost={this.handleUpdatePost}
                  />
                </div>
              </div>
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
          <Route
            exact
            path="/edit"
            render={({ location }) => (
              <EditPostPage
                handleUpdatePost={this.handleUpdatePost}
                location={location}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
