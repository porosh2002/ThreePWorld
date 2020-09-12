import React, { Component, Suspense } from "react";
import CallImage from './CallImage'
import Callimage2 from './callimage2';
import Callimage3 from './callimage3';
export default class SingleProduct extends Component {
  componentDidMount() {
    if (this.state.id.length > 0) {
      fetch(`http://localhost:5000/Product/${this.state.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ data: users[0] });
        });
    }
  }
  constructor(props) {
    super();
    this.state = {
      image: [],
      id: props.match.params.id,
      data: [],
    };
  }
  render() {
    const { price} = this.state.data;
    return (
      <div className='img_Cntnt-s'>
      <div>
      {price !== undefined ? (
            <Suspense fallback={<p>...</p>}>
              <div className='img-img-s'>
                <CallImage  imageID={this.state.data.imageID}/>
                <Callimage3  imageID={this.state.data.imageID}/>
                <Callimage2  imageID={this.state.data.imageID}/>
              </div>
            </Suspense>
          ) : (
            <Suspense fallback={<p>...</p>}>
              <div></div>
            </Suspense>
          )}
      </div>
      <div>
      <Suspense fallback={<p>...</p>}>
          <div className="cntnt-single">
            <h1>{price}</h1>
          </div>
        </Suspense>
        <Suspense fallback={<p>...</p>}>
          <div></div>
        </Suspense>
      </div>
      </div>
    );
  }
}
