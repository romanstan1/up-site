import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'


export default class Error extends Component {

  render () {
    return [
      <div key='heading' className='other'>
        <Nav/>
        <PageTitle heading='404 ERROR' subheading="We couldn't find this page. Maybe it's out there somewhere..."/>
      </div>,
      <Footer key='footer'/>
    ]
  }
}
