import React from 'react'
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
        <a href={`/home/${id}`}className='loggedIn-nav'>Dashboard</a>
        <a href={`/home/${id}/message-board`} className='loggedIn-nav'>Message Board</a>
        <a href={`/home/${id}/all-trails`} className='loggedIn-nav'>All Trails</a>
        <a 
          href='/login'
          className='loggedIn-nav' 
          onClick={logOut}
        >Log Out</a>
      </div>
    );
  };

  export default UserNav