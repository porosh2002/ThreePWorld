import React, { Component,Suspense} from 'react'
import CardList from '../Component/CardList/CardList'
export default class Product_Filter_desk extends Component {
  componentDidMount(){
     fetch('http://localhost:5000/AllProduct')
      .then(response=> response.json())
      .then(users => { this.setState({ robots: users})});
  }
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }
    render() {
        return (
<div className='product-page'>
<div className='product-filter'>
            <p className=' title-filter title-main-f'>Filters</p>
           <p className='title-filter'>CATEGORIES</p>
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
           <div className='color-title'>Monkey <span className='color-iteam'>(100)</span></div>
           </div>
        </label>
           </form>
           <p className='title-filter'>PRICE</p>
           <form>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>TK :  1,000tk to 2,000tk <span className='color-iteam'>(5)</span></div>
           </div>
        </label>
           </form>
           <p className='title-filter'>COLOR</p>
           <form>
        <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color'></div><div className='color-title'>Red <span className='color-iteam'>(50)</span></div>
           </div>
        </label>
        <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color color1'></div><div className='color-title'>Green <span className='color-iteam'>(10)</span></div>
           </div>
        </label>
        <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color color2'></div><div className='color-title'>Yellow <span className='color-iteam'>(20)</span></div>
           </div>
        </label>
        <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color color3'></div><div className='color-title'>Orange <span className='color-iteam'>(5)</span></div>
           </div>
        </label>
        </form>
           <p className='title-filter'>SIZE</p>
           <form>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>S <span className='color-iteam'>(10)</span></div>
           </div>
        </label>
           </form>
           <form>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>M <span className='color-iteam'>(55)</span></div>
           </div>
        </label>
           </form>
           <form>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>L <span className='color-iteam'>(20)</span></div>
           </div>
        </label>
           </form>
           <p className='title-filter'>STORE BY</p>
           <select id="select_capacity">
              <option value="any">Default</option> <option value="1"> 1 </option>
              <option value="2"> 2 </option> <option value="3"> 3 </option>
              <option value="4"> 4 </option> <option value="5"> 5 </option>
              <option value="6"> 6 </option> <option value="7"> 6 + </option>
            </select>
           <p className='title-filter'>DISCOUNT RANGE</p>
           <form>
           <label className='color-label'>
          <input
            name="isGoing"
            type="checkbox"
            className='checkbox'
             />
           <div className='color-dtails'>
           <div className='color-title'>TK :  1,000tk to 2,000tk <span className='color-iteam'>(5)</span></div>
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
            <CardList robots={this.state.robots} />
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
