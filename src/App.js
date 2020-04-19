import React, { useState, useEffect } from 'react';
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
  const id = sessionStorage.user_id
  const [user, setUser] = useState({});
  const [userTrails, setUserTrails] = useState([]);
  
  useEffect(() => {

    async function fetchData() {
        await fetch(`http://localhost:9000/users/${id}`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.token}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log('result', result)
                // console.log('localstorage id', localStorage.user_id)
                // console.log('params id', id)
                if (result.message === 'Un-Authorized') {
                    window.location = 'http://localhost:3001/login'
                } else {
                    setUser(result.data)
                    setUserTrails(result.data.trails)
                }
            })
            .catch(handleError);
    };
    if (id) {
      fetchData()
    };
}, [setUser]);

const handleError = (error) => {
    console.error(error)
};
  
  const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user_id')
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
        <Link to='/'>Main</Link>
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
            <AllTrails user={user} id={id} userTrails={userTrails}/>
          </Route>
          <Route path={`/home/${id}/message-board`}>
            <MessageBoard user={user} id={id}/>
          </Route>
          <Route path={`/home/${id}`}>
            <UserHome 
              setUser={setUser} 
              userTrails={userTrails} 
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