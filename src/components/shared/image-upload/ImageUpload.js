import React, { Component } from 'react';
import './style.css';


export default class ImageUpload extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.handleUploadFiles = this.handleUploadFiles.bind(this);
  }
  
  handleUploadFiles(e) {
    const files = e.target.files;
    console.log(files);
  }

  render() {
    return (
      <div className="m-uploader m-square-box m-small-radius">
        <input
          type="file"
          accept="image/jpg,image/jpeg,image/png,image/gif"
          multiple="multiple"
          onChange={this.handleUploadFiles}
        />
      </div>
    );
  }

}