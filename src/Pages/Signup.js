import React from 'react'
import {Link} from 'react-router-dom'
export default function Login() {
    return (
        <div>
            <form>
                <div className='form-login'>
                <p className='title-login'>Sign UP</p>
                <input className='password-input' type='password' placeholder='Enter Your Name :' />
                <input className='email-input' type='email' placeholder='Enter Your Email :' />
                <input className='password-input' type='password' placeholder='Enter New Password Here' />
                <input className='password-input' type='password' placeholder='Re-Enter New Password Here' />
                <input className='password-input' type='password' placeholder='Referral Number (Optional)' />
                <input className='submit-input' type='submit' value='Login'/>
                <Link className='undr-form' to='/Login' >Log In</Link>
                <Link className='undr-form' to='' >Forgot Password</Link>
                </div>
            </form>
        </div>
    )
}
