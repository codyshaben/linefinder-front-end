import React, { useState } from 'react';
import Login from './Components/SignupLogin/Login';
import Signup from './Components/SignupLogin/Signup';
import UserHome from './Components/UserHome/UserHome';
import PublicHome from './Components/PublicHome/PublicHome';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  const [id, setId] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const myTrails = () => window.location = `http://localhost:3001/home/${id}/mytrails`;
  const allTrails = () => window.location = `http://localhost:3001/home/${id}/alltrails`;
  const userHome = () => window.location = `http://localhost:3001/home/${id}`;
  
  const logOut = () => {
    localStorage.removeItem('token')  
    window.location = 'http://localhost:3001/login'
  };

  const loggedInNav = () => {
    return (
      <div>
        <Link
          to={`/home/${id}`}
          className='loggedIn-nav'
          onClick={userHome}
        >Home</Link>
        <Link
          to={`/home/${id}/mytrails`}
          className='loggedIn-nav'
          onClick={myTrails}
        >My Trails</Link>
        <Link
          to={`/home/${id}/alltrails`}
          className='loggedIn-nav'
          onClick={allTrails}
        >All Trails</Link>
        <button className='loggedIn-nav' onClick={logOut}>Log Out</button>
      </div>
    );
  };

  const loggedOutNav = () => {
    return (
      <nav className='login-signup-nav'>
        <Link to='/login' >Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/'>Home</Link>
      </nav>
    );
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1 className='lineFinder'>lineFinder</h1>
          {isLoggedIn === true ? loggedInNav() : loggedOutNav()}
        </header>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/home/:id'>
            <UserHome
              setId={setId}
              setIsLoggedIn={setIsLoggedIn}
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
