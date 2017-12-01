import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UniproLogo from '../assets/logo.js'
import {connect} from 'react-redux'
import {selectNav} from '../store/modules/actions'

const NavLink = ({text, handleSelect, selected, children}) => {
  const active = selected === text? 'active' : ''
  return (
      <div onClick={handleSelect} data-value={text}>
        <Link className={active} to={text}>{children || text}</Link>
      </div>
    )
}

class Nav extends Component {

  handleSelect = (e) => {
    this.props.dispatch(selectNav(e.currentTarget.dataset.value))
  }

  render () {
    const {selected} = this.props
    return (
      <div key='nav' className='nav'>

        <div className='logo'>
          <NavLink selected={selected} handleSelect={this.handleSelect} text='about'>
            <UniproLogo/>
          </NavLink>
        </div>

        <div className='menu'>
          <NavLink selected={selected} handleSelect={this.handleSelect} text='about'/>
          <NavLink selected={selected} handleSelect={this.handleSelect} text='services'/>
          <NavLink selected={selected} handleSelect={this.handleSelect} text='thinking'/>
          <NavLink selected={selected} handleSelect={this.handleSelect} text='contact'/>
        </div>

      </div>
    )
  }
}


export default connect(state => ({
  selected: state.data.selectedNav
}))(Nav)
