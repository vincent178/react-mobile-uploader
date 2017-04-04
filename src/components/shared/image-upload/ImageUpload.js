import React, { Component } from 'react';
import './style.css';


export default class ImageUpload extends Component {


  render() {

    return (
      <div className="m-uploader m-square-box">
        <input type="file"
               accept="image/jpg,image/jpeg,image/png,image/gif" />
      </div>
    );
  }

}