import React, { useState } from 'react';
import Login from './Components/SignupLogin/Login';
import Signup from './Components/SignupLogin/Signup';
import PublicHome from './Components/PublicHome/PublicHome';
import AllTrails from './Components/UserHome/AllTrails'
import MessageBoard from './Components/UserHome/MessageBoard'
import UserHome from './Components/UserHome/UserHome'
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  const id = sessionStorage.user_id
  const [user, setUser] = useState('')
  
  const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user_id')
    window.location = '/login'
  };

  const loggedInNav = () => {
    return (
      <div>
        <Link to={`/home/${id}`} className='loggedIn-nav'>Dashboard</Link>
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
          {sessionStorage.token ? loggedInNav() : loggedOutNav()}
        </header>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path={`/home/${id}/all-trails`}>
            <AllTrails user={user} id={id} />
          </Route>
          <Route path={`/home/${id}/message-board`}>
            <MessageBoard user={user} id={id}/>
          </Route>
          <Route path={`/home/:id`}>
            <UserHome 
              user={user}
              id={id}
              setUser={setUser}
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