import React, { useState, useEffect } from 'react';
import './App.scss';
import Home from './Components/Home/Home'

function App() {

  const [showHome, setShowHome] = useState(true)

  const showHomeComponent = () => {
    return showHome === true ?
      <Home />
    :null
  }

  return ( 
    <div className="App">
      <header>
        <h1>lineFinder</h1>
        <nav>
          <a>Log In</a>
          <a>Sign Up</a>
        </nav>
      </header>
      {showHomeComponent()}
    </div>
  );
}

export default App;
