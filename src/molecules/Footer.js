import React, {Component} from 'react'
import {Link} from 'react-router-dom'


const LineSpacer = () => <div className='lineSpacer'> </div>

export default class Footer extends Component {

  render () {
    return [
      <div key='nav' className='footer'>

        <div className='column'>
          <div className='column-title'>Stalk us</div>
          <div className='column-link'><Link to="/about">LinkedIn</Link></div>
          <div className='column-link'><Link to="/about">LinkedIn</Link></div>
          <div className='column-link'><Link to="/about">LinkedIn</Link></div>
        </div>

        <div className='column'>
          <div className='column-title'>Find us</div>
          <div className='column-text'>
            Unipro at Wework Tower Bridge <br/> <LineSpacer/>
            1 St Katharine's Way <br/> <LineSpacer/>
            St Katharine's & Wapping <br/> <LineSpacer/>
            London E1W 1UN <br/> <LineSpacer/>
          </div>
        </div>

        <div className='column'>
          <div className='column-title'>Contact us</div>

          <div className='column-link'><Link to="/about">+44 208 232 7212</Link></div> <LineSpacer/>
          <div className='column-text'> General enquiries:</div>
          <div className='column-link'><Link to="/about">mattpowell@theuniprogroup.com</Link></div> <LineSpacer/>

          <div className='column-text'> New business:</div>
          <div className='column-link'><Link to="/about">mattpowell@theuniprogroup.com</Link></div>
        </div>

        <div className='column'>
          <div className='column-title'>Work with us</div>
          <div className='column-link'><Link to="/about">careers@theuniprogroup.com</Link></div>
        </div>

      </div>
    ]
  }
}
