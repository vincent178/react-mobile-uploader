import React, {Component} from "react";
import ImageItem from "../image-item/ImageItem";
import "./style.css";
import ImageUpload from "../image-upload/ImageUpload";

const items = [0, 1, 2, 3, 4];

export default class ImageList extends Component {
  
  constructor(props) {
    super(props);

    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.state = {
      mouseXY: [0, 0],
      mouseXYDelta: [0, 0],
      lastPress: null,
      isPressed: false
    }
  }

  componentDidMount() {
    document.addEventListener('touchmove', this.handleTouchMove, false);
    document.addEventListener('touchend', this.handleTouchEnd, false);
    document.addEventListener('mousemove', this.handleMouseMove, false);
    document.addEventListener('mouseup', this.handleMouseUp, false);
  }

  handleTouchStart(id, e) {
    this.handleMouseDown(id, e.touches[0]);
  }

  handleTouchMove(e) {
    this.handleMouseMove(e.touches[0]);
  }

  handleTouchEnd(e) {
    this.handleMouseUp(e.touches[0]);
  }

  handleMouseDown(id, e) {
    this.setState({
      lastPress: id,
      isPressed: true,
      mouseXY: [e.pageX, e.pageY]
    })
  }

  handleMouseMove(e) {
    const { mouseXY } = this.state;

    this.setState({
      mouseXYDelta: [e.pageX - mouseXY[0], e.pageY - mouseXY[1]]
    });

    console.log(this.state.mouseXYDelta);
  }

  handleMouseUp(e) {
    this.setState({
      isPressed: false,
      mouseXYDelta: [0, 0],
      mouseXY: [0, 0]
    })
  }

  render() {

    const { lastPress, isPressed, mouseXYDelta } = this.state;

    return (
      <div className="image-list">

        {
          items
            .map( id => {

              let style = {};

              if (id === lastPress && isPressed) {
                style = {
                  transform: `translate(${mouseXYDelta[0]}px, ${mouseXYDelta[1]}px) scale(1.1)`,
                  zIndex: 99
                }
              } else {
                style = {
                  zIndex: 0
                }
              }

              return (
                <div
                  className="image-item-wrap"
                  style={style}
                  onMouseDown={this.handleMouseDown.bind(this, id)}
                  onTouchStart={this.handleTouchStart.bind(this, id)}
                  key={id}
                >
                  <ImageItem/>
                </div>
              );

            })
        }

        <div className="image-item-wrap">
          <ImageUpload />
        </div>
      </div>
    );
  }
}
