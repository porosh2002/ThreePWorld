import React, { Component,Suspense} from "react";

export default class SingleProduct extends Component {
  componentDidMount() {
    if (this.state.id.length > 0) {
      fetch(`http://localhost:5000/Product/${this.state.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ data: users[0] });
        })  
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
const {price} = this.state.data;
console.log(price);
return(
<div>
<Suspense fallback={<p>...</p>}>
          <div className='cntnt-single'>
<h1>{price}</h1>
          </div>
        </Suspense>
        <Suspense fallback={<p>...</p>}>
          <div></div>
        </Suspense>
</div>
)
  }
}
