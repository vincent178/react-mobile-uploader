import React from 'react';
import './style.css';

class ReplyInputCard extends React.Component {
  
  render() {

    return (
      <div className="reply-input-card-container">
        <div className="reply-textarea-container">
          <textarea name="message"
                    cols="25"
                    rows="3"
                    placeholder="请输入评论内容" />
        </div>

        <div className="m-action-button reply-button">发送</div>
      </div>
    )
  }

}

export default ReplyInputCard;
