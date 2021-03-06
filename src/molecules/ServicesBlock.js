import React from 'react'
import StrategyIcon from '../assets/icons-js/strategy'
import MarketResIcon from '../assets/icons-js/market_research'

const ServicesBlock = ({text, title}) => {
  return (
    <div className='services-block'>
      {/* {!!title? <h2>{title}</h2> : null} */}
      <div className='service'>
        <div className='svg-wrap'><MarketResIcon/></div>
        <div className='text-wrap'>
          <h2>Digital Development</h2>
          {!!text? <p>{text.digital_development}</p> : null}
        </div>
      </div>

      <div className='service'>
        <div className='svg-wrap'><StrategyIcon/></div>
        <div className='text-wrap'>
          <h2>Digital Strategy</h2>
          {!!text? <p>{text.digital_strategry}</p> : null}
        </div>
      </div>
    </div>
  )
}
export default ServicesBlock
