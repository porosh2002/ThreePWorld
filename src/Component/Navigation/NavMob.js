import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navmob.css'
export default class NavMob extends Component {
  Click=()=>{
    this.setState({menu:'translateX(0px)'});
  }
  CClick=()=>{
    this.setState({menu:'translateX(-1000px)'});
  }
  constructor(){
    super();
    this.state ={
      menu:'translateX(-1000px)',
      transition:'.5s'
    }
  }
  render() {
    const { menu } = this.state;
    const { transition } = this.state;
    const style = {transform:menu,transition:transition};
    return (
      <div className='nav--main'>
        <div>
      <div className="navigation">
        <div className="bars" onClick={this.Click}>
          {}
        <i className="fas fa-bars"></i>
        </div>
        <div className="logo">
          <Link to=''>3pshopping</Link>
        </div>
        <div className="pr-container">
          {/* <Link to="/">
            <div className="pre-container-link-div">
              <i className="fas fa-user-circle"></i>
            </div>
          </Link> */}
          <Link to="/">
            <div className="pre-container-link-div">
              <i className="far fa-bookmark"></i>
            </div>
          </Link>
          <Link to="/">
            <div className="pre-container-link-div">
              <i className="fas fa-shopping-bag"></i>
            </div>
          </Link>
        </div>
      </div>
      <div style={style} className="nav">
      <div className='times_div'onClick={this.CClick}>
      <i className="fas fa-times"></i>
      </div>
        <div className='offer'>
        </div>
        <Link className="menu-link " to="">
          Men
        </Link>
        <Link className="menu-link " to="">
          Women
        </Link>
        <Link className="menu-link " to="">
          Kids
        </Link>
        <Link className="menu-link " to="">
          Home & Living
        </Link>
        <Link className="menu-link " to="">
          Essentials
        </Link>
        <Link className="menu-link " to="">
          Contact Us
        </Link>
        <Link className="menu-link " to="">
          Login
        </Link>
        <Link className="menu-link " to="">
        Become a Vendor
        </Link>
        <Link className="menu-link " to="">
        Profile
        </Link>
        <Link className="menu-link " to="">
        Login
        </Link>
        <Link className="menu-link " to="">
        পুরাতন পন্য ক্রয় বিক্রয়
        </Link>
        <Link className="menu-link " to="">
          FAQs
        </Link>
      </div>
    </div>
      </div>
    )
  }
}
