import React, {PropTypes} from 'react';
import './style.css';
import {createGalleryComment} from '../../actions/Gallery';

class ReplyInputCard extends React.PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      comment: null
    }
  }

  handleTextInput(e) {
    this.setState({comment: e.target.value});
  }

  handleClickReply() {
    const { dispatch, slug } = this.props;
    const { comment } = this.state;

    if (comment === null || typeof comment === 'undefined') {
      return;
    }

    dispatch(createGalleryComment(slug, comment));
  }
  
  render() {

    return (
      <div className="reply-input-card-container">
        <div className="reply-textarea-container">
          <textarea name="message"
                    cols="25"
                    rows="3"
                    placeholder="请输入评论内容"
                    onChange={this.handleTextInput.bind(this)} />
        </div>

        <div className="m-action-button reply-button"
             onClick={this.handleClickReply.bind(this)}>
          发送
        </div>
      </div>
    )
  }
}

export default ReplyInputCard;
