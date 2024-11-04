import React from 'react'
import Container from './Container'
import BrandLogo1 from '../assets/images/p2-brands-logo1.svg'
import BrandLogo2 from '../assets/images/p2-brands-logo2.svg'
import BrandLogo3 from '../assets/images/p2-brands-logo3.svg'
import BrandLogo4 from '../assets/images/p2-brands-logo4.svg'
import BrandLogo5 from '../assets/images/p2-brands-logo5.svg'
import BrandLogo6 from '../assets/images/p2-brands-logo6.svg'

const BrandLogos = () => {
  return (
    <section className="section-logos">
          
          <Container>

              <div id="brand-1" className="brand-box">
                <img src={BrandLogo1} alt=""/>
              </div>
              <div id="brand-2" className="brand-box">
                <img src={BrandLogo2} alt=""/>
              </div>
              <div id="brand-3" className="brand-box">
                <img src={BrandLogo3} alt=""/>
              </div>
              <div id="brand-4" className="brand-box">
                <img src={BrandLogo4} alt=""/>
              </div>
              <div id="brand-5" className="brand-box">
                <img src={BrandLogo5} alt=""/>
              </div>
              <div id="brand-6" className="brand-box">
                <img src={BrandLogo6} alt=""/>
              </div>
              
        </Container>
          
  </section>
  )
}

export default BrandLogos
