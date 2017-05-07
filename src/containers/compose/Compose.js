import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageList from "../../components/image-list/ImageList";
import TextInput from "../../components/text-input/TextInput";
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
    return (
      <div className="m-container" style={{background: '#fff'}}>
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