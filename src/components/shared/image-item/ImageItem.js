import React, {Component} from "react";
import CloseIcon from "../icons/close-icon/CloseIcon";
import "./style.css";
import image from './s1.jpg';


export default class ImageItem extends Component {

  render() {
    
    const imageStyle = {
      backgroundImage: `url(https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e15/10919269_1573513876220806_393752427_n.jpg)`
    };
    
    return (
      <div className="image-wrap m-image-box">
        <div className="image-container" style={imageStyle}></div>
        <div className="m-box-center m-box-center-a close-button">
          <CloseIcon size={24} />
        </div>
      </div>
    );
  }
}