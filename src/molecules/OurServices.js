import React, {Component} from 'react'

export default class OurServices extends Component {

  render () {
    return [
      <div key='service' className='our-services'>
        <h1>Our Services</h1>
        <span>Lorem ipsum dolor sit amet,gni maxime, earum hic perspiciatis. Tenetur eum aut, nam esse mollitia possimus.</span>

        <div className='single-service'>
          <h2>Ecommerce</h2>
          <p>Disruptive technology has fundamentally
            changed consumer behaviour, constantly shifting expectations in favour of performant,
            personalised and simple ecommerce experiences. In a world of ubiquitous digital touchpoints,
            a modern framework and optimised digital solutions are essential.
          </p>
          <p>Unipro develops and supports multi-channel B2B and B2C solutions using world class
            commercial solutions such as Magento, Qubit and Drupal to craft creative technical
            solutions that empower consumers and leave them with memorable retail experiences.
          </p>
          <ul className='list'>
            <li>Magento</li>
            <li>Qubit</li>
          </ul>
          <ul className='list'>
            <li>Drupal 7</li>
            <li>Drupal 8</li>
          </ul>
        </div>

        <div className='single-service'>
          <h2>Build</h2>
          <p>We empower digital dreams by extending standard open source products.
            Our in-house development team leverages emerging technologies and two decades worth of
            digital expertise to create bespoke solutions. Using iterative, continuous development
            techniques to build scalable digital products and services.
          </p>
          <ul className='list'>
            <li>Innovation</li>
            <li>Drupal 7</li>
            <li>Drupal 8</li>
          </ul>
        </div>


        <div className='single-service'>
          <h2>Optimisation</h2>
          <p>Our dedicated optimisation team specialise in executing customer-centric digital strategies.
              By maximising tool efficiency we enable data-informed and performance-led optimisation that lead to engaging user experiences.
              Our analytics team uncover user insights,
              from which we generate hypothesis which form part of an ongoing test and measurement plan.
          </p>
          <ul className='list'>
            <li>Innovation</li>
            <li>Drupal 7</li>
            <li>Drupal 8</li>
          </ul>
        </div>


        <div className='button-case-studies'>
          See our case studies
        </div>


      </div>
    ]
  }
}
