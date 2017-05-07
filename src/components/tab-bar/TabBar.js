import React, {Component} from 'react';
import './style.css';
import home from '../icons/home.png';
import users from '../icons/users.png';
import compose from '../icons/compose.png';
import me from '../icons/me.png';

export default class TabBar extends Component {
  
  render() {
    return (
      <div className="tabbar-container">

        <div className="tabbar-inner-container">
          <a href="/">
            <img src={home} alt="" width={27} height={27} />
          </a>
          <a href="/users?scope=recommend">
            <img src={users} alt="" width={27} height={27} />
          </a>
          <a href="/compose">
            <img src={compose} alt="" width={32} height={32} />
          </a>
          <a href="/me">
            <img src={me} alt="" width={27} height={27} />
          </a>
        </div>

      </div>
    );
  }
  
}