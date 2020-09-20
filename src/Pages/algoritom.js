// import React, { Component, Suspense } from "react";
// export default class algoritom extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       robots: [],
//     };
//   }

//   render() {
//     console.log(this.state.robots);
//     const filterdata = this.state.robots.filter(function(data){
//       if (data._id !== this.props.id) {
//         return data;
//       }
//     });
//     return (

//     );
//   }
// }
// import React, { Component} from "react";
// import CardList from "../Component/CardList/CardList";
// export default class algoritom extends Component {
//   componentDidMount() {
//     fetch("http://localhost:5000/AllProduct")
//       .then((response) => response.json())
//       .then((users) => {this.setState({ robots: users });});
//   }
//   constructor() {
//     super();
//     this.state = {
//       robots:[],
//     };
//   }
//   render() {
//     const viewID = this.props.id;
//     const filterdata = this.state.robots.filter(data=>{
//       if (data._id !== viewID) {
//         return data;
//       }
//     });
// return(
//         <div className="algo">
//               <CardList robots={filterdata} />
//       </div>
// )
//   }
// }
