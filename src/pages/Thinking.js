import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import {PageTitle} from '../molecules/PageTitle'
import Footer from '../molecules/Footer'

export default class Homepage extends Component {

  render () {
    return [
      <div key='thinking' className='thinking'>
        <Nav/>
        <PageTitle><div> Our thinking... </div></PageTitle>
      </div>,
      <div key='content' className='content'>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
