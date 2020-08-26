import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Signup extends Component {
    Submit=()=>{
        }
    render() {
        return (
            <div>
            <form>
                <div className='form-login'>
                <p className='title-login'>Sign UP</p>
                <input className='password-input' type='name' placeholder='Enter Your Name :' />
                <input className='email-input' type='email' placeholder='Enter Your Email :' />
                <input className='password-input' type='password' placeholder='Enter New Password Here' />
                <input className='password-input' type='password' placeholder='Re-Enter New Password Here' />
                <input className='password-input' type='password' placeholder='Enter Your Address' />
                <input className='password-input' type='password' placeholder='Enter Your district' />
                <input className='password-input' type='password' placeholder='Referral Number (Optional)' />
                <input className='submit-input' onClick={this.Submit()} type='submit' value='Submit'/>
                <Link className='undr-form' to='/Login' >Log In</Link>
                <Link className='undr-form' to='' >Forgot Password</Link>
                </div>
            </form>
        </div>
        )
    }
}
