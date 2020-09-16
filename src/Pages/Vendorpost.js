import React, { Component } from 'react'
import DU2 from '../Component/DsbrdUSR/DU2'
export default class User extends Component {
    componentDidMount() {
        fetch(`http://localhost:5000/getvendordata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ name: users[0].name , email:users[0].email,Refferal:users[0].ownrefferal });
        });
    }
constructor(){
    super();
    this.state = {
      name:undefined,
      email:undefined,
      Refferal:undefined
    } 
}
    render() {
        return (
            <div>
            <DU2 id={this.props.match.params.id}/>
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : {this.state.name}</p>
                <p className='title-des'>Email : {this.state.email}</p>
            </div>
        </div>
        )
    }
}
