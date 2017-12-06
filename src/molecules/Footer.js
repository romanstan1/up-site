import React, {Component} from 'react'

export default class Footer extends Component {

  render () {
    return [
      <footer key='footer' className='footer'>
        <div className='top-row'>
          <a href="mailto:hello@theuniprogroup.com">hello@theuniprogroup.com</a>
          <a href="tel://+44 1243 539 412">+44 1243 539 412</a>
          <a href='https://www.linkedin.com/company/2767849/' target='_blank'>LinkedIn</a>
        </div>
        <div className='bottom-row'>
          <div>Copyright © 1997 - 2017 Unipro Ltd</div>
          <div>Unipro Limited, Ilex Place, Chichester, West Sussex, PO19 1UF</div>
          <div>Registed Company Number 3425326</div>
        </div>
      </footer>
    ]
  }
}
