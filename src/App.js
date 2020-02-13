import React from 'react';
import './App.scss';
import Home from './Components/Home/Home'


function App() {

  return (
    <div className="App">
      <header>
        <h1>lineFinder</h1>
        <nav>
          <a>Log In</a>
          <a>Sign Up</a>
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;
