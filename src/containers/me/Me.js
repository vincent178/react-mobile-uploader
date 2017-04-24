import React from 'react';
import {connect} from 'react-redux';

class Me extends React.Component {

  render() {
    return <h1>This is me page</h1>
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Me);
