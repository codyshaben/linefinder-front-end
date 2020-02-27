import React, { useState } from 'react';
import './App.scss';
import Home from './Components/Home/Home';

function App() {

  const [showHome] = useState(true);

  return ( 
    <div className="App">
      <header>
        <a href='/' className='lineFinder'>lineFinder</a>
        {/* <nav>
          <a>Log In</a>
          <a>Sign Up</a>
        </nav> */}
      </header>
      {showHome === true ? <Home /> :null}
    </div>
  );
};

export default App;
