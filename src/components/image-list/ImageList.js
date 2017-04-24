import React, {Component} from "react";
import ImageItem from "../image-item/ImageItem";
import ImageUpload from "../image-upload/ImageUpload";
import ArrayUtil from "../../utils/ArrayUtil";
import {galleryFormReorder} from '../../actions/GalleryForm';
import "./style.css";

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
      currentOrder: []
    }
  }

  componentDidMount() {
    document.addEventListener('touchmove', this.handleTouchMove, false);
    document.addEventListener('touchend', this.handleTouchEnd, false);
    document.addEventListener('mousemove', this.handleMouseMove, false);
    document.addEventListener('mouseup', this.handleMouseUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('touchmove', this.handleTouchMove, false);
    document.removeEventListener('touchend', this.handleTouchEnd, false);
    document.removeEventListener('mousemove', this.handleMouseMove, false);
    document.removeEventListener('mouseup', this.handleMouseUp, false);
  }

  handleTouchStart(uuid, e) {
    this.handleMouseDown(uuid, e.touches[0]);
  }

  handleTouchMove(e) {
    if (e.type === 'touchmove') e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  }

  handleTouchEnd(e) {
    this.handleMouseUp(e.touches[0]);
  }

  handleMouseDown(uuid, e) {

    if (Array.from(e.target.classList).indexOf('close-icon') === -1) {
      this.setState({
        lastPress: uuid,
        isPressed: true,
        mouseXY: [e.pageX, e.pageY]
      })
    }
  }

  handleMouseMove(e) {
    const { isPressed, mouseXY } = this.state;

    if (isPressed) {
      this.setState({
        mouseXYDelta: [e.pageX - mouseXY[0], e.pageY - mouseXY[1]]
      });
    }
  }

  handleMouseUp() {
    const { galleryForm: { photos }, dispatch } = this.props;

    if (photos.length > 0 && this.state.isPressed) {

      const [_, newItems] = this.calculateNewLayout(photos, this.state.lastPress, this.state.mouseXYDelta);
      dispatch(galleryFormReorder(newItems));
    }

    this.setState({
      isPressed: false,
      mouseXYDelta: [0, 0],
      mouseXY: [0, 0]
    })
  }

  calculateNewLayout(items, lastPress, mouseXYDelta) {

    const size = document.querySelector('.image-list').offsetWidth / 3;

    const layout = items.map((_, n) => {
      const row = Math.floor(n / 3);
      const col = n % 3;
      return [size * col, size * row];
    });

    const movingItemCurrentIndex = items.indexOf(lastPress);

    const xCount = Math.round(mouseXYDelta[0] / size);
    const yCount = Math.round(mouseXYDelta[1] / size);

    const movingItemNewIndex = movingItemCurrentIndex + xCount + yCount * 3;
    const newItems = ArrayUtil.reinsert(items, movingItemCurrentIndex, movingItemNewIndex);

    return [layout, newItems];
  }

  render() {

    const { lastPress, isPressed, mouseXYDelta } = this.state;
    const { galleryForm: { photos }, entity } = this.props;
    const items = photos;

    return (
      <div className="image-list">

        {
          items.map(uuid => {

            const photo = entity.photos[uuid];

            let style = {};

            if (isPressed) {

              if (uuid === lastPress) {

                style = {
                  transform: `translate(${mouseXYDelta[0]}px, ${mouseXYDelta[1]}px) scale(1.1)`,
                  zIndex: 99
                }

              } else {

                const [layout, newItems] = this.calculateNewLayout(items, lastPress, mouseXYDelta);

                const idCurrentIndex = items.indexOf(uuid);
                const idNewIndex = newItems.indexOf(uuid);

                if (idCurrentIndex === idNewIndex) {

                  style = {
                    transform: `translate(0, 0) scale(1)`,
                    zIndex: 0
                  }

                } else {

                  const x = layout[idNewIndex][0] - layout[idCurrentIndex][0];
                  const y = layout[idNewIndex][1] - layout[idCurrentIndex][1];

                  style = {
                    transform: `translate(${x}px, ${y}px) scale(1)`,
                    zIndex: 0,
                    transition: 'all 0.2s ease'
                  }
                }
              }

            }

            return (
              <div
                className="image-item-for-list-wrap"
                style={style}
                onMouseDown={this.handleMouseDown.bind(this, uuid)}
                onTouchStart={this.handleTouchStart.bind(this, uuid)}
                key={uuid}
              >
                <ImageItem id={uuid} photo={photo} dispatch={this.props.dispatch} />
              </div>
            );

          })
        }

        <div className="image-item-for-list-wrap">
          <ImageUpload dispatch={this.props.dispatch} />
        </div>
      </div>
    );
  }
}
