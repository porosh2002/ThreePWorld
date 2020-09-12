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
        <Link className="menu-link " to="/product">
          Men
        </Link>
        <Link className="menu-link " to="/product">
          Women
        </Link>
        <Link className="menu-link " to="/product">
          Kids
        </Link>
        <Link className="menu-link " to="/product">
          Home & Living
        </Link>
        <Link className="menu-link " to="/product">
          Essentials
        </Link>
        <Link className="menu-link " to="/product">
          Contact Us
        </Link>
        <Link className="menu-link " to="/product">
          Login
        </Link>
        <Link className="menu-link " to="/product">
        Become a Vendor
        </Link>
        <Link className="menu-link " to="/product">
        Profile
        </Link>
        <Link className="menu-link " to="/product">
        Login
        </Link>
        <Link className="menu-link " to="/product">
        পুরাতন পন্য ক্রয় বিক্রয়
        </Link>
        <Link className="menu-link " to="/product">
          FAQs
        </Link>
      </div>
    </div>
      </div>
    )
  }
}
