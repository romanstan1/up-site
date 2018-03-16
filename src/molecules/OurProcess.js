import React, {Component} from 'react'
import placeholderVideo from '../assets/placeholderVideo.png'

export default class OurProcess extends Component {

  render () {
    return [
      <div key='process' className='our-process'>
        <h1>Our Process</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Pariatur placeat amet soluta deleniti recusandae! Rem eos fuga,
          Perferendis officiis consequuntur earum ad fugiat odio dignissimos, har eveniet culpa quo. Voluptatum assumenda eligendi eius, porro ipsa.
          labore ipsa delectus mollitia autem quas asperiores, et nostrum est hic incidunt voluptates.
        </p>
      </div>,
      <div key='video' className='video' style={{backgroundImage: "url(" + placeholderVideo + ")"}}>
        {/* <img src={placeholderVideo} alt=""/> */}
      </div>
    ]
  }
}
