import React from 'react'
import Container from './Container'
import SubscribeIcon from '../assets/images/p5-subscribe.svg'

const Subscribe = () => {
  return (
    <section className="subscribe">

      <Container>
      
      <div className="item-group">

      <div className="image-container">
        <img src={SubscribeIcon} alt=""/>
      </div>

      <div className="header">
      <h2>Subscribe to our <br className="break"/> newsletter </h2>
      </div>

      </div>

        <div className="input-flex">
          <i className="fa-regular fa-envelope icon"></i>
    <input className="form-input email" type="email" placeholder="Your email"/>
    <button className="btn">Subscribe</button>
  </div>
</Container>
 
  </section>
  )
}

export default Subscribe
