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
    onupdateform=()=>{
        fetch(`http://localhost:5000/update/${this.props.match.params.id}`,{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body:{
                email:this.state.email,
                name:this.state.name
            }
        })
    }
    onEmailChange=(event)=>{
        this.setState({email:event.target.value})
    }
    onnameChange=(event)=>{
        this.setState({name:event.target.value})
    }
constructor(){
    super();
    this.state = {
      name:undefined,
      email:undefined,
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
                <input type='submit' onClick={this.onupdateform} value='Update Profile'></input>
            </form>
        </div>
        )
    }
}
