import React, { Component } from 'react';
import {Route,Router,Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import {connect} from 'react-redux'

import Contact from './pages/Contact'
import About from './pages/About'
import Thinking from './pages/Thinking'
import Services from './pages/Services'
import Postpage from './pages/Postpage'
import Error404 from './pages/Error404'

// const history = createBrowserHistory()

export default class App extends Component {
  render() {
    return (
      // <Router>
        <span>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route path="/thinking/:slug" component={Postpage} />
            <Route exact path="/thinking" component={Thinking} />
            {/* <Route exact path="/thinking" component={Thinking} />
            <Route exact path="/thinking/:slug" component={Postpage} /> */}
            <Route component={Error404}/>
          </Switch>
        </span>
      // </Router>
    )
  }
}
// export default App
// export default connect(state => ({
//   data: state.data
// }))(App)
