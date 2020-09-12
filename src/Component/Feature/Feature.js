import React, { Component } from 'react'
import CardList from '../CardList/CardList'
export default class Feature extends Component {
    componentDidMount() {
        fetch("http://localhost:5000/AllProduct")
          .then((response) => response.json())
          .then((users) => {
            this.setState({ robots: users });
          });
      }
      constructor(){
          super();
          this.state={
              robots:[]
          }
      }
    render() {
        return (
            <div className='fpd'>
            <h2 className='fp'>Feature Products</h2>
                <CardList  robots={this.state.robots}/>
            </div>
        )
    }
}
