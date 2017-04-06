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

    this.state = {
      submitDisabled: true,
      submitLoading: false
    }
  }

  handleSubmit() {

    if (!this.state.submitDisabled) {
      const { galleryForm: { title, photos }, dispatch } = this.props;

      this.setState({
        submitDisabled: true,
        submitLoading: true
      });

      dispatch(createGallery(title, photos))
    }
  }


  render() {
    const { submitDisabled } = this.state;

    const { app, galleryForm } = this.props;
    const { navigationBarTitle, submitButtonTitle } = app;


    if (galleryForm.title && galleryForm.photos.length > 0) {
      this.setState({submitDisabled: false});
    }

    const buttonStyle = {
      background: submitDisabled ? "#ccc": null
    };


    return (
      <div className="navigation-container">
        <div className="m-container navigation-content-container">
          
          { process.env.INCLUDE_LOGO
            ? <div className="navigation-logo" />
            : <div className="navigation-logo-placeholder" /> }
          
          <div>{ navigationBarTitle ? navigationBarTitle : null }</div>
          
          <div className="navigation-submit"
               onClick={this.handleSubmit}
               style={buttonStyle}
          >
            { submitButtonTitle ? submitButtonTitle : '发布' }
          </div>
        </div>
      </div>
    );
  }
}