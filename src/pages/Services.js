import React, {Component} from 'react'

import PageTitle from '../molecules/PageTitle'
import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import ServicesBlock from '../molecules/ServicesBlock'


const servicePageText = {
  digital_development: 'We use open source technology to launch, scale and manage enterprise, responsive digital services. We use open source technology to launch, scale and manage enterprise, responsive digital services.',
  digital_strategry: 'We team up with brands to create meaningful digital services, combining the right tools to leverage data and technology to accelerate digital growth. We team up with brands to create meaningful digital services, combining the right tools to leverage data and technology to accelerate digital growth.'
}

export default class Services extends Component {

  render () {
    return [
      <div key='thinking' className='other'>
        <Nav/>
        <PageTitle heading='Services' subheading='Performance obsessed digital solutions'/>
      </div>,
      <div key='content' className='content services'>
        <ServicesBlock text={servicePageText}/>
      </div>,
      <Footer key='footer'/>
    ]
  }
}
