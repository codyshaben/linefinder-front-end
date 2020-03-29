import React, { useState, useEffect }from 'react'
import './SignupLogin.scss'

const Login = (props) => {
    const { setSuccessfulLogin } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSending, setIsSending] = useState(false)

    useEffect(() => {
        const signupUrl = 'https://linefinder-back-end.herokuapp.com/auth/login'

        const data = {
            email: email,
            password: password,
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
                setSuccessfulLogin(true)
            });
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSending(true)
        alert('Log in successful!')
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
    )
}

export default Login