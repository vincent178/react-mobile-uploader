import React, {Component} from "react";
import {connect} from 'react-redux';
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationBar from "../../components/app/navigation-bar/NavigationBar";
import Compose from '../compose/Compose';
import "./style.css";

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavigationBar {...this.props} />
        <Compose />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
