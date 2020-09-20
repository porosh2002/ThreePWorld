import React from "react";
import uniqid from 'uniqid'
export default class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
      file2: null,
      file3: null,
      vendor:"",
      iteam: "",
      price: "",
      description: "",
      tags: "",
      size: "",
      offer: "",
      BrandName: "",
      imageID:""
    };
  }

  onBRANDChange=event=>{
    this.setState({ BrandName: event.target.value});
  }
  onvendorChange=event=>{
    this.setState({ vendor: event.target.value});
  }
  onofferChange=event=>{
    this.setState({ offer: event.target.value});
  }
  onsizeChange=event=>{
    this.setState({ size: event.target.value});
  }
  ontagChange=event=>{
    this.setState({ tags: event.target.value});
  }
  ondesChange=event=>{
    this.setState({ description: event.target.value});
  }
  onpriceChange=event=>{
    this.setState({ price: event.target.value});
  }
  oniteamChange=event=>{
    this.setState({imageID:uniqid()})
    this.setState({ iteam: event.target.value});
  }
  fileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };
  fileChange2 = (event) => {
    this.setState({ file2: event.target.files[0] });
  };
  fileChange3 = (event) => {
    this.setState({ file3: event.target.files[0] });
  };
  upload = () => {
    const formData = new FormData();
    formData.append("upload", this.state.file);
    formData.append("upload", this.state.file2);
    formData.append("upload", this.state.file3);
    formData.append("upload", this.state.imageID);
    fetch("http://localhost:5000/ProductPIC", {
      method: "POST",
      body:formData,
    });
    fetch('http://localhost:5000/ProductADD', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        iteam : this.state.iteam,
        price : this.state.price,
        vendor:this.state.vendor,
        description : this.state.description,
        tags : this.state.tags,
        size : this.state.size,
        offer : this.state.offer,
        BrandName : this.state.BrandName,
        imageID:this.state.imageID
      })
    })
  };
  render() {
    return (
      <div className="main-admin">
        <div className="main-admin-content">
          <div className="addProduct">
            <p className='title-admin'>Add Product by Admin</p>
            <input onChange={this.oniteamChange}
              className="admin-input"
              type="name"
              placeholder="Enter Product Name"
            />
            <input onChange={this.onvendorChange}
              className="admin-input"
              type="name"
              placeholder="Enter Vendor Name"
            />
            <input onChange={this.onpriceChange}
              className="admin-input"
              type="number"
              placeholder="Enter Product Price"
            />
            <input onChange={this.onofferChange}
              className="admin-input"
              type="number"
              placeholder="Enter Product Offer"
            />
            <input onChange={this.onsizeChange}
              className="admin-input"
              type="text"
              placeholder="Product Size (Upercase)"
            />
            <input onChange={this.onBRANDChange}
              className="admin-input"
              type="text"
              placeholder="Product Brand (lowercase)"
            />
            <textarea onChange={this.ondesChange}
              className="admin-txtarea"
              placeholder="Enter Product Description"
            />
            <textarea onChange={this.ontagChange}
              className="admin-txtarea"
              placeholder="Enter Product Tags , color , story by (lowercase)"
            />
            <input
              className="img-admin-input"
              onChange={this.fileChange3}
              type="file"
            />
            <input
              className="img-admin-input"
              onChange={this.fileChange}
              type="file"
            />
            <input
              className="img-admin-input"
              onChange={this.fileChange2}
              type="file"
            />
            <button className="btn-upld-pdtc" onClick={this.upload}>
              ADD Product
            </button>
          </div>
          <div className='deleteProduct'>
          <p className='title-admin'>Delete Product</p>
          <input className="admin-input" type="text" placeholder='Enter Product ID :'/>
          <button className="btn-upld-pdtc">Delete Product</button>
        </div>
          <input />
          <button>Upload</button>
        </div>
        </div>
    );
  }
}
