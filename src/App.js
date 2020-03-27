import React, { useState } from 'react';
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
  const [isHomeShowing, setIsHomeShowing] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState('')

  const hideHome = () => setIsHomeShowing(false)

  return ( 
    <Router>
      <div className="App">
        <header>
          <a href='/' className='lineFinder'>lineFinder</a>
          <nav className='login-signup-nav'>
              <Link to='/login'>Log In</Link>
              <Link to='/signup'>Sign Up</Link>
          </nav>
        </header>
        {userLoggedIn === true ? <Redirect to='/home'/> : <Redirect to='/'/>}
        <Switch>
          <Route path='/'>
            <PublicHome />
          </Route>
          <Route path='/login'>
            <Login 
              setUserLoggedIn={setUserLoggedIn}
            />
          </Route>
          <Route path='/signup'>
            <Signup 
              setUserLoggedIn={setUserLoggedIn}
              firstName={firstName}
              setFirstName={setFirstName}
            />
          </Route>
          <Route path='/home'>
            <UserHome 
              firstName={firstName}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
