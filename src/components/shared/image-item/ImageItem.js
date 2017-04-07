import React, {Component, PropTypes} from "react";
import CloseIcon from "../icons/close-icon/CloseIcon";
import {galleryFormRemovePhoto} from '../../../actions/GalleryForm';
import {removePhoto} from '../../../actions/Photo';
import "./style.css";

export default class ImageItem extends Component {

  constructor(props) {

    super(props);

    this.removeImage = this.removeImage.bind(this);
  }

  static propTypes = {
    photo: PropTypes.object.isRequired
  };

  removeImage() {
    const { dispatch, photo } = this.props;

    if (!photo.loading) {
      console.debug(`[ImageItem] about to remove image: ${photo.id}`);
      dispatch(galleryFormRemovePhoto(photo.id));
      dispatch(removePhoto(photo.uuid));
    }
  }

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
          <CloseIcon size={30} handleClick={this.removeImage} />
        </div>

      </div>
    );
  }
}