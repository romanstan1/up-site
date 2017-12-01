import React from 'react'

const PageTitle = ({heading, subheading}) => {
  return [
    <div key='title' className='titles'>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
    </div>
  ]
}

export default PageTitle;
