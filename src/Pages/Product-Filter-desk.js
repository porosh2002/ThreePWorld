import React, { Component,Suspense} from 'react'
import CardList from '../Component/CardList/CardList'
export default class Product_Filter_desk extends Component {
  componentDidMount(){
     fetch('http://localhost:5000/AllProduct')
      .then(response=> response.json())
      .then(users => { this.setState({ robots: users})});
  }
  // *! bydget
budget1=()=>{
console.log('Price_Range_1');
}
budget2=()=>{
console.log('Price_Range_2');
}
budget3=()=>{
console.log('Price_Range_3');
}

  // *! Color
colorred=()=>{
console.log('Red');
}
colorGreen=()=>{
console.log('Green');
}
colorYello=()=>{
console.log('Yellow');
}
colorOrange=()=>{
console.log('Orange');
}
  // *! Size 
  sizechangeS=()=>{
    console.log('S');
  }
  sizechangeM=()=>{
    console.log('M');
  }
  sizechangeL=()=>{
    console.log('L');
  }
  // *! Story by 
  storyby=(event)=>{
    console.log(event.target.value);
  }
  //*! Offer
  fiftteoffr1=()=>{
    console.log('demo 1 offer');
  }
  fiftteoffr2=()=>{
    console.log('demo 2 offer');
  }
  fiftteoffr3=()=>{
    console.log('demo 3 offer');
  }
  fiftteoffr4=()=>{
    console.log('demo 4 offer');
  }
  fiftteoffr5=()=>{
    console.log('demo 5 offer');
  }
  constructor() {
    super()
    this.state = {
      robots: [],
      fiftteoffr:false
      
    }
  }
    render() {
      const firtereddata = this.state.robots
        return (
<div className='product-page'>
<div className='product-filter'>
            <p className=' title-filter title-main-f'>Filters</p>
           {/* <p className='title-filter'>CATEGORIES</p> */}
           {/* {Catagories} */}
           <p className='title-filter'>BRAND</p>
           <form>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>Monkey </div>
           </div>
        </label>
           </form>
           <p className='title-filter'>PRICE</p>
           <form>
           <label className='color-label'>
          <input onChange={this.budget1}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>TK :  0tk to 500tk </div>
           </div>
        </label>
           <label className='color-label'>
          <input onChange={this.budget2}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>TK :  500tk to 1,000tk </div>
           </div>
        </label>
           <label className='color-label'>
          <input onChange={this.budget3}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>TK :  1,000tk to 2,000tk </div>
           </div>
        </label>
           </form>
           <p className='title-filter'>COLOR</p>
           <form>
        <label className='color-label'>
          <input onChange={this.colorred}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color'></div><div className='color-title'>Red </div>
           </div>
        </label>
        <label className='color-label'>
          <input onChange={this.colorGreen}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color color1'></div><div className='color-title'>Green </div>
           </div>
        </label>
        <label className='color-label'>
          <input onChange={this.colorYello}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color color2'></div><div className='color-title'>Yellow </div>
           </div>
        </label>
        <label className='color-label'>
          <input onChange={this.colorOrange}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color color3'></div><div className='color-title'>Orange </div>
           </div>
        </label>
        </form>
           <p className='title-filter'>SIZE</p>
           <form>
           <label className='color-label'>
          <input onChange={this.sizechangeS}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>S </div>
           </div>
        </label>
           </form>
           <form>
           <label className='color-label'>
          <input onChange={this.sizechangeM}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>M </div>
           </div>
        </label>
           </form>
           <form>
           <label className='color-label'>
          <input onChange={this.sizechangeL}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>L </div>
           </div>
        </label>
           </form>
           <p className='title-filter'>STORE BY</p>
           <select onChange={this.storyby} id="select_capacity">
              <option value="any">Default</option> <option value="1"> 1 </option>
              <option value="2"> 2 </option> <option value="3"> 3 </option>
              <option value="4"> 4 </option> <option value="5"> 5 </option>
              <option value="6"> 6 </option> <option value="7"> 6 + </option>
            </select>
           <p className='title-filter'>DISCOUNT RANGE</p>
           <form>
           <label className='color-label'>
          <input onChange={this.fiftteoffr1}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>10% and avobe</div>
           </div>
        </label>
           <label className='color-label'>
          <input onChange={this.fiftteoffr2}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>20% and avobe</div>
           </div>
        </label>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
            onChange={this.fiftteoffr3}
             />
           <div className='color-dtails'>
           <div className='color-title'>30% and avobe</div>
           </div>
        </label>
           <label className='color-label'>
          <input onChange={this.fiftteoffr4}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>40% and avobe</div>
           </div>
        </label>
           <label className='color-label'>
          <input onChange={this.fiftteoffr5}
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>50% and avobe</div>
           </div>
        </label>
           </form>
        </div>
        <div className='ffc'>
   {/*
    <CardList robots={this.state.robots} />
     */}
{this.state.robots.length > 0 ? (
          <Suspense fallback={<p>...</p>}>
            <div>
            <CardList robots={firtereddata} />
            </div>
          </Suspense>
        ) : (
          <Suspense fallback={<p>...</p>}>
            <div></div>
          </Suspense>
        )}
        </div>
</div>
        )
    }
}
