import React from 'react'
import './SignupLogin.scss'

const Login = (props) => {
    const { hideHome } = props
    return(
        <div className='signup-login'>
            {hideHome()}
            <form>
                <input className='form-input' type='text' name="email" placeholder='Email'/>
                <input className='form-input' type='password' name="password" placeholder='Password'/>
                <input className='form-input' type='password' name="password-confirmation" placeholder='Confirm Password'/>
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login