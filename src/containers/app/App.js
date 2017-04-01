import React, {Component} from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import ImageList from "../../components/shared/image-list/ImageList";
import NavigationBar from "../../components/app/navigation/NavigationBar";
import "./style.css";
import TextInput from "../../components/shared/text-input/TextInput";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <div className="m-content">
          <TextInput/>
          <ImageList/>
        </div>
      </div>
    );
  }
}

export default App;
