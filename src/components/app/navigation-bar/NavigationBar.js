import React, { Component, PropTypes } from 'react';
import {createGallery} from '../../../actions/Gallery';
import "./style.css";


export default class NavigationBar extends Component {

  static propTypes = {
    title: PropTypes.string,
    submitTitle: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    const { galleryForm: { title, photos }, dispatch } = this.props;

    dispatch(createGallery(title, photos));
  }


  render() {
    const { title, submitTitle } = this.props;

    return (
      <div className="navigation-container">
        <div className="m-container navigation-content-container">
          
          { process.env.INCLUDE_LOGO ? <div className="navigation-logo" /> : <div className="navigation-logo-placeholder" />}
          
          <div>{ title ? title : null }</div>
          
          <div className="navigation-submit" onClick={this.handleSubmit}>{ submitTitle ? submitTitle : '发布' }</div>
          
        </div>
      </div>
    );
  }
}