import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {

  render () {
    return [
      <div key='logo' className='logo'>
        <div><Link to="/home">UNIPRO LABS</Link></div>
      </div>,
      <div key='nav' className='nav'>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/thinking">Thinking</Link></div>
        <div><Link to="/contact">Contact</Link></div>
      </div>
    ]
  }
}
