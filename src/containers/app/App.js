import React, {Component} from "react";
import {connect} from 'react-redux';
import injectTapEventPlugin from "react-tap-event-plugin";
import ImageList from "../../components/shared/image-list/ImageList";
import NavigationBar from "../../components/app/navigation/NavigationBar";
import TextInput from "../../components/shared/text-input/TextInput";
import "./style.css";

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavigationBar {...this.props} />
        <div className="m-container">
          <TextInput {...this.props} />
          <ImageList {...this.props} />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
