import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImageList from "../../components/shared/image-list/ImageList";
import TextInput from "../../components/shared/text-input/TextInput";

class Compose extends Component {
  render() {
    return (
      <div className="m-container">
        <TextInput {...this.props} />
        <ImageList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Compose);