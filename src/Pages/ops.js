import React from "react";

export default class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
      file2: null,
      file3: null,
      iteam: "",
      price: "",
      description: "",
      tags: "",
      size: "",
      offer: "",
      BrandName: "",
    };
  }
  onBRANDChange=event=>{
    this.setState({ BrandName: event.target.value});
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
    fetch("http://localhost:5000/ProductADD", {
      method: "POST",
      body: formData,
    });
  };

  render() {
    return (
      <div className="main-admin">
        <div className="main-admin-menu">
          <div className="menu-p">
            <p className="menu-admin">Product</p>
            <p className="menu-admin">Order</p>
            <p className="menu-admin">Brand</p>
          </div>
        </div>
        <div className="main-admin-content">
          <div className="addProduct">
            <input onChange={this.oniteamChange}
              className="admin-input"
              type="name"
              placeholder="Enter Product Name"
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
              placeholder="Product Size"
            />
            <input onChange={this.onBRANDChange}
              className="admin-input"
              type="text"
              placeholder="Product Brand"
            />
            <textarea onChange={this.ondesChange}
              className="admin-txtarea"
              placeholder="Enter Product Description"
            />
            <textarea onChange={this.ontagChange}
              className="admin-txtarea"
              placeholder="Enter Product Tags"
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
              Upload
            </button>
          </div>
          {/* <div className='deleteProduct'>
          <input  type="file" />
          <button>Upload</button>
        </div>
        <div className='AddBrand'>
          <input />
          <button>Upload</button>
        </div>
        <div className='deleteBrand'>
          <input />
          <button>Upload</button>
        </div> */}
        </div>
      </div>
    );
  }
}
