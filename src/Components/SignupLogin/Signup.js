import React, { useState, useEffect } from 'react';
import './SignupLogin.scss';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom'

const Signup = (props) => {
    const { firstName, setFirstName } = props

    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        const signupUrl = 'http://localhost:3000/auth/signup'

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        }

        async function postData() {
            await fetch(signupUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                if (result.message === 'success') {
                    window.location = `/home/${result.id}`
                } else {
                    document.getElementById('login-response').innerText = result.message
                }
            })
        };
        if (isSending === true) {
            postData()
            .then(() => {
                setIsSending(false)
            });
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSending(true)
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return(
        <Router>
        <div className='signup-login'>
            <form onSubmit={handleSubmit}>
                <div id='login-response'></div>
                <input 
                    className='form-input' 
                    type='text' 
                    name="first-name" 
                    placeholder='First Name'
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                />
                <input 
                    className='form-input' 
                    type='text' 
                    name="last-name" 
                    placeholder='Last Name'
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                />
                <input 
                    className='form-input' 
                    type='text' 
                    name="email" 
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input 
                    className='form-input' 
                    type='password' 
                    name="password" 
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <input 
                    className='form-input' 
                    type='password' 
                    name="password-confirmation" 
                    placeholder='Confirm Password'
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        {/* <Switch>
            {successfulSignup === true ? <Redirect from='/signup' to='/login' /> : null}
            <Route path='/login'>
                <Login />
            </Route>
        </Switch> */}
        </Router>
    );
};

export default Signup;