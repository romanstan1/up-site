import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'


export default class Contact extends Component {

  render () {
    return [
      <div key='heading' className='other'>
        <Nav/>
        <PageTitle heading='Get in touch' subheading="Don't be a stranger"/>
      </div>,
      <div key='content' className='content'>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
