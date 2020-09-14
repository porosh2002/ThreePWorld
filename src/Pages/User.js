import React from 'react'
import { Redirect } from 'react-router-dom'
import DU from '../Component/DsbrdUSR/DU'
export default function User() {
    return (
        <div>
            <DU />
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : MD Jamil Kashem Porosh</p>
                <p className='title-des'>Email : jamilkashem@zoho.com</p>
            </div>
            <form className='update-form'>
                <input type='name' placeholder='Enter new Name'></input>
                <input type='email' placeholder='Enter new Email'></input>
                <input type='password' placeholder='Enter new Password'></input>
                <input type='submit' value='Update Profile'></input>
            </form>
                <p className='title-des-btn'>Delete Account</p>
        </div>
    )
}
