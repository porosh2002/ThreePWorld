import React, { Component, Suspense } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      imageID:this.props.imageID
    };
  }
  componentDidMount() {
    if(this.state.imageID !== 0){
      console.log(this.state.image);
      fetch(`http://localhost:5000/geTiMagE/${this.state.imageID}`).then(
        (users) => {
          this.setState({ image: users });
        }
      );
    }
  }

  render() {
    console.log(this.props);
    const { name, price, offer, imageID } = this.props;
    return (
      <div>
        {this.state.image.url !== null ? (
          <Suspense fallback={<p>...</p>}>
            <Link className="card">
              <div>
                <img className='card-img' src={this.state.image.url} />
                <h3 className='card-title'>{name}</h3>
                <p className='ofr-price'>TK: {price}</p><p className='offerprice'>TK : 122</p><p className='offerprice ofrprcnt'>(20% off)</p>
                <p className='ofr-price ofr-card'>{offer}</p>
              </div>
            </Link>
          </Suspense>
        ) : (
          <Suspense fallback={<p>...</p>}>
            <div></div>
          </Suspense>
        )}
      </div>
    );
  }
}
