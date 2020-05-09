import React, { useState, useEffect } from 'react';
import './SignupLogin.scss';
import ShowLoading from '../ShowLoading/ShowLoading';
import PublicNav from '../Navigation/PublicNav';

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        const signupUrl = 'https://linefinder-back-end.herokuapp.com/auth/signup';

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };

        async function postData() {
            await fetch(signupUrl, {
                method: 'POST',
                headers: {
                    Authorization:  `Bearer ${sessionStorage.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.message === 'ok') {
                        sessionStorage.token = result.token;
                        sessionStorage.user_id = result.id;
                        window.location = `/home/${result.id}`;
                    } else {
                        setIsLoading(false);
                        document.getElementById('login-response').innerText = result.message;
                    };
                });
        };
        if (isSending) {
            setIsLoading(true);
            postData()
                .then(() => {
                    setIsSending(false);
                });
        };
    }, [isSending, email, firstName, lastName, password]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSending(true);
    };

    const handleFirstNameChange = (event) => setFirstName(event.target.value);
    const handleLastNameChange = (event) => setLastName(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    const validatePassword = () => {
        if(document.getElementById('password').value === document.getElementById('password_confirmation').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerText = '✔';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerText = 'Not Matching';   
        };
    };

    return (
        <div className='signup-login'>
            <PublicNav />
            {loading ? <ShowLoading /> : 
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
                        id='password'
                        className='form-input'
                        type='password'
                        name="password"
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                        onKeyUp={validatePassword}
                        required
                    />
                    <input
                        id='password_confirmation'
                        className='form-input'
                        type='password'
                        name="password-confirmation"
                        placeholder='Confirm Password'
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        onKeyUp={validatePassword}
                        required
                    />
                    <span id='message'></span>
                    <button type='submit'>Sign Up</button>
                </form>
            }
        </div>
    );
};

export default Signup;