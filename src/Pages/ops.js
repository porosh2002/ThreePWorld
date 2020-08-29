import React, { Component } from "react";

export default class ops extends Component {
  constructor() {
    super()
    this.state = {
      slider:false,
      Brand:false,
      Product:true,
      iteam:'',
      price:'',
      offer:'',
      size:'',
      tags:'',
      description:'',
      BrandName:'',
      img1:'',
      img2:'',
      img3:'',
    }
  }
  imageChange=(event)=>{
    this.setState({img1:event.target.files})
  }
  image2Change=(event)=>{
    this.setState({img2:event.target.files})
  }
  image3Change=(event)=>{
    this.setState({img3:event.target.files})
  }
  IteamNameChange=(event)=>{
    this.setState({iteam:event.target.value})
  }
  BrandNameChange=(event)=>{
    this.setState({BrandName:event.target.value})
    
  }
  priceNameChange=(event)=>{
    this.setState({price:event.target.value})
    
  }
  offerNameChange=(event)=>{
    this.setState({offer:event.target.value})
    
  }
  sizeNameChange=(event)=>{
    this.setState({size:event.target.value})
    
  }
  tagsNameChange=(event)=>{
    this.setState({tags:event.target.value})
    
  }
  desNameChange=(event)=>{
    this.setState({description:event.target.value})
    
  }
  SliderChange=(event)=>{
    this.setState({slider:event.target.value})
    console.log(this.state.slider);
  }
  BrandChange=(event)=>{
    this.setState({Brand:event.target.value})
    console.log(this.state.Brand);
  }
  ProductChange=(event)=>{
    this.setState({Product:event.target.value})
    console.log(this.state.Product);
  }
  onbtnsubmitPDCT=()=>{
    fetch('http://localhost:5000/ProductADD',{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            iteam:this.state.iteam,
            price:this.state.price,
            offer:this.state.offer,
            size:this.state.size,
            tags:this.state.tags,
            description:this.state.description,
            BrandName:this.state.BrandName,
            image1:this.state.img1,
            // img2:this.state.img2,
            // img3:this.state.img3,
        })
    })
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


<input className='input-upload' onChange={this.IteamNameChange} type='name' placeholder='Enter Product Name' required></input>
<input className='input-upload' onChange={this.priceNameChange} type='number' placeholder='Enter Product Price' required></input>
<input className='input-upload' onChange={this.BrandNameChange} type='text' placeholder='Enter Product Brand' required></input>
<input className='input-upload' onChange={this.offerNameChange} type='number' placeholder='Enter offer in % (0-100%)' required></input>
<input className='input-upload' onChange={this.sizeNameChange} type='name' placeholder='Enter Product Size (S,L,M)' required></input>
<textarea className='input-textarea' onChange={this.tagsNameChange} placeholder='Enter Product Tags' required></textarea>
<textarea className='input-textarea' onChange={this.desNameChange} placeholder='Enter Product Description' required></textarea>
<input className='input-upload' onChange={this.imageChange} type='file' placeholder='image for product' required></input>
<input className='input-upload' onChange={this.image2Change} type='file' placeholder='image for product' required></input>
<input className='input-upload' onChange={this.image3Change} type='file' placeholder='image for product' required></input>
<input className='uploadbtn' onClick={this.onbtnsubmitPDCT} type='submit' value='ADD Product'></input>


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
