import React from "react";
import uniqid from "uniqid";
export default class Upload extends React.Component {
  constructor() {
    super();
    this.state = {
      file: null,
      file2: null,
      file3: null,
      vendor: "",
      iteam: "",
      price: "",
      description: "",
      tags: "",
      size: "",
      offer: "",
      BrandName: "",
      imageID: "",
      addProduct: true,
      deleteProduct: false,
      editProduct: false,
      fileEdit: null,
      file2Edit: null,
      file3Edit: null,
      vendorEdit: "",
      iteamEdit: "",
      priceEdit: "",
      descriptionEdit: "",
      tagsEdit: "",
      sizeEdit: "",
      offerEdit: "",
      BrandNameEdit: "",
      imageIDEdit: "",
      file1Edit:null,
      file2Edit:null,
      file3Edit:null,
    };
  }
  updateproduct=()=>{
    
  }
  onfile1update=e=>{
    this.setState({file1Edit:e.target.files})
  }
  onfile2update=e=>{
    this.setState({file2Edit:e.target.files})
  }
  onfile3update=e=>{
    this.setState({file3Edit:e.target.files})
  }
  onbrandnameupdate=e=>{
    this.setState({BrandNameEdit:e.target.value})
  }
  onoffrupdate=e=>{
    this.setState({offerEdit:e.target.value})
  }
  onsizeupdate=e=>{
    this.setState({sizeEdit:e.target.value})
  }
  ontagsupdate=e=>{
    this.setState({tagsEdit:e.target.value})
  }
  ondesupdate=e=>{
    this.setState({descriptionEdit:e.target.value})
  }
  onpriceupdate=e=>{
    this.setState({priceEdit:e.target.value})
  }
  onvendorupdate=e=>{
    this.setState({vendorEdit:e.target.value})
  }
onnameupdate=e=>{
  this.setState({iteamEdit:e.target.value})
}
  onBRANDChange = (event) => {
    this.setState({ BrandName: event.target.value });
  };
  onvendorChange = (event) => {
    this.setState({ vendor: event.target.value });
  };
  onofferChange = (event) => {
    this.setState({ offer: event.target.value });
  };
  onsizeChange = (event) => {
    this.setState({ size: event.target.value });
  };
  ontagChange = (event) => {
    this.setState({ tags: event.target.value });
  };
  ondesChange = (event) => {
    this.setState({ description: event.target.value });
  };
  onpriceChange = (event) => {
    this.setState({ price: event.target.value });
  };
  oniteamChange = (event) => {
    this.setState({ imageID: uniqid() });
    this.setState({ iteam: event.target.value });
  };
  fileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };
  fileChange2 = (event) => {
    this.setState({ file2: event.target.files[0] });
  };
  fileChange3 = (event) => {
    this.setState({ file3: event.target.files[0] });
  };
  onpdctedit=event=>{
    fetch(`http://localhost:5000/Product/${event.target.value}`)
    .then((response) => response.json())
    .then((users) => {
      this.setState({vendorEdit:users[0].vendor,iteamEdit:users[0].iteam,priceEdit:users[0].price,BrandNameEdit:users[0].BrandName,descriptionEdit:users[0].description,tagsEdit:users[0].tags,sizeEdit:users[0].size,offerEdit:users[0].offer,imageIDEdit:users[0].imageID})
    });
  }
  upload = () => {
    const formData = new FormData();
    formData.append("upload", this.state.file);
    formData.append("upload", this.state.file2);
    formData.append("upload", this.state.file3);
    formData.append("upload", this.state.imageID);
    fetch("http://localhost:5000/ProductPIC", {
      method: "POST",
      body: formData,
    });
    fetch("http://localhost:5000/ProductADD", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        iteam: this.state.iteam,
        price: this.state.price,
        vendor: this.state.vendor,
        description: this.state.description,
        tags: this.state.tags,
        size: this.state.size,
        offer: this.state.offer,
        BrandName: this.state.BrandName,
        imageID: this.state.imageID,
      }),
    });
  };
  render() {
    return (
      <div className="main-admin">
        {/* <div className="main-admin-content"> */}
        {/* <div className="addProduct">
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
          <button className="btn-upld-pdtc">
              Delete Product
            </button>
        </div>
        </div> */}
        <div className="GetProductforEdit">
          <p className="title-admin">Edit Product</p>
          <input onChange={this.onpdctedit} className="admin-input" type="text" required></input>
          <p  className="edit-pdct-dtls">Name: {this.state.iteamEdit}</p>
          <p  className="edit-pdct-dtls">Price: {this.state.priceEdit}</p>
          <p  className="edit-pdct-dtls">Vendor: {this.state.vendorEdit}</p>
          <p  className="edit-pdct-dtls">
            Description: {this.state.descriptionEdit}
          </p>
          <p  className="edit-pdct-dtls">Tag's: {this.state.tagsEdit}</p>
          <p  className="edit-pdct-dtls">Size: {this.state.sizeEdit}</p>
          <p  className="edit-pdct-dtls">Offer: {this.state.offerEdit}</p>
          <p  className="edit-pdct-dtls">
            BrandName: {this.state.BrandNameEdit}
          </p>
          <input onChange={this.onnameupdate}
            className="admin-input"
            type="text"
            placeholder="Product  Name"
          ></input>
          <input onChange={this.onpriceupdate}
            className="admin-input"
            type="text"
            placeholder="Product  price"
          ></input>
          <input onChange={this.onsizeupdate}
            className="admin-input"
            type="text"
            placeholder="Product  Size"
          ></input>
          <input onChange={this.onoffrupdate}
            className="admin-input"
            type="text"
            placeholder="Product  offer"
          ></input>
          <input onChange={this.onbrandnameupdate}
            className="admin-input"
            type="text"
            placeholder="Product  Brand"
          ></input>
          <input onChange={this.onvendorupdate}
            className="admin-input"
            type="text"
            placeholder="Vendor Name"
          ></input>
          <textarea onChange={this.ondesupdate}
            className="admin-txtarea"
            placeholder="Enter Product Description"
          />
          <textarea onChange={this.ontagsupdate}
            className="admin-txtarea"
            placeholder="Enter Product Tags"
          />
          <input onChange={this.onfile1update} className="img-admin-input" type='file'></input>
          <input onChange={this.onfile2update} className="img-admin-input" type='file'></input>
          <input onChange={this.onfile3update} className="img-admin-input" type='file'></input>
          <button onClick={this.updateproduct} className="btn-upld-pdtc">
              Update Product
            </button>
        </div>
      </div>
    );
  }
}
