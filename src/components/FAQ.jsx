import React, { useState } from 'react'
import Container from './Container'
import PhoneIcon from '../assets/images/FAQ-icon-phone.svg'
import MessageIcon from '../assets/images/FAQ-icon-message.svg'
import FAQForm from './FAQForm'

const FAQ = () => {
  return (

    <section className="section-faq">
    
      <Container>

        <div className="grid-container">

          <div className="header">
            <div className="headline">
              <h2>
                Any questions? Check out the FAQs
              </h2>
            </div>
            <div className="headline-text">
              <p>Still have unanswered questions and need to get in touch?</p>
            </div>
          </div>

          <FAQForm />

          <div className="contact-cards">

              <div className="card">
                  <img src={PhoneIcon} alt="phone-icon"/>
                  <p>Still have questions?</p>
                  <div className="contact-box phone">
                    <p>Contact us</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
              </div>
              <div className="card">
                  <img src={MessageIcon} alt="phone-icon"/>
                  <p>Don't like phone calls?</p>
                  <div className="contact-box message">
                    <p>Contact us</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
              </div>
          </div>


        <div className="button-container">
          <button className="btn btn-primary">Contact us now</button>
        </div>
      </div>

    </Container>

  </section>
  )
}

export default FAQ
