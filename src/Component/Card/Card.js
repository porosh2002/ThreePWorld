import React, { Component,Suspense } from 'react'

export default class Card extends Component {
  componentDidMount(){
    console.log('Did render');
     fetch('http://localhost:5000/geTiMagE/kelfzq6b')
      .then(response=> response.json())
      .then(users => { this.setState({ image: users})});
  }
  constructor(props){
    super(props);
    this.state={
      image:[]
    }
  }
  render() {
    // const {name,price,offer,imageID} = this.props
    // console.log(this.state.image);
    console.log('Card Component');
    console.log(this.state.image);
    return (
<div>
{/* {this.state.image.length > 0 ? (
        <Suspense fallback={<p>...</p>}>
    <div className='card'>
      
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{offer}</p>
        <p>{imageID}</p>
      </div>
      </div>
        </Suspense>
      ) : (
        <Suspense fallback={<p>...</p>}>
          <div></div>
        </Suspense>
      )} */}
</div>

    )
  }
}
