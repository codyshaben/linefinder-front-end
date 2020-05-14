import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss'


const UserNav = (props) => {
    const { id } = props

    const logOut = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user_id')
        window.location = '/login'
      };

    return (
      <div className='nav' id='user-nav'>
        <Link to={`/home/${id}`}className='loggedIn-nav'>Dashboard</Link>
        <Link to={`/home/${id}/message-board`} className='loggedIn-nav'>Message Board</Link>
        <Link to={`/home/${id}/all-trails`} className='loggedIn-nav'>All Trails</Link>
        <Link 
          to='/login'
          className='loggedIn-nav' 
          onClick={logOut}
        >Log Out
        </Link>
      </div>
    );
  };

  export default UserNav