import React, { useState, useEffect, FormEvent } from 'react'
import './SignupLogin.css'
import ShowLoading from '../ShowLoading/ShowLoading'
import PublicNav from '../Navigation/PublicNav'

const Signup: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    const signupUrl = 'https://linefinder-back-end.herokuapp.com/auth/signup'
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    }

    async function postData() {
      await fetch(signupUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sessionStorage.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result: { message?: string; token?: string; id?: string }) => {
          if (result.message === 'ok' && result.token && result.id) {
            sessionStorage.token = result.token
            sessionStorage.user_id = result.id
            window.location.href = `/home/${result.id}`
          } else {
            setIsLoading(false)
            const el = document.getElementById('login-response')
            if (el) el.innerText = result.message ?? ''
          }
        })
    }
    if (isSending) {
      setIsLoading(true)
      postData().then(() => setIsSending(false))
    }
  }, [isSending, email, firstName, lastName, password])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setIsSending(true)
  }
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const validatePassword = () => {
    const passwordEl = document.getElementById('password') as HTMLInputElement
    const confirmEl = document.getElementById('password_confirmation') as HTMLInputElement
    const messageEl = document.getElementById('message')
    if (!messageEl) return
    if (passwordEl?.value === confirmEl?.value) {
      messageEl.style.color = 'green'
      messageEl.innerText = '✔'
    } else {
      messageEl.style.color = 'red'
      messageEl.innerText = 'Not Matching'
    }
  }

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
            name="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <input
            className="form-input"
            type="text"
            name="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
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
            id="password"
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onKeyUp={validatePassword}
            required
          />
          <input
            id="password_confirmation"
            className="form-input"
            type="password"
            name="password-confirmation"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            onKeyUp={validatePassword}
            required
          />
          <span id="message"></span>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  )
}

export default Signup
