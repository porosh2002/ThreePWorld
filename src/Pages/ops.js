import React, { Component } from "react";

export default class ops extends Component {
  constructor() {
    super()
    this.state = {
      slider:false,
      Brand:false,
      Product:true
    }
  }
  render() {
    return (
      <div>
        <div className="admin-nav">
          <div className="admin-links">
            <p>Slider</p>
            <p>Brand</p>
            <p>Product</p>
          </div>
        </div>
        <p className="title-AD-">Welcome to Admin Panel</p>
        {/* Slider */}


{/* <div className='sliderADMIN'>
<p className="des-AD">
          <span className="usr-AD">Slider Big for (Desktop)</span>
        </p>
        <form>
          <input type="file"></input>
        </form>
        <p className="des-AD">
          <span className="usr-AD">Slider Small for (Desktop)</span>
        </p>
        <form>
          <input type="file"></input>
        </form>
        <p className="des-AD">
          <span className="usr-AD">Delete Slider BIG (Desktop)</span>
        </p>
        <p className="des-AD">
          <span className="usr-AD">Delete Slider Small (Desktop)</span>
        </p>
        <p className="des-AD">
          <span className="usr-AD">Slider Big for (Mobile)</span>
        </p>
        <form>
          <input type="file"></input>
        </form>
        <p className="des-AD">
          <span className="usr-AD">Slider Small for (Mobile)</span>
        </p>
        <form>
          <input type="file"></input>
        </form>
        <p className="des-AD">
          <span className="usr-AD">Delete Slider BIG (Mobile)</span>
        </p>
        <p className="des-AD">
          <span className="usr-AD">Delete Slider Small (Mobile))</span>
        </p>
</div> */}


{/* Product */}
<div className='product-ADMIN'>
<p className="des-AD">
          <span className="title-AD">Upload Product</span>
          <div className='upload-product'>
            <form>


<input className='input-upload' type='name' placeholder='Enter Product Name' required></input>


            </form>
          </div>
        </p>
        <p className="des-AD">
          <span className="title-AD">Delete Product</span>
        </p>
</div>

{/* Brand */}
{/* <div className='brandADMIN'>
<p className="des-AD">
          <span className="title-AD">Delete Brand</span>
        </p>
        <p className="des-AD">
          <span className="title-AD">Add Brand</span>
        </p>
</div> */}
      </div>
    );
  }
}
