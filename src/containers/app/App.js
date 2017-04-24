import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import NavigationBar from "../../components/navigation-bar/NavigationBar";
import Home from "../home/Home";
import Compose from "../compose/Compose";
import Gallery from "../gallery/Gallery";
import Notification from "../notification/Notification";
import Profile from "../profile/Profile";
import Me from "../me/Me";

import "./style.css";

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isWechatBrowser: false
    }
  }

  componentDidMount() {

    const ua = navigator.userAgent.toLowerCase();

    this.setState({
      isWechatBrowser: ua.indexOf('micromessenger') !== -1
    });

  }

  render() {
    return (

      <Router>
        <div className="App">

          <NavigationBar {...this.props} />

          <Route exact path="/" component={Home} />
          <Route path="/galleries/new" component={Compose} />
          <Route path="/galleries/:slug" component={Gallery} />
          <Route path="/notifications" component={Notification} />
          <Route path="/users/:id" component={Profile} />
          <Route path="/me" component={Me} />

        </div>
      </Router>

    );
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
