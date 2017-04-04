import React, {Component, PropTypes} from "react";
import {findDOMNode} from 'react-dom';
import CloseIcon from "../icons/close-icon/CloseIcon";
import "./style.css";
import image from './s1.jpg';


export default class ImageItem extends Component {
  
  static propTypes = {
    image: PropTypes.string
  };

  constructor(props) {
    super(props);

    this._mouseXY = [0, 0];

    this.state = {
      isPressed: false,
      mouseXYDelta: [0, 0]
    }
  }

  componentDidMount() {
    const node = findDOMNode(this);

    node.addEventListener('touchstart', this.handleTouchStart.bind(this), false);
    node.addEventListener('touchend', this.handleTouchEnd.bind(this), false);

    node.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
    node.addEventListener('mouseup', this.handleMouseUp.bind(this), false);

    node.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
    node.addEventListener('mousemove', this.handleMouseMove.bind(this), false);

  }

  handleTouchStart(e) {
    this.handleMouseDown(e.touches[0]);
    document.addEventListener('touchmove', this.handleTouchMove.bind(this), false);
  }

  handleTouchMove(e) {
    this.handleMouseMove(e.touches[0]);
  }

  handleTouchEnd(e) {
    this.handleMouseUp(e.touches[0]);
  }

  handleMouseDown(e) {
    console.log('starting!');

    this._mouseXY = [e.pageX, e.pageY];

    this.setState({
      isPressed: true
    });
  }

  handleMouseMove(e) {
    console.log('moving');

    this.setState({
      mouseXYDelta: [e.pageX - this._mouseXY[0], e.pageY - this._mouseXY[1]]
    })
  }

  handleMouseUp() {
    console.log('ending');
    this._mouseXY = [0, 0];
    this.setState({
      isPressed: false,
      mouseXYDelta: [0, 0]
    });
  }



  render() {
    const imageBackup = "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e15/10919269_1573513876220806_393752427_n.jpg";
    
    const imageStyle = {
      backgroundImage: `url(${image})`
    };

    const { mouseXYDelta, isPressed } = this.state;
    
    return (
      <div
        className="image-container m-image-box"
        style={{
          transform: `translate(${mouseXYDelta[0]}px, ${mouseXYDelta[1]}px) scale(${isPressed ? 1.1 : 1.0})`,
          zIndex: isPressed ? 99 : 1
        }}
      >

        <div className="image-item" style={imageStyle}></div>
        <div className="m-box-center m-box-center-a close-button">
          <CloseIcon size={24} />
        </div>

      </div>
    );
  }
}