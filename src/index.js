import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/app/App';
import reducers from './reducers';
import './index.css';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
