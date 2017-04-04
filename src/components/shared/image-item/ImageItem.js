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

    this.state = {
      isPressed: false,
      mouseXY: [0, 0],
      mouseXYDelta: [0, 0]
    }
  }

  componentDidMount() {
    const node = findDOMNode(this);

    node.addEventListener('touchstart', this.handleTouchStart.bind(this));
    node.addEventListener('touchend', this.handleTouchEnd.bind(this));

    node.addEventListener('mousedown', this.handleMouseDown.bind(this));
    node.addEventListener('mouseup', this.handleMouseUp.bind(this));

    node.addEventListener('touchmove', this.handleTouchMove.bind(this));
    node.addEventListener('mousemove', this.handleMouseMove.bind(this));

  }

  handleTouchStart(e) {
    this.handleMouseDown(e);
  }

  handleTouchMove(e) {
    this.handleMouseMove(e);
  }

  handleTouchEnd(e) {
    this.handleMouseUp(e);
  }

  handleMouseDown(e) {
    console.log('starting!');

    console.log(e);

    const touch = e.touches[0];

    this.setState({
      isPressed: true,
      mouseXY: [touch.pageX, touch.pageY]
    });
  }

  handleMouseMove(e) {
    console.log(e);
    const { mouseXY, mouseXYDelta } = this.state;
    const touch = e.touches[0];

    console.log(touch.pageX);

    this.setState({
      mouseXYDelta: [touch.pageX - mouseXY[0], touch.pageY - mouseXY[1]]
    })
  }

  handleMouseUp() {
    console.log('ending');
    this.setState({
      isPressed: false,
      mouseXY: [0, 0],
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
      <div className="image-container m-image-box" style={{
        transform: `translate(${mouseXYDelta[0]}px, ${mouseXYDelta[1]}px) scale(${isPressed ? 1.1 : 1.0})`,
        zIndex: isPressed ? 99 : 1
      }}>

        <div className="image-item" style={imageStyle}></div>
        <div className="m-box-center m-box-center-a close-button">
          <CloseIcon size={24} />
        </div>

      </div>
    );
  }
}