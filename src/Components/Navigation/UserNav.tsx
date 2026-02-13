import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

interface UserNavProps {
  id: string
}

const UserNav: React.FC<UserNavProps> = ({ id }) => {
  const logOut = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user_id')
    window.location.href = '/login'
  }

  return (
    <div className={`${styles.nav} ${styles.userNav}`} id="user-nav">
      <Link to={`/home/${id}`} className={styles.loggedInNav}>
        Dashboard
      </Link>
      <Link to={`/home/${id}/message-board`} className={styles.loggedInNav}>
        Message Board
      </Link>
      <Link to={`/home/${id}/all-trails`} className={styles.loggedInNav}>
        All Trails
      </Link>
      <Link to="/login" className={styles.loggedInNav} onClick={logOut}>
        Log Out
      </Link>
    </div>
  )
}

export default UserNav