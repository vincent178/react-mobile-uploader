import React, {Component, PropTypes} from 'react';


export default class CloseIcon extends Component {

  static propTypes = {
    handleClick: PropTypes.func
  };

  render() {
    const size = this.props.size ? this.props.size : 200;

    const color = {fill: this.props.color ? this.props.color : '#fff'};

    return (
      <svg className="close-icon"
           viewBox="0 0 1024 1024"
           width={size}
           height={size}
           style={color}
           onClick={this.props.handleClick}
      >
        <path d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881Z" />
        <path d="M795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" />
      </svg>
    );
  }
}