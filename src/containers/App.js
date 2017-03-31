import React, { Component } from 'react';
import logo from '../icons/logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from '../components/app/NavigationBar';
import TabBar from '../components/app/TabBar';
import NewGalleryContainer from './NewGalleryContainer';
import ImageUploader from '../components/shared/ImageUploader';
import ImageUpload from '../components/shared/image-upload/ImageUpload';
import './App.css';
import ImageList from "../components/shared/image-list/ImageList";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageList/>
        <NavigationBar />
        <NewGalleryContainer/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <ImageUpload />

        <ImageUploader />
        <TabBar />
      </div>
    );
  }
}

export default App;
