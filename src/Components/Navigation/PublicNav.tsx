import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const PublicNav: React.FC = () => {
  return (
    <nav className="nav" id="public-nav">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default PublicNav