import React, { Component, Suspense } from "react";

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
            <div className="card">
              <div>
                <img src={this.state.image.url} />
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{offer}</p>
              </div>
            </div>
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
