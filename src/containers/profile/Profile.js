import React from 'react';
import {connect} from 'react-redux';

class Profile extends React.Component {

  render() {
    return (
      <h1>This is user profile</h1>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps)(Profile);