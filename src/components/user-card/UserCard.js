import React from 'react';
import './style.css';

class UserCard extends React.Component {

  render() {

    return (
      <div className="user-card-container">

        <div className="sidebar"></div>

        <div className="user-card-content">

          <div>作品作者</div>

          <div>
            <div>avatar</div>
            <div>username</div>
          </div>
        </div>

      </div>
    )

  }

}


export default UserCard;
