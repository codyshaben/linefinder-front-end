import React from 'react'
import { Link } from 'react-router-dom';

const PublicNav = () => {
    return (
      <nav id='login-signup-nav'>
        <Link to='/login' >Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/'>Home</Link>
      </nav>
    );
  };

export default PublicNav