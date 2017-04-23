import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import App from './containers/app/App';
import Home from './containers/home/Home';
import Compose from './containers/compose/Compose';
import Gallery from './containers/gallery/Gallery';
import Notification from './containers/notification/Notification';
import Profile from './containers/profile/Profile';
import Me from './containers/me/Me';


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <Route path="/" component={App}>
        <Route exact path="/" component={Home} />
        <Route path="galleries/new" component={Compose} />
        <Route path="galleries/:slug" component={Gallery} />
        <Route path="notifications" component={Notification} />
        <Route path="users/:id" component={Profile} />
        <Route path="me" component={Me} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
