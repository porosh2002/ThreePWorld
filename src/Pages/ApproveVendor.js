import React, { Component } from 'react'

export default class ApproveVendor extends Component {
componentDidMount() {
    fetch(`http://localhost:5000/approve/${this.props.match.params.id}`, {
        method: "post",}).then(setTimeout(()=>{
          this.props.history.push('/')
      },1000))
}
    constructor(props){
        super();
        this.state={
            id:null
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
