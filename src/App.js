import React, { useState, useEffect } from 'react';
import Login from './Components/SignupLogin/Login'
import Signup from './Components/SignupLogin/Signup'
import UserHome from './Components/UserHome/UserHome'
import PublicHome from './Components/PublicHome/PublicHome'
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

function App() {
  
  const [firstName, setFirstName] = useState('')
  const [successfulSignup, setSuccessfulSignup] = useState(false)
  const [successfulLogin, setSuccessfulLogin] = useState(false)


  return ( 
    <Router>
      <div className="App">
        <header>
          <a href='/' className='lineFinder'>lineFinder</a>
          <nav className='login-signup-nav'>
              <Link to='/login' >Log In</Link>
              <Link to='/signup'>Sign Up</Link>
          </nav>
        </header>
        <Switch>
          {successfulSignup === true ? <Redirect from='/signup' to='/login' /> : null}
          {successfulLogin === true ? <Redirect from='/login' to='/home' /> : null}
          <Route path='/login'>
              <Login 
              setSuccessfulLogin={setSuccessfulLogin}
              setFirstName={setFirstName}
              firstName={firstName}/>
          </Route>
          <Route path='/signup'>
            <Signup 
              firstName={firstName}
              setFirstName={setFirstName}
              setSuccessfulSignup={setSuccessfulSignup}
            />
          </Route>
          <Route path='/home'>
            <UserHome 
              firstName={firstName}
              />
          </Route>
          <Route exact path='/'>
            <PublicHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
