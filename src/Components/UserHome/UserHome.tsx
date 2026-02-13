import React, { useEffect, useState } from 'react'
import styles from './UserHome.module.css'
import AllTrails from './AllTrails'
import MessageBoard from './MessageBoard'
import UserNav from '../Navigation/UserNav'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import type { User, Trail } from '../../types'

const UserHome: React.FC = () => {
  const id = sessionStorage.user_id

  const [user, setUser] = useState<User | ''>('')
  const [userTrails, setUserTrails] = useState<Trail[]>([])
  const [fetchUserTrails, setFetchUserTrails] = useState(true)

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://linefinder-back-end.herokuapp.com/users/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result: { message?: string; data?: User }) => {
          if (result.message === 'Un-Authorized') {
            redirectToLogin()
          } else if (result.data) {
            setUser(result.data)
            setUserTrails(result.data.trails ?? [])
          }
        })
        .catch(handleError)
    }
    if (fetchUserTrails) {
      fetchData()
      setFetchUserTrails(false)
    }
  }, [id, fetchUserTrails])

  const handleError = (error: unknown) => console.error(error)
  const redirectToLogin = () => (window.location.href = '/login')

  return (
    <Router>
      <div className={styles.userHome}>
        <UserNav id={id} />
        <Routes>
          <Route
            path="all-trails"
            element={
              <AllTrails
                user={user}
                id={id}
                userTrails={userTrails}
                setUserTrails={setUserTrails}
                setFetchUserTrails={setFetchUserTrails}
              />
            }
          />
          <Route path="message-board" element={<MessageBoard user={user} id={id} />} />
          <Route
            path="/"
            element={
              <Dashboard
                user={user}
                id={id}
                userTrails={userTrails}
                handleError={handleError}
                setUserTrails={setUserTrails}
                setFetchUserTrails={setFetchUserTrails}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default UserHome
