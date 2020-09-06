import React, { Component,Suspense } from 'react'

export default class Card extends Component {
  componentDidMount(){
     fetch('http://localhost:5000/geTiMagE/kelfzq6b')
      .then(users => { this.setState({ image: users})});
  }
  constructor(props){
    super(props);
    this.state={
      image:[],
    }
  }
  render() {
    console.log(this.state.image.url);
    const {name,price,offer,imageID} = this.props;
    // if(this.state.image.length>0){
    //   this.setState({imageURL:'data:image/;base64' + this.state.image[0].image1.data})
    // }
    return (
<div>
{this.state.image.url !== null ? (
        <Suspense fallback={<p>...</p>}>
    <div className='card'>
      <div>
        <img src={this.state.image.url} />
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
      )}
</div>

    )
  }
}
