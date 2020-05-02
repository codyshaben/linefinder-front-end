import React, { useState, useEffect } from 'react';
import './SignupLogin.scss';
import '../UserHome/UserHome.scss'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        const loginUrl = 'https://linefinder-back-end.herokuapp.com/auth/login';

        const user = {
            email: email,
            password: password,
        };

        async function postData() {
            await fetch(loginUrl, {
                credentials: true,
                method: 'POST',
                headers: {
                    Authorization:  `Bearer ${localStorage.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    if (result.message === 'Invalid login') {
                        document.getElementById('login-response').innerText = result.message
                    } else {
                        sessionStorage.token = result.token
                        sessionStorage.user_id = result.id
                        window.location = (`/home/${result.id}`)
                    }
                })
                .catch(error => {
                    console.error(error)
                });
        };
        if (isSending) {
            postData()
                .then(() => {
                    setIsSending(false)
                });
        };
    });


    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSending(true)
    };

    const handleEmailChange = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    };

    return (
            <div className='signup-login'>
                <form onSubmit={handleSubmit}>
                    <div id='login-response'></div>
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
                    <button type='submit'>Log In</button>
                </form>
            </div>
    );
};

export default Login;