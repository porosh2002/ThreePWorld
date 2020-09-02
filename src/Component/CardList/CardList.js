import React from 'react'
import Card from '../Card/Card'
export default function CardList({data}) {
    return (    
        <div>
        {
          data.map((data) => {
            return (
              <Card

                />
            );
          })
        }
      </div>
    )
}


