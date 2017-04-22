import React, {Component} from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationBar from "../../components/app/navigation-bar/NavigationBar";
import Compose from '../compose/Compose';
import Gallery from '../gallery/Gallery';
import WechatJsapiSDKComponent from '../../lib/WechatJsapiSDKComponent';
import "./style.css";

injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar {...this.props} />

          <Route exact path="/" component={Compose} />
          <Route path="/galleries/:slug" component={Gallery}/>
          <Route path="/galleries/new" component={Compose} />

        </div>
      </Router>
    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(WechatJsapiSDKComponent(App));
