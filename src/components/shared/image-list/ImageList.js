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


export default class ImageList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      mouseXY: [0, 0],
      mouseCircleDelta: [0, 0], // difference between mouse and circle pos for x + y coords, for dragging
      lastPress: null, // key of the last pressed component
      isPressed: false,
      // order: range(count), // index: visual position. value: component key/id
    }
  }
  
  
  // componentDidMount() {
  //   window.addEventListener('touchmove', this.handleTouchMove);
  //   window.addEventListener('touchend', this.handleMouseUp);
  //   window.addEventListener('mousemove', this.handleMouseMove);
  //   window.addEventListener('mouseup', this.handleMouseUp);
  // }
  //
  // handleTouchStart(key, pressLocation, e) {
  //   this.handleMouseDown(key, pressLocation, e.touches[0]);
  // }
  //
  // handleTouchMove(e) {
  //   e.preventDefault();
  //   this.handleMouseMove(e.touches[0]);
  // }
  //
  // handleMouseMove({pageX, pageY}) {
  //   const {order, lastPress, isPressed, mouseCircleDelta: [dx, dy]} = this.state;
  //   if (isPressed) {
  //     const mouseXY = [pageX - dx, pageY - dy];
  //     const col = clamp(Math.floor(mouseXY[0] / width), 0, 2);
  //     const row = clamp(Math.floor(mouseXY[1] / height), 0, Math.floor(count / 3));
  //     const index = row * 3 + col;
  //     const newOrder = reinsert(order, order.indexOf(lastPress), index);
  //     this.setState({mouseXY, order: newOrder});
  //   }
  // }
  //
  // handleMouseDown(key, [pressX, pressY], {pageX, pageY}) {
  //   this.setState({
  //     lastPress: key,
  //     isPressed: true,
  //     mouseCircleDelta: [pageX - pressX, pageY - pressY],
  //     mouseXY: [pressX, pressY],
  //   });
  // }
  
  handleMouseUp() {
    this.setState({isPressed: false, mouseCircleDelta: [0, 0]});
  }

  render() {
    // const {order, lastPress, isPressed, mouseXY} = this.state;
    //
    // [1, 2, 3, 4].map((_, key) => {
    //
    //   let style;
    //   let x;
    //   let y;
    //
    //   if (key === lastPress && isPressed) {
    //     [x, y] = mouseXY;
    //     style = {
    //       translateX: x,
    //       translateY: y,
    //       scale: spring(1.2, springSetting1),
    //       boxShadow: spring((x - (3 * width - 50) / 2) / 15, springSetting1)
    //     }
    //   } else {
    //     [x, y] = ;
    //
    //     style = {
    //
    //     }
    //   }
    //
    //   return (
    //     <Motion key={key} style={style}>
    //       {
    //         ({translateX, translateY, scale, boxShadow}) =>
    //           <div
    //             onMouseDown={this.handleMouseDown.bind(null, key, [x, y])}
    //             onTouchStart={this.handleTouchStart.bind(null, key, [x, y])}
    //             style={{
    //               WebkitTransform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
    //               transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
    //               zIndex: key === lastPress ? 99 : visualPosition,
    //               boxShadow: `${boxShadow}px 5px 5px rgba(0,0,0,0.5)`,
    //             }}>
    //             <ImageItem />
    //           </div>
    //       }
    //
    //     </Motion>
    //   )
    //
    // });
    
    // console.log(document.querySelector('image-list').width);
  
    return (
      <div className="image-list">
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        
        <ImageUpload/>
      </div>
    );
  }
}