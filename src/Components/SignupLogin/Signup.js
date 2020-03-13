import React from 'react'
import './SignupLogin.scss'

const Signup = () => {
    return(
        <div className='signup-login'>
            <form>
                <input className='form-input' type='text' name="first-name" placeholder='First Name'/>
                <input className='form-input' type='text' name="last-name" placeholder='Last Name'/>
                <input className='form-input' type='text' name="email" placeholder='Email'/>
                <input className='form-input' type='password' name="password" placeholder='Password'/>
                <input className='form-input' type='password' name="password-confirmation" placeholder='Confirm Password'/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup