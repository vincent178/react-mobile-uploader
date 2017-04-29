import React, {PropTypes} from 'react';
import like from '../../components/icons/like.png';
import liked from '../../components/icons/liked.png';
import {likeGallery} from '../../actions/Gallery';

export default class LikeButton extends React.Component {

  static propTypes = {
    isLiked: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  handleClick() {
    console.debug('[LikeButton#handleClick]');

    const {isLiked, dispatch, id} = this.props;

    if (!isLiked) {
      dispatch(likeGallery(id));
    }
  }

  render() {

    const {isLiked} = this.props;

    if (isLiked) {
      return <img src={liked} width={38} height={38} onClick={this.handleClick.bind(this)} />;
    } else {
      return <img src={like} width={38} height={38} onClick={this.handleClick.bind(this)} />;
    }
  }

}