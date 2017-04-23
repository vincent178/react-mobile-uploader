import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {

  render() {
    return <h1>This is Home page</h1>
  }

}

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps)(Home);