import React, {Component, PropTypes} from "react";
import CloseIcon from "../icons/close-icon/CloseIcon";
import "./style.css";

const map = {
  0: "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e15/917166_269526643240090_1156086591_n.jpg",
  1: "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e15/10919269_1573513876220806_393752427_n.jpg",
  2: "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e35/12547117_1550144885297998_1869797763_n.jpg",
  3: "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e15/10554170_801500823213999_509296656_n.jpg",
  4: "https://scontent-sit4-1.cdninstagram.com/t51.2885-15/e15/10254193_292139717618521_1855683159_n.jpg"
};


export default class ImageItem extends Component {
  
  static propTypes = {
    image: PropTypes.string,
    photo: PropTypes.object
  };

  render() {

    const {photo} = this.props;


    const imageUrl = map[this.props.id];
    
    const imageStyle = {
      backgroundImage: `url(${photo.uri})`,
      opacity: photo.loading ? 0.3 : 1
    };

    return (
      <div className="image-container m-small-radius">
        <div className="image-item m-square-box" style={imageStyle} />
        <div className="m-box-center m-box-center-a close-button">
          <CloseIcon size={30} />
        </div>

      </div>
    );
  }
}