import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'
import { Carousel } from 'react-responsive-carousel';

const slideContent = (ctx => {
  const keys = ctx.keys();
  return keys.map(ctx)
})(require.context('../assets/carousel-images', true, /.*/));

const SlideShow = ({content}) =>
  <div className='slideshow'>
    <img src={content}/>
  </div>

export default class Contact extends Component {

  render () {
    return [
      <div key='heading' className='other'>
        <Nav/>
        <PageTitle heading='Get in touch' subheading="Don't be a stranger"/>
      </div>,
      <div key='content' className='about-content'>

        <div className='join-us'>
          <div>
            <h3>Join us</h3>
            <h4>Show us what you've got</h4>
            <div><a href="mailto:hello@theuniprogroup.com">hello@theuniprogroup.com</a></div>
            <div><a href='https://www.linkedin.com/company/2767849/' target='_blank'>LinkedIn</a></div>
          </div>
          <div>
            <h3>Work with us</h3>
            <h4>Looking forward to hearing from you</h4>
            <div><a href="mailto:hello@theuniprogroup.com">workwithus@theuniprogroup.com</a></div>
          </div>
        </div>

      <div className='slideshow-wrapper'>
        <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} emulateTouch={true} transitionTime={600} interval={5000} stopOnHover={false} showArrows={false}>
          {slideContent.map((content,i) => <SlideShow key={i} content={content}/>)}
        </Carousel>
      </div>


    </div>,
    <Footer key='footer'/>
    ]
  }
}
