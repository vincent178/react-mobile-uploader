import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";

import App from "./containers/app/App";


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider>,
  document.getElementById('root')
);
