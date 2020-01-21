import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import userService from './utils/userService'


handleLogout = () => {
  userService.logout();
  this.setState({user: null});
}

handleSignup = () => {
  this.setState({user: userService.getUser()});
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    }
  }
  render() {
  return (
    <div className="App">
    <header>Family Feed</header>
    <Switch>
      <Route exact path='/' render={() =>
        <NavBar 
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
      }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignup={this.handleSignup}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
    </Switch>
    </div>
    
  );
}
}

export default App;
