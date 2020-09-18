import React, { Component } from "react";
const axios = require("axios");
import CardList from "../CardList/CardList";
export default class Feature extends Component {
  componentDidMount() {
    axios.get("http://localhost:5000/AllProduct").then((data) => {
      this.setState({ robots: data.data });
    });
  }
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }
  render() {
    return (
      <div className="fpd">
        <h2 className="fp">Feature Products</h2>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
