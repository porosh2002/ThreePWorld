import React, { Component } from 'react'

export default class CallImage extends Component {
    componentDidMount(){
        fetch(`http://localhost:5000/geTiMagE3/${this.state.imageID}`).then(
            (users) => {
              this.setState({ image: users });
            }
          );
    }
constructor(props){
    super(props);
    this.state={
        image:[],
        imageID:props.imageID
    }
}
    render() {
        console.log(this.state.image);
        return (
            <div className='blbl'>
                <img className='card-img-s' src={this.state.image.url} alt=''/>
            </div>
        )
    }
}
