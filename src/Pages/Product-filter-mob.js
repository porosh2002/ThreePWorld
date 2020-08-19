import React, { Component } from "react";
export default class Product_filter_mob extends Component {
    constructor(){
        super();
        this.state = {
            filterOpen:false,
        }
    }
    menu_div_out = () => {
        this.setState({
          filterOpen:true,
        });
      };
  render() {
    return (
      <div className='filter-m0b-div'>
        <div className="filter-mob">
          <div onClick={this.menu_div_out}>
              <i className="fas fa-sliders-h"></i>
          </div>
        </div>
      </div>
    );
  }
}
