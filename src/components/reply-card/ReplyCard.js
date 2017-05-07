import React, {PropTypes} from 'react';
import './style.css';
import {timeAgo} from '../../utils/DateUtil';

class ReplyCard extends React.PureComponent {

  static propTypes = {
    comment: PropTypes.object.isRequired
  };

  render() {

    const comment = this.props.comment;
    const creator = comment.creator;

    return (
      <div className="reply-card-container">

        <div className="reply-card-avatar" style={{backgroundImage: `url(${creator.avatar})`}}>
        </div>
        <div className="reply-card-content">

          <div className="reply-card-info">
            <div>{creator.name}</div>
            <div>{timeAgo(comment.created_at)}</div>
          </div>

          <div className="reply-card-text">
            {comment.content}
          </div>
        </div>
      </div>
    )
  }
  
}

export default ReplyCard;