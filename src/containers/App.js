import React, { Component } from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from '../components/app/NavigationBar';
import TabBar from '../components/app/TabBar';
import NewGalleryContainer from './NewGalleryContainer';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <NewGalleryContainer/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TabBar />
      </div>
    );
  }
}

export default App;
