import React, { Component,Suspense} from 'react'
import DU2 from '../Component/DsbrdUSR/DU2'
import uniqid from 'uniqid'
export default class User extends Component {
    componentWillMount() {
        fetch(`http://localhost:5000/getvendordata/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((users) => {
          this.setState({ name: users[0].name , email:users[0].email, access:users[0].access,NidUserID:users[0]._id});
        });
    }
constructor(){
    super();
    this.state = {
      name:undefined,
      email:undefined,
      file: null,
      file2: null,
      file3: null,
      vendor:"",
      iteam: "",
      access:false,
      price: "",
      description: "",
      tags: "",
      size: "",
      offer: "",
      BrandName: "",
      imageID:"",
      NidImage:"",
      NidUserID:""
    } 
}

fileChangeNID=event=>{
    this.setState({ NidImage: event.target.files[0]});
  }
onNIDUpload=()=>{
const formData = new FormData();
  formData.append("upload", this.state.NidImage);
  formData.append("upload", this.state.NidUserID);
  fetch("http://localhost:5000/ProductPICNID", {
    method: "POST",
    body:formData,
  });
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
        const {displayproduct} = this.state;
        const styleproduct = {display:displayproduct};
        return (
            <div>
            <DU2 id={this.props.match.params.id}/>
            <div  className='dsbrd-cntnt'>
                <p className='title'>Profile :</p>
                <p className='title-des'>Name : {this.state.name}</p>
                <p className='title-des'>Email : {this.state.email}</p>
                
                  {this.state.access ? (
          <Suspense fallback={<div>Loading...</div>}>
          <p className='vndr-right-ok'>You Have Rights to Add Product </p>
          </Suspense>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
          <div>
          <p className='vndr-right-warn'>You Have Rights to Add Product </p>
          <p className='vndr-right-warn'>Submit Document to get access</p>
          <input
              className="img-admin-input"
              onChange={this.fileChangeNID}
              type="file"
            />
              <button className="btn-upld-pdtc" onClick={this.onNIDUpload}>
              Submit
            </button>
          </div>
          </Suspense>
        )}
                
            </div> 
            <div className="main-admin">
        <div className="main-admin-content">
          <div style={styleproduct} className="addProduct">
            <p className='title-admin'>Add Product by Vendor</p>
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
        </div>
      </div>
        </div>
        )
    }
}
