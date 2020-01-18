import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import SignupPage from './src/pages/SignupPage'
import LoginPage from './src/pages/LoginPage'

class App extends Component {
  render() {
  return (
    <div className="App">
    <header>Family Feed</header>
    <Switch>
      <Route exact path='/' render={() =>
        <NavBar />
      }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
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
