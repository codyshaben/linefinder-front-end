import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const PublicNav: React.FC = () => {
  return (
    <nav className={`${styles.nav} ${styles.publicNav}`} id="public-nav">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default PublicNav