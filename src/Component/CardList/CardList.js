import React from 'react';
import Card from '../Card/Card';

const CardList = ({ robots }) => {
  return (
    <div>
      <Card robots={robots}/>
    </div>
  );
}

export default CardList;