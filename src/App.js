import React, { useState, useEffect } from 'react';
import './App.scss';
import Places from './Components/Places/Places'
import People from './Components/People/People'
import Home from './Components/Home/Home'

function App() {

  const [showPlaces, setShowPlaces] = useState(false)
  const [showPeople, setShowPeople] = useState(false)

  const showHome = () => {
    return <Home 
      setShowPlaces={setShowPlaces}
      setShowPeople={setShowPeople}
      />
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
      {
        showPlaces === true ? <Places /> : (showPeople === true ? <People /> : showHome())
      }
    </div>
  );
}

export default App;
