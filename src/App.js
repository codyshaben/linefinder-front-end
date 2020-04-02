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
  useParams,
} from 'react-router-dom'

function App() {
  
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')

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
          <Route path='/login'>
            <Login 
              setFirstName={setFirstName}
              firstName={firstName}
              setId={setId}
            />
          </Route>
          <Route path='/signup'>
            <Signup 
              firstName={firstName}
              setFirstName={setFirstName}
            />
          </Route>
          <Route path='/home/:id'>
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
