import React from 'react'
import StrategyIcon from '../assets/icons-js/strategy'
import MarketResIcon from '../assets/icons-js/market_research'


const Service = ({children}) =>
  <div className='service'>{children}</div>

const ServicesBlock = ({text, title}) => {
  return (
    <div className='services-block'>
      {!!title? <h2>{title}</h2> : null}
      <Service>
        <MarketResIcon/>
        <span>
          <h2>Digital Development</h2>
          {!!text? <p>{text.digital_development}</p> : null}
        </span>
      </Service>
      <Service>
        <StrategyIcon/>
        <span>
          <h2>Digital Strategy</h2>
          {!!text? <p>{text.digital_strategry}</p> : null}
        </span>
      </Service>
    </div>
  )
}
export default ServicesBlock
