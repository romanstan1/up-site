import React from 'react'
import { render } from 'react-dom'

import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import {Provider} from 'react-redux'
import App from './App';

import './styles/index.css';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
