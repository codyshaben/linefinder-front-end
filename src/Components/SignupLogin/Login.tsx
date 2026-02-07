import React, { useState, useEffect, FormEvent } from 'react'
import './SignupLogin.css'
import '../UserHome/UserHome.css'
import PublicNav from '../Navigation/PublicNav'
import ShowLoading from '../ShowLoading/ShowLoading'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    const loginUrl = 'https://linefinder-back-end.herokuapp.com/auth/login'
    const user = { email, password }

    async function postData() {
      await fetch(loginUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((result: { message?: string; token?: string; id?: string }) => {
          if (result.message === 'Invalid login') {
            setIsLoading(false)
            const el = document.getElementById('login-response')
            if (el) el.innerText = result.message
          } else if (result.token && result.id) {
            sessionStorage.token = result.token
            sessionStorage.user_id = result.id
            window.location.href = `/home/${result.id}`
          }
        })
        .catch((error) => console.error(error))
    }
    if (isSending) {
      setIsLoading(true)
      postData().then(() => setIsSending(false))
    }
  }, [email, password, isSending])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsSending(true)
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)

  return (
    <div className="signup-login">
      <PublicNav />
      {loading ? (
        <ShowLoading />
      ) : (
        <form onSubmit={handleSubmit}>
          <div id="login-response"></div>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <a href="/signup">New user?</a>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  )
}

export default Login
