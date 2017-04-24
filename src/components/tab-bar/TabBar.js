import React, {Component} from 'react';
import './style.css';

export default class TabBar extends Component {
  
  render() {
    return (
      <div className="tabbar-container">

        <div className="tabbar-inner-container">
          <a href="/">Home</a>
          <a href="/galleries/dce60d96-ca7d-4778-bb9b-acd94f39ffdc">Gallery</a>
          <a href="/compose">Compose</a>
          <a href="/me">Me</a>
        </div>


      </div>
    );
  }
  
}