import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import DU from '../Component/DsbrdUSR/DU'
export default class User extends Component {
    componentDidMount() {
        fetch(`http://localhost:5000/getuserdata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ name: users[0].name , email:users[0].email });
        });
    }
    
constructor(props){
    super();
    this.state = {
      name:undefined,
      email:undefined,
      nameUpdate:undefined,
      emailUpdate:undefined,
      password:undefined
    }
    
}
    render() {
        return (
            <div>
            <DU />
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : {this.state.name}</p>
                <p className='title-des'>Email : {this.state.email}</p>
            </div>
            <form className='update-form'>
                <input type='name' placeholder='Enter new Name'></input>
                <input type='email' placeholder='Enter new Email'></input>
                <input type='password' placeholder='Enter new Password'></input>
                <input type='submit' value='Update Profile'></input>
            </form>
                <p className='title-des-btn'>Delete Account</p>
        </div>
        )
    }
}
