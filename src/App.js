import React, { useState } from 'react';
import Login from './Components/SignupLogin/Login';
import Signup from './Components/SignupLogin/Signup';
import UserHome from './Components/UserHome/UserHome';
import PublicHome from './Components/PublicHome/PublicHome';
import AllTrails from './Components/UserHome/AllTrails';
import MessageBoard from './Components/UserHome/MessageBoard'
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  const id = localStorage.user_id
  const [user, setUser] = useState({});
  const [userTrails, setUserTrails] = useState([]);
  
  const logOut = () => {
    localStorage.removeItem('token')
    window.location = 'http://localhost:3001/login'
  };

  const loggedInNav = () => {
    return (
      <div>
        <Link to={`/home/${id}`} className='loggedIn-nav'>Home</Link>
        <Link to={`/home/${id}/message-board`} className='loggedIn-nav'>Message Board</Link>
        <Link to={`/home/${id}/all-trails`} className='loggedIn-nav'>All Trails</Link>
        <Link 
          to='/login'
          className='loggedIn-nav' 
          onClick={logOut}
        >Log Out</Link>
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
          {localStorage.token ? loggedInNav() : loggedOutNav()}
        </header>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path={`/home/${id}/all-trails`}>
            <AllTrails user={user} id={id}/>
          </Route>
          <Route path={`/home/${id}/message-board`}>
            <MessageBoard user={user} id={id}/>
          </Route>
          <Route path={`/home/${id}`}>
            <UserHome 
              setUser={setUser} 
              setUserTrails={setUserTrails} 
              user={user}
              id={id}
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