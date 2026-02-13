import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/SignupLogin/Login'
import Signup from './components/SignupLogin/Signup'
import PublicHome from './components/PublicHome/PublicHome'
import UserHome from './components/UserHome/UserHome'

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home/:id/*" element={<UserHome />} />
          <Route path="/" element={<PublicHome />} />
        </Routes>
    </Router>
  )
}

export default App
