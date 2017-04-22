import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageList from "../../components/shared/image-list/ImageList";
import TextInput from "../../components/shared/text-input/TextInput";
import {galleryFormChangeTitle} from "../../actions/GalleryForm";

class Compose extends Component {

  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { dispatch } = this.props;
    dispatch(galleryFormChangeTitle(e.target.value));
  }

  render() {
    window.wx.previewImage({
      current: 'http://7xjgwh.com1.z0.glb.clouddn.com/uploads/photo/image/207997/234428sojh50jwtu9utwhu.jpg',
      urls: []
    });

    return (
      <div className="m-container">
        <TextInput {...this.props} handleInput={this.handleInput} />
        <ImageList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Compose);