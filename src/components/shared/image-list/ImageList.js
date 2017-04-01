import React, {Component} from 'react';
import ImageItem from "../image-item/ImageItem";
import "./style.css";
import ImageUpload from "../image-upload/ImageUpload";

export default class ImageList extends Component {

  render() {

    return (
      <div className="image-list">
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        
        <ImageUpload/>
      </div>
    );
  }
}