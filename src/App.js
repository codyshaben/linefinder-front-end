import React, { useState } from 'react';
import './App.scss';
import Home from './Components/Home/Home';
import {useRoutes, A} from 'hookrouter';
import Login from './Components/SignupLogin/Login'
import Signup from './Components/SignupLogin/Signup'

const routes =  {
  '/signup': () => <Signup />,
  '/login': () => <Login />,
};

function App() {
  const [showHome, setShowHome] = useState(true);
  const routeResult = useRoutes(routes);

  const hideHome = () => setShowHome(false)

  return ( 
    <div className="App">
      <header>
        <a href='/' className='lineFinder'>lineFinder</a>
        <nav>
          <A href='/login' onClick={hideHome}>Log In</A>
          <A href='/signup' onClick={hideHome}>Sign Up</A>
        </nav>
      </header>
      {showHome === true ? <Home /> :null}
      {routeResult}
    </div>
  );
};

export default App;
