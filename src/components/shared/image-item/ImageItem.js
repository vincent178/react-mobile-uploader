import React, {Component} from 'react';
import './style.css';
import CloseIcon from "../icons/close-icon/CloseIcon";


export default class ImageItem extends Component {

  render() {

    return (
      <div className="m-box-center m-box-center-a image-wrap image-container">
        <div className="m-box-center m-box-center-a close-button">
          <CloseIcon size={24} />
        </div>
      </div>
    );
  }
}