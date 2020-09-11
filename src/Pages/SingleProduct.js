import React, { Component, Suspense } from "react";
import CallImage from './CallImage'
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
    const { price, imageID } = this.state.data;
    return (
      <div>
      <div>
      {price !== undefined ? (
            <Suspense fallback={<p>...</p>}>
              <div>
                <CallImage  imageID={this.state.data.imageIDa}/>
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
          <div className="cntnt-single"></div>
        </Suspense>
        <Suspense fallback={<p>...</p>}>
          <div></div>
        </Suspense>
      </div>
      </div>
    );
  }
}
