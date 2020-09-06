import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state={
      image:[]
    }
  }
  render() {
    const {name,price,offer,imageID} = this.props
    return (
    <div className='card'>
      {/* <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} /> */}
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{offer}</p>
        <p>{imageID}</p>
      </div>
      </div>
    )
  }
}
