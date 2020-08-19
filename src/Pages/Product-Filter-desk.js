import React, { Component } from 'react'

export default class Product_Filter_desk extends Component {
    render() {
        return (
        <div className='product-filter'>
            <p className=' title-filter title-main-f'>Filters</p>
           <p className='title-filter'>CATEGORIES</p>
           {/* {Catagories} */}
           <p className='title-filter'>BRAND</p>
           {/* {brand} */}
           <p className='title-filter'>PRICE</p>
           {/* {price} */}
           <p className='title-filter'>COLOR</p>

           <p className='title-filter'>SIZE</p>
           {/* {Size} */}
           <p className='title-filter'>STORE BY</p>
           {/* {Story BY} */}
           <p className='title-filter'>DISCOUNT RANGE</p>
           {/* {offer} */}
        </div>
        )
    }
}

