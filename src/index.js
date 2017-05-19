import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import _ from 'lodash'

import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import RequireAuth from './components/RequireAuth'
import rootReducer from './reducers';
import { AUTH_USER } from './actions/types'
import { getUserBudgets } from './actions'
import { saveState, loadState } from './persistState'


const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(reduxThunk, promise)
)

store.subscribe(_.throttle(() => {
    saveState(store.getState())
  }, 1000))

const token = localStorage.getItem('token')
const userId = localStorage.getItem('userId')

if (token !== null && userId !== null) {
  store.dispatch({
                  type: AUTH_USER,
                  payload : userId
                 })
  store.dispatch(getUserBudgets(userId))
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/register' component={ Register } />
          <Route path='/profile' component={ RequireAuth(Profile) } />
          <Route path='/signup' component={ SignUp } />
          <Route path='/signin' component={ SignIn } />
          <Route path='/signout' component={ SignOut } />
          <Route path='/' component={ Home }/>
        </Switch>
      </div>
  </BrowserRouter>
  </Provider>, document.querySelector('.container-fluid'));
