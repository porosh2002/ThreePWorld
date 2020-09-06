import React from 'react'

export default function Card({name,price,offer,imageID}) {
  console.log(name,price,offer,imageID);
  return (
    <div className='card'>
      {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> */}
      <div>
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{offer}</p>
        <p>{imageID}</p>
      </div>
    </div>
  )
}

