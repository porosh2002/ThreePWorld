import React, { Component, Suspense } from "react";
import CardList from "../Component/CardList/CardList";
export default class algoritom extends Component {
  componentDidMount() {
    fetch("http://localhost:5000/AllProduct")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  constructor(props) {
    super();
    this.state = {
      robots: [],
    };
  }
  render() {
    console.log(this.state.robots);
    console.log(this.props);
    const filterdata = this.state.robots.filter((data) => {
      if (data._id !== this.props.id) {
        return data;
      }
    });
    return (
      <div className="algo">
        {this.state.robots.length > 0 ? (
          <Suspense fallback={<p>...</p>}>
            <div>
              <CardList robots={filterdata} />
            </div>
          </Suspense>
        ) : (
          <Suspense fallback={<p>...</p>}>
            <div></div>
          </Suspense>
        )}
      </div>
    );
  }
}
