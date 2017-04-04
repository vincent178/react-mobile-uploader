import React, {Component} from "react";
import {Motion, spring} from "react-motion";
import ImageItem from "../image-item/ImageItem";
import "./style.css";

export default class ImageList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      mouseXY: [0, 0],
      mouseCircleDelta: [0, 0],
      lastPress: null,
      isPressed: false
    }
  }

  render() {

    return (
      <div className="image-list">

        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
      </div>
    );
  }
}
