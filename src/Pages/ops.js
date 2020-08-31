import React from 'react'
 
export default class Upload extends React.Component{
 
    constructor(){
        super()
        this.state = {fileName: ''}
    }
 
    upload() {
 
        const myFileInputs = document.querySelector("input[type='file']")
 
        const formData = new FormData()
        formData.append('upload', myFileInputs.files[0])
 
        fetch('http://localhost:5000/ProductADD', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({fileName: data.originalname})
            })
    }
 
 
 
    render(){
        return(
        <div>
            <input type='text' id='fileName' name='fileName' value={this.state.fileName}/>
            <input type="file"/>
            <button onClick={this.upload.bind(this)}>Upload</button>
        </div>
 
        )
    }
 
}
