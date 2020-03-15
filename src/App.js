import React, { useState } from 'react';
import './App.scss';
import Home from './Components/Home/Home';
import {useRoutes, A} from 'hookrouter';
import Login from './Components/SignupLogin/Login'
import Signup from './Components/SignupLogin/Signup'



function App() {
  const [isHomeShowing, setIsHomeShowing] = useState(true);
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const hideHome = () => setIsHomeShowing(false)
  const showHome = () => setIsHomeShowing(true)

  const routes =  {
    '/signup': () => <Signup hideHome={hideHome} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>,
    '/login': () => <Login hideHome={hideHome} userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>,
  };

  const routeResult = useRoutes(routes);

  return ( 
    <div className="App">
      <header>
        <a href='/' className='lineFinder'>lineFinder</a>
        <nav>
          <A href='/login' onClick={hideHome}>Log In</A>
          <A href='/signup' onClick={hideHome}>Sign Up</A>
        </nav>
      </header>
      {isHomeShowing === true ? <Home /> :null}
      {routeResult}
    </div>
  );
};

export default App;
