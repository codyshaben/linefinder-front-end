import React from 'react'
import './Nav.scss'


const UserNav = (props) => {
    const { id } = props

    const logOut = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user_id')
        window.location = '/login'
      };

    const handleDashboardClick = (e) => {
      e.stopPropagation()
      window.location = `/home/${id}`
    }

    const handleMessageBoardClick = (e) => {
      e.stopPropagation()
      window.location = `/home/${id}/message-board`
    }

    const handleAllTrailsClick = (e) => {
      e.stopPropagation()
      window.location = `/home/${id}/all-trails`
    }

    return (
      <div className='nav' >
        <a onClick={handleDashboardClick} className='loggedIn-nav'>Dashboard</a>
        <a onClick={handleMessageBoardClick} className='loggedIn-nav'>Message Board</a>
        <a onClick={handleAllTrailsClick} className='loggedIn-nav'>All Trails</a>
        <a 
          to='/login'
          className='loggedIn-nav' 
          onClick={logOut}
        >Log Out</a>
      </div>
    );
  };

  export default UserNav