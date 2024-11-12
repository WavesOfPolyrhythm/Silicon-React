import React from 'react'
import Container from './Container'
import IphoneImage from '../assets/images/p2-phone.svg'
import Icon1 from '../assets/images/p2-icon1.svg'
import Icon2 from '../assets/images/p2-icon2.svg'
import Icon3 from '../assets/images/p2-icon3.svg'
import Icon4 from '../assets/images/p2-icon4.svg'
import Icon5 from '../assets/images/p2-icon5.svg'
import Icon6 from '../assets/images/p2-icon6.svg'

const AppFeatures = () => {
  return (

    <section className="app-features" id='features'>

      <Container>

        <div className="features-iphone-image">
          <img src={IphoneImage} alt="Iphone with a credit card"/>
        </div>

        <div className="big-textbox space-y-2">
          <h2>App Features</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

            <div className="features-container">
          
                <div className="feature-boxes">
                  <div className="icons">
                    <img src={Icon1} alt=""/>
                  </div>
                    <div className="text-boxes">
                      <h3 className="h3">Easy Payments</h3>
                      <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>
                <div className="feature-boxes">
                  <div className="icons">
                    <img src={Icon2} alt=""/>
                  </div>
                    <div className="text-boxes">
                      <h3 className="h3">Data Security</h3>
                      <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
                </div>
                <div className="feature-boxes">
                  <div className="icons">
                    <img src={Icon3} alt=""/>
                  </div>
                    <div className="text-boxes">
                      <h3 className="h3">Cost Statistics</h3>
                      <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>
                <div className="feature-boxes">
                  <div className="icons">
                    <img src={Icon4} alt=""/>
                  </div>
                    <div className="text-boxes">
                      <h3 className="h3">Support 24/7</h3>
                      <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                </div>
                <div className="feature-boxes">
                  <div className="icons">
                    <img src={Icon5} alt=""/>
                  </div>
                    <div className="text-boxes">
                      <h3 className="h3">Regular Cashback</h3>
                      <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                </div>
                <div className="feature-boxes">
                  <div className="icons">
                    <img src={Icon6} alt=""/>
                  </div>
                    <div className="text-boxes">
                      <h3 className="h3">Top Standards</h3>
                      <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                  </div>
                </div>
            </div>
        
        </Container>
    </section>
  )
}

export default AppFeatures
