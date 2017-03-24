import React, { Component } from 'react';
import TextInput from '../components/shared/TextInput';
import ImageUploader from '../components/shared/ImageUploader';


export default class NewGalleryContainer extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <TextInput/>
        <ImageUploader/>
      </div>
    );
  }
}