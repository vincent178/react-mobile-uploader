import React, {Component, PropTypes} from "react";
import CloseIcon from "../icons/close-icon/CloseIcon";
import "./style.css";

export default class ImageItem extends Component {
  
  static propTypes = {
    photo: PropTypes.object.isRequired
  };

  render() {

    const {photo} = this.props;

    const imageStyle = {
      backgroundImage: `url(${photo.uri})`,
      opacity: photo.loading ? 0.3 : 1
    };

    return (
      <div className="image-container m-small-radius">
        <div className="image-item m-square-box" style={imageStyle} />
        <div className="m-box-center m-box-center-a close-button">
          <CloseIcon size={30} />
        </div>

      </div>
    );
  }
}