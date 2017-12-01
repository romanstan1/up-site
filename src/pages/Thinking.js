import React, {Component} from 'react'

import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'

export default class Homepage extends Component {

  render () {
    return [
      <div key='thinking' className='other'>
        <Nav/>
        <PageTitle heading='Thinking' subheading='Some thoughts, some ideas'/>
      </div>,
      <div key='content' className='content'>

        <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/>

      </div>,
      <Footer key='footer'/>
    ]
  }
}
