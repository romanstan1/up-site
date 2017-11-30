import React, { Component } from 'react';
import {Route,Router,Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import About from './pages/About'
import Thinking from './pages/Thinking'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <span>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/thinking" component={Thinking} />
            <Route component={Homepage}/>
          </Switch>
        </span>
      </Router>)
  }
}
export default App
