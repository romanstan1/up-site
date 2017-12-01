import React, { Component } from 'react';
import {Route,Router,Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import {connect} from 'react-redux'

import Contact from './pages/Contact'
import About from './pages/About'
import Thinking from './pages/Thinking'
import Services from './pages/Services'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <span>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/thinking" component={Thinking} />
            <Route exact path="/services" component={Services} />
            <Route component={About}/>
          </Switch>
        </span>
      </Router>)
  }
}
export default connect(state => ({
  data: state.data
}))(App)
