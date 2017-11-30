import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import {PageTitle} from '../molecules/PageTitle'

export default class About extends Component {

  render () {
    return [
      <div key='heading' className='about'>
        <Nav/>
        <PageTitle><div> About us...</div></PageTitle>
      </div>,
      <div key='content' className='content'>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
