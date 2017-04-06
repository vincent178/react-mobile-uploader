import React, {Component,PropTypes} from 'react';
import "./style.css";

export default class TextInput extends Component {

  static propTypes = {
    handleInput: PropTypes.func.isRequired
  };

  render() {
    return (
      <textarea placeholder="请输入标题..." className="text-input" onChange={this.props.handleInput} />
    );
  }
}