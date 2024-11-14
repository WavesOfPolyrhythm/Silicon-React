import React from 'react'
import Container from './Container'
import AppleImg from '../assets/images/p1-Apple.svg'
import GoogleImg from '../assets/images/p1-GooglePlay.svg'
import HeroPhones from '../assets/images/p1-Phones.svg'

const Hero = () => {
  return (
    <section className="showcase">

      <Container>

          <h1>Manage All Your<br/>
            Money in One App</h1>

            <div className="content space-y-3">
              <p className="text-lg">We offer you a new generation of the mobile
                banking. Save, spend & manage money in your pocket.</p>
            
                <div className="market-btns">
                  <a href="#" className="store-btn">
                <img src={AppleImg} alt=""/>
              </a>
              <a href="#" className="store-btn">
                <img src={GoogleImg} alt=""/>
              </a>
                </div>

              <div className="more">
                <a href="#features" className="btn-round btn-white">
                  <i className="fa-solid fa-chevron-down"></i>
                </a>
                <span>Discover more</span>
              </div>
            </div>
            <div className="phone-img-container">
              <img src={HeroPhones} alt="two Iphones next to eachother"/>
            </div>

    </Container>
    
  </section>
  )
}

export default Hero
