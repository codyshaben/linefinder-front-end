import React, { useState, useEffect } from 'react';
import './SignupLogin.scss';

const Signup = (props) => {
    const { setUserLoggedIn, firstName, setFirstName } = props

    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        const signupUrl = 'https://linefinder-back-end.herokuapp.com/auth/signup'

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
            .then(json => json)
            .catch(error => console.log(error))
        };
        if (isSending === true) {
            postData()
            .then(() => {
                setIsSending(false)
                setUserLoggedIn(true)
            });
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSending(true)
        alert('Account created successfully!')
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
        <div className='signup-login'>
            <form onSubmit={handleSubmit}>
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
    );
};

export default Signup;