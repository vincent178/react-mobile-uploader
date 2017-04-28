import React, {PropTypes} from 'react';
import './style.css';

class UserCard extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isMe: PropTypes.bool.isRequired,
    isFollowing: PropTypes.bool.isRequired
  };

  render() {

    const {name, avatar, isMe, isFollowing} = this.props;

    let actionText;

    if (isMe) {
      actionText = '我的';
    } else if (isFollowing) {
      actionText = '已关注';
    } else {
      actionText = '关注';
    }

    return (
      <div className="user-card-container">

        <div className="sidebar" />

        <div className="user-card-content">

          <div className="user-card-title">作品作者</div>

          <div className="user-card-info">
            <div className="user-card-name-avatar">
              <div className="m-circle user-card-avatar" style={{backgroundImage: `url("${avatar}")`}}>
                <img className="user-card-avatar" src={avatar} alt=""/>
              </div>
              <div className="user-card-name">
                {name}
              </div>
            </div>

            <div className="m-action-button">
              { actionText }
            </div>

          </div>

        </div>

      </div>
    )

  }

}


export default UserCard;
