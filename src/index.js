import React from 'react'
import { render } from 'react-dom'

import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import {Provider} from 'react-redux'
import App from './App';

import createBrowserHistory from 'history/createBrowserHistory'
import './styles/index.css';
const history = createBrowserHistory()



render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
