import React, {PropTypes} from 'react';
import {doFollow, doUnfollow} from "../../actions/User";
import './style.css';

class UserCard extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  handleClick() {
    const {user: {id, meta}, dispatch} = this.props;

    if (meta.is_me) {

    } else if (meta.is_following) {
      dispatch(doUnfollow(id));
    } else {
      dispatch(doFollow(id));
    }
  }

  render() {

    const {user: {meta, name, avatar}} = this.props;

    let actionText;

    if (meta.is_me) {
      actionText = '我的';
    } else if (meta.is_following) {
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

            <div className="m-action-button" onClick={this.handleClick.bind(this)}>
              { actionText }
            </div>

          </div>

        </div>

      </div>
    )

  }

}


export default UserCard;
