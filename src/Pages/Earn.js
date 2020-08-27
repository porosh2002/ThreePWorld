import React from 'react'
import DU from '../Component/DsbrdUSR/DU'
export default function User() {
    return (
        <div>
            <DU />
            <div  className='dsbrd-cntnt'>
                <p className='title'>Earn From Affiliate</p>
                <p className='title-des'>৳ 500</p>
                <form>
                <input type='submit' className='withdrawform' value='Withdraw'></input>
            </form>
                </div>
        </div>
    )
}