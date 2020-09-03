import React from 'react';

const Card = ({ iteam, price}) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/2?size=200x200`} />
      <div>
        <h2>{iteam}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}
export default Card;