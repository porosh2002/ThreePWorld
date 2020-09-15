import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DU from '../Component/DsbrdUSR/DU'
export default class User extends Component {
    componentDidMount() {
        fetch(`http://localhost:5000/getuserdata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ name: users[0].name , email:users[0].email });
        });
    }
    deleteAccount=()=>{
        fetch(`http://localhost:5000/delete/${this.props.match.params.id}`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
        })
    }
    onEmailChange=(event)=>{
        this.setState({nameUpdate:event.target.value})
    }
    onpasswordChange=(event)=>{
        this.setState({password:event.target.value})
    }
    onnameChange=(event)=>{
        this.setState({nameUpdate:event.target.value})
    }
constructor(){
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
                <Link onClick={this.deleteAccount} to='/Login' className='title-des-btn'>Delete Account</Link>
            </div>
            <form className='update-form'>
                <input onChange={this.onnameChange} type='name' placeholder='Enter new Name'></input>
                <input onChange={this.onEmailChange} type='email' placeholder='Enter new Email'></input>
                <input onChange={this.onpasswordChange} type='password' placeholder='Enter new Password'></input>
                <input type='submit' value='Update Profile'></input>
            </form>
        </div>
        )
    }
}
