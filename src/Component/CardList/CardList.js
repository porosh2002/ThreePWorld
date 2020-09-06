import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
  const {iteam,price,offer,imageID} = robots[0];
  return (
    <div>
      <Card name={iteam} price={price} offer={offer} imageID={imageID}/>
    </div>
  );
}

export default CardList;