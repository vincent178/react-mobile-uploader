import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import ImageItem from "../image-item/ImageItem";
import ImageUpload from "../image-upload/ImageUpload";
import {range} from 'lodash';
import "./style.css";

function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}


function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = {stiffness: 300, damping: 50};
const itemCount = 4;


export default class ImageList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      topDeltaY: 0,
      mouseY: 0,
      isPressed: false,
      originalPosOfLastPressed: 0,
      order: range(itemCount)
    }
  }
  
  
  componentDidMount() {
    window.addEventListener('touchmove', this.handleTouchMove.bind(this));
    window.addEventListener('touchend', this.handleMouseUp.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
    window.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }

  handleTouchStart(key, pressLocation, e) {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  }

  handleTouchMove(e) {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  }


  handleMouseDown(pos, pressY, {pageX, pageY}) {
    console.log("FFFFFFFFFFFF");
    this.setState({
      topDeltaX: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos
    });
  }

  handleMouseMove({pageX, pageY}) {
    const {isPressed, topDeltaY, order, originalPosOfLastPressed} = this.state;

    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentColumn = clamp(Math.round(mouseY / 100), 0, itemCount - 1);

      let newOrder = order;

      if (currentColumn !== order.indexOf(originalPosOfLastPressed)) {
        newOrder = reinsert(order, order.indexOf(originalPosOfLastPressed), currentColumn);
      }

      this.setState({mouseY, order: newOrder});
    }
  }

  handleMouseUp() {
    this.setState({isPressed: false, topDeltaY: 0});
  }

  render() {
    const {mouseY, isPressed, originalPosOfLastPressed, order} = this.state;
  
    return (
      <div className="image-list">
        {range(itemCount).map(i => {

          const style = originalPosOfLastPressed === i && isPressed ?
            {
              scale: spring(1.1, springConfig),
              shadow: spring(1.6, springConfig),
              y: mouseY
            } :
            {
              scale: spring(1, springConfig),
              shadow: spring(1, springConfig),
              y: spring(order.indexOf(1) * 100, springConfig)
            };

          return (
            <Motion style={style} key={i}>
              {
                ({scale, shadow, y}) =>
                  <div
                    onMouseDown={this.handleMouseDown.bind(this, i, y)}
                    onTouchStart={this.handleTouchStart.bind(this, i, y)}
                    style={{
                      boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                      transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                      WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                      zIndex: i === originalPosOfLastPressed ? 99 : i
                    }}>
                    <ImageItem />
                  </div>
              }

            </Motion>
          )

        })}


        {/*<ImageUpload/>*/}
      </div>
    );
  }
}