import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import {PageTitle} from '../molecules/PageTitle'
import Footer from '../molecules/Footer'


export default class Contact extends Component {

  render () {
    return [
      <div key='heading' className='contact'>
        <Nav/>
        <PageTitle><div> Get in touch... </div></PageTitle>
      </div>,
      <div key='content' className='content'>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
