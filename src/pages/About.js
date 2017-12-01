import React, {Component} from 'react'
import {connect} from 'react-redux'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'

class About extends Component {

  render () {
    return [
      <div key='heading' className='about'>
        <Nav/>
        <PageTitle heading='Digital Growth Agency' subheading='We deliver digital solutions that help our clients increase their business agility'/>
      </div>,
      <Footer key='footer'/>
    ]
  }
}



export default connect(state => ({
  data: state.data
}))(About)
