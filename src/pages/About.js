import React, {Component} from 'react'
import {connect} from 'react-redux'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'

import {init} from '../background/background.js'


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

  render () {
    return [
      <div key='heading' className='about'>
        <Nav/>
        <PageTitle heading='Digital Growth Agency' subheading='We deliver digital solutions that help our clients increase their business agility'/>
      </div>,
      <Background key='background'/>,
      <Footer key='footer'/>
    ]
  }
}



export default connect(state => ({
  data: state.data
}))(About)
