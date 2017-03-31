import React, {Component} from 'react';
import ImageItem from "../image-item/ImageItem";

export default class ImageList extends Component {

  render() {

    return (
      <div className="image-list">
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
      </div>
    );
  }
}