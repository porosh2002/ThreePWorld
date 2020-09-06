import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map(data=>{
          return (
            <div className='opscard'>
              <Card name={data.iteam} price={data.price} offer={data.offer} imageID={data.imageID}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default CardList;