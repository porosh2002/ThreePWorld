import React from 'react'
import { Link } from 'react-router-dom'

export default function DU() {
    return (
        <div className='dsbrd'>
<div className='links-dsbrd'>
<Link className='dsLnk' to=''>Profile</Link>
            <Link className='dsLnk' to=''>Earn</Link>
            <Link className='dsLnk' to='/Login'>Logout</Link>
</div>
        </div>
    )
}
