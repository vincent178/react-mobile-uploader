import React, {Component} from 'react';
import "./style.css";

export default class TextInput extends Component {
  
  render() {
    
    return (
      <textarea placeholder="请输入标题..." className="text-input" />
    );
  }
}