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
  
  componentWillReceiveProps(nextProps) {
  
    const { submitDisabled } = this.state;
    const { galleryForm } = nextProps;
    
     if (galleryForm.title && galleryForm.photos.length > 0 && submitDisabled) {
      this.setState({submitDisabled: false});
    }
   
  }
  
  


  render() {
    const { submitDisabled } = this.state;

    const { app: { navigationBarTitle, submitButtonTitle } } = this.props;

    const buttonStyle = {
      background: submitDisabled ? "#ccc": null
    };

    return (
      <div className="navigation-container">
        <div className="m-container navigation-content-container">

          <div className="navigation-logo" />

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