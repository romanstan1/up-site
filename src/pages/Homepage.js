import React, {Component} from 'react'
import Nav from '../molecules/Nav'

export default class Homepage extends Component {

  render () {
    return [
			<div key='homepage' className='homepage'>
				<Nav/>
			</div>
		]
  }
}
