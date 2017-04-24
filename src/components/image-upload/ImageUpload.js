import React, { Component } from 'react';
import './style.css';
import {uploadPhoto} from "../../actions/Photo";


export default class ImageUpload extends Component {
  
  constructor(props) {
    
    super(props);
    
    this.handleUploadFiles = this.handleUploadFiles.bind(this);
  }
  
  handleUploadFiles(e) {
    const {dispatch} = this.props;

    const files = Array.from(e.target.files);

    files.forEach(file => {

      const reader = new FileReader();

      reader.onload = function() {

        dispatch(uploadPhoto(file, this.result));

      };

      reader.readAsDataURL(file);

    });
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