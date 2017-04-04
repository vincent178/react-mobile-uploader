import React, {Component} from "react";
import ImageItem from "../image-item/ImageItem";
import ImageUpload from "../image-upload/ImageUpload";
import MathUtil from "../../../utils/MathUtil";
import "./style.css";
import ArrayUtil from "../../../utils/ArrayUtil";

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
      isPressed: false,
      order: items
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
    const { lastPress, isPressed, mouseXY } = this.state;
    const size = document.querySelector('.image-list').offsetWidth / 3;
    console.log(`size: ${size}`);

    if (isPressed) {

      const currentIndex = items.indexOf(lastPress);

      console.log(`currentIndex: ${currentIndex}`);

      const mouseXYDelta = [e.pageX - mouseXY[0], e.pageY - mouseXY[1]];

      const xCount = Math.round(mouseXYDelta[0] / size);
      const yCount = Math.round(mouseXYDelta[1] / size);

      const newIndex = currentIndex + xCount + yCount * 3;

      const col = MathUtil.clamp(Math.floor(mouseXYDelta[0] / size), 0, 2);
      const row = MathUtil.clamp(Math.floor(mouseXYDelta[1] / size), 0, Math.floor( items.length / 3));

      console.log(`x: ${mouseXYDelta[0]}`);
      console.log(`xCount: ${xCount}`);
      console.log(`col: ${col}`);

      console.log(`y: ${mouseXYDelta[1]}`);
      console.log(`row: ${row}`);
      console.log(`yCount: ${yCount}`);

      console.log(`newIndex: ${newIndex}`);

      const newItems = ArrayUtil.reinsert(items, currentIndex, newIndex);

      this.setState({
        mouseXYDelta
      });
    }
  }

  handleMouseUp() {
    this.setState({
      isPressed: false,
      mouseXYDelta: [0, 0],
      mouseXY: [0, 0]
    })
  }

  render() {

    const { order, lastPress, isPressed, mouseXYDelta } = this.state;

    return (
      <div className="image-list">

        {
          order.map(id => {

              let style = {};

              if (id === lastPress && isPressed) {
                style = {
                  transform: `translate(${mouseXYDelta[0]}px, ${mouseXYDelta[1]}px) scale(1.1)`,
                  zIndex: 99
                }
              } else {
                style = {
                  transform: `translate(0, 0) scale(1)`,
                  zIndex: 0
                }
              }

              return (
                <div
                  className="image-item-for-list-wrap"
                  style={style}
                  onMouseDown={this.handleMouseDown.bind(this, id)}
                  onTouchStart={this.handleTouchStart.bind(this, id)}
                  key={id}
                >
                  <ImageItem />
                </div>
              );

            })
        }

        <div className="image-item-for-list-wrap">
          <ImageUpload />
        </div>
      </div>
    );
  }
}
