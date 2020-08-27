import React from 'react'
import DU from '../Component/DsbrdUSR/DU'
export default function User() {
    return (
        <div>
            <DU />
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : MD Jamil Kashem Porosh</p>
                <p className='title-des'>Email : jamilkashem@zoho.com</p>
                <p className='title-des-btn'>UPdate Profile</p>
                <p className='title-des-btn'>Delete Account</p>
            </div>
            <form className='update-form'>
                <input type='name' placeholder='Enter new Name'></input>
                <input type='email' placeholder='Enter new Email'></input>
                <input type='password' placeholder='Enter new Password'></input>
                <input type='submit' value='Update'></input>
            </form>
        </div>
    )
}
