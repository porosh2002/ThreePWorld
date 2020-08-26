import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div>
            <form>
                <div className='form-login'>
                <p className='title-login'>Login</p>
                <input className='email-input' type='email' placeholder='e.g. example@example.com' />
                <input className='password-input' type='password' placeholder='Enter Your Password Here' />
                <input className='submit-input' type='submit' value='Login'/>
                <Link className='undr-form' to='/Register' >Create New Account</Link>
                <Link className='undr-form' to='' >Forgot Password</Link>
                </div>
            </form>
        </div>
    )
}
