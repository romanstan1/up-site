import React, {Component} from 'react'

import Nav from '../molecules/Nav'
import Footer from '../molecules/Footer'
import PageTitle from '../molecules/PageTitle'
import { Carousel } from 'react-responsive-carousel';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import mapStyle from '../assets/mapStyle.js'

const slideContent = (ctx => {
  const keys = ctx.keys();
  return keys.map(ctx)
})(require.context('../assets/carousel-images', true, /.*/));

const SlideShow = ({content}) =>
  <div className='slideshow'>
    <img src={content}/>
  </div>


const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.latLng}
    defaultOptions={{ styles: mapStyle }}>
    {props.isMarkerShown && <Marker position={props.latLng} />}
  </GoogleMap>))

const UPMap = ({latLng, location, address, email, tel}) =>
<div className='up-map'>
  <MapComponent
    isMarkerShown
    latLng={latLng}
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  <div className='text'>
    <h2>{location}</h2>
    <p>{address}</p>
    <a href={tel}>{tel}</a>
    <a href={email}>{email}</a>
  </div>
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
      <div className='map-block'>
        <UPMap
          latLng={{lat: 51.5061208, lng: -0.0762363}}
          location='London'
          address='1st Katherines Docks, London, E1W 1UN'
          email='hellolondon@theuniprogroup.com'
          tel='+44 1234 567 890'/>
        <UPMap
          latLng={{lat: 50.8345984, lng: -0.779551}}
          location='Chichester'
          address='Ilex Place, Chichester, West Sussex, PO19 1UF'
          email='hellochichester@theuniprogroup.com'
          tel='+44 1234 567 890'/>
        <UPMap
          latLng={{lat: -20.2924034, lng: 56.6299478,}}
          location='Mauritius'
          address='Somewhere in Mauritius'
          email='hellomauritus@theuniprogroup.com'
          tel='+44 1234 567 890'/>
      </div>
      </div>


    </div>,
    <Footer key='footer'/>
    ]
  }
}
