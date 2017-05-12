import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import Home from './components/Home'
import Features from './components/Features'
import Register from './components/Register'
import Profile from './components/Profile'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/register' component={ Register } />
          <Route path='/features' component={ Features } />
          <Route path='/profile' component={ Profile } />
          <Route path='/' component={ Home } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.querySelector('.container-fluid'));
