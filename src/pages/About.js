import React, {Component} from 'react'
import {connect} from 'react-redux'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'
import {init,stopAnimation} from '../background/background.js'

class Background extends Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    return <canvas className="scene scene--full" id="scene"></canvas>
  }
}


class About extends Component {
  componentDidMount() {
    init()
  }
  componentWillUnmount() {
    stopAnimation()
  }

  render () {
    return [
      <div key='heading' className='about'>
        <Nav/>
        <Background />,
        <PageTitle heading='Digital Growth Agency' subheading='We deliver digital solutions that help our clients increase their business agility'/>
      </div>,
      <div key='about-content' className='about-content'>

      </div>
      <Footer key='footer'/>,
    ]
  }
}

export default connect(state => ({
  data: state.data
}))(About)
