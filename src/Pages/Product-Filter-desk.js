import React, { Component, Suspense } from "react";
import CardList from "../Component/CardList/CardList";
export default class Product_Filter_desk extends Component {
  componentDidMount() {
    fetch("http://localhost:5000/AllProduct")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  // *! Brand
  brand = (event) => {
    this.setState({ brand: event.target.value });
  };
  // *! budget
  budget1 = () => {
    this.setState({ price1: !this.state.price1 });
  };
  budget2 = () => {
    this.setState({ price2: !this.state.price2 });
  };
  budget3 = () => {
    this.setState({ price3: !this.state.price3 });
  };
  // *! Color
  colorred = () => {
    this.setState({ red: !this.state.red });
  };
  colorGreen = () => {
    this.setState({ green: !this.state.green });
  };
  colorYello = () => {
    this.setState({ Yellow: !this.state.Yellow });
  };
  colorOrange = () => {
    this.setState({ orange: !this.state.orange });
  };
  colorBlack = () => {
    this.setState({ black: !this.state.black });
  };
  // *! Size
  sizechangeS = () => {
    this.setState({ SizeS: !this.state.SizeS });
  };
  sizechangeM = () => {
    this.setState({ SizeM: !this.state.SizeM });
  };
  sizechangeL = () => {
    this.setState({ SizeL: !this.state.SizeL });
  };
  // // *! Story by
  // storyby = (event) => {
  //   this.setState({ offer1: !this.state.offer1 });
  // };
  //*! Offer
  fiftteoffr1 = () => {
    this.setState({ offer1: !this.state.offer1 });
  };
  fiftteoffr2 = () => {
    this.setState({ offer2: !this.state.offer2 });
  };
  fiftteoffr3 = () => {
    this.setState({ offer3: !this.state.offer3 });
  };
  fiftteoffr4 = () => {
    this.setState({ offer4: !this.state.offer4 });
  };
  fiftteoffr5 = () => {
    this.setState({ offer5: !this.state.offer5 });
  };
  constructor() {
    super();
    this.state = {
      robots: [],
      fiftteoffr: false,
      offer1: false,
      offer2: false,
      offer3: false,
      offer4: false,
      offer5: false,
      // storyby: "all",
      SizeS: false,
      SizeM: false,
      SizeL: false,
      red: false,
      black: false,
      Yellow: false,
      green: false,
      orange: false,
      price1: false,
      price2: false,
      price3: false,
      brand: "",
    };
  }
  render() {
    const ts = this.state;
    const filteroffer1 = ts.robots.filter(data=>{
      if(ts.offer1 === true){
        if(data.offer>10 || data.offer===10){
          return data
        }
      }
      else{
        return ts.robots
      }
    }
    )
    const filteroffer2 = filteroffer1.filter(data=>{
      if(ts.offer2 === true){
        if(data.offer>20 || data.offer===20){
          return data
        }
      }
      else{
        return filteroffer1
      }
    }
    )
    const filteroffer3 = filteroffer2.filter(data=>{
      if(ts.offer3 === true){
        if(data.offer>30 || data.offer===30){
          return data
        }
      }
      else{
        return filteroffer2
      }
    }
    )
    const filteroffer4 = filteroffer3.filter(data=>{
      if(ts.offer4 === true){
        if(data.offer>40 || data.offer===40){
          return data
        }
      }
      else{
        return filteroffer3
      }
    }
    )
    const filteroffer5 = filteroffer4.filter(data=>{
      if(ts.offer5 === true){
        if(data.offer>50 || data.offer===50){
          return data
        }
      }
      else{
        return filteroffer4
      }
    }
    )
    const sizeS = filteroffer5.filter(data=>{
      if(ts.SizeS === true){
        if(data.size.includes("S")){
          return data
        }
      }
      else{
        return filteroffer5;
      }
    }
    )
    const sizeM = sizeS.filter(data=>{
      if(ts.SizeM === true){
        if(data.size.includes("M")){
          return data
        }
      }
      else{
        return sizeS;
      }
    }
    )
    const sizeL = sizeM.filter(data=>{
      if(ts.SizeL === true){
        if(data.size.includes("L")){
          return data
        }
      }
      else{
        return sizeM;
      }
    }
    )
    const firtereddata=ts.robots;
    return (
      <div className="product-page">
        <div className="product-filter">
          <p className=" title-filter title-main-f">Filters</p>
          {/* <p className='title-filter'>CATEGORIES</p> */}
          {/* {Catagories} */}
          <p className="title-filter">BRAND</p>
          <form>
            <label className="color-label">
              <input
                onChange={this.brand}
                name="isGoing"
                type="text"
                className="checkbox"
              />
            </label>
          </form>
          <p className="title-filter">PRICE</p>
          <form>
            <label className="color-label">
              <input
                onChange={this.budget1}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">TK : 0tk to 500tk </div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.budget2}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">TK : 500tk to 1,000tk </div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.budget3}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">TK : 1,000tk to 2,000tk </div>
              </div>
            </label>
          </form>
          <p className="title-filter">COLOR</p>
          <form>
            <label className="color-label">
              <input
                onChange={this.colorred}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color"></div>
                <div className="color-title">Red </div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.colorGreen}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color color1"></div>
                <div className="color-title">Green </div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.colorYello}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color color2"></div>
                <div className="color-title">Yellow </div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.colorOrange}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color color3"></div>
                <div className="color-title">Orange </div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.colorBlack}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color color4"></div>
                <div className="color-title">Black</div>
              </div>
            </label>
          </form>
          <p className="title-filter">SIZE</p>
          <form>
            <label className="color-label">
              <input
                onChange={this.sizechangeS}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">S </div>
              </div>
            </label>
          </form>
          <form>
            <label className="color-label">
              <input
                onChange={this.sizechangeM}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">M </div>
              </div>
            </label>
          </form>
          <form>
            <label className="color-label">
              <input
                onChange={this.sizechangeL}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">L </div>
              </div>
            </label>
          </form>
          {/* <p className="title-filter">STORE BY</p>
          <select onChange={this.storyby} id="select_capacity">
            <option value="any">All</option>
            <option value="1"> New </option>
            <option value="hot"> Hot </option>
            <option value="popular"> Popular </option>
            <option value="recomanded"> Recomanded </option>
          </select> */}
          <p className="title-filter">DISCOUNT RANGE</p>
          <form>
            <label className="color-label">
              <input
                onChange={this.fiftteoffr1}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">10% and avobe</div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.fiftteoffr2}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">20% and avobe</div>
              </div>
            </label>
            <label className="color-label">
              <input
                name="isGoing"
                type="checkbox"
                className="checkbox"
                onChange={this.fiftteoffr3}
              />
              <div className="color-dtails">
                <div className="color-title">30% and avobe</div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.fiftteoffr4}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">40% and avobe</div>
              </div>
            </label>
            <label className="color-label">
              <input
                onChange={this.fiftteoffr5}
                name="isGoing"
                type="checkbox"
                className="checkbox"
              />
              <div className="color-dtails">
                <div className="color-title">50% and avobe</div>
              </div>
            </label>
          </form>
        </div>
        <div className="ffc">
          {/*
    <CardList robots={this.state.robots} />
     */}
          {this.state.robots.length > 0 ? (
            <Suspense fallback={<p>...</p>}>
              <div>
                <CardList robots={sizeL} />
              </div>
            </Suspense>
          ) : (
            <Suspense fallback={<p>...</p>}>
              <div></div>
            </Suspense>
          )}
        </div>
      </div>
    );
  }
}
