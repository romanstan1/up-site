import React, {Component} from 'react'

import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'

export default class Services extends Component {

  render () {
    return [
      <div key='thinking' className='other'>
        <Nav/>
        <PageTitle heading='Services' subheading='Performance obsessed digital solutions'/>
      </div>,
      <div key='content' className='content'>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
