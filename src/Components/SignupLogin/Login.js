import React from 'react'
import './SignupLogin.scss'

const Login = () => {
    return(
        <div className='signup-login'>
            <form>
                <input className='form-input' type='text' name="email" placeholder='Email'/>
                <input className='form-input' type='password' name="password" placeholder='Password'/>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login