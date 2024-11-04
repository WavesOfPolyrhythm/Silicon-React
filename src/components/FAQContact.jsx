import React from 'react'
import PhoneIcon from '../assets/images/FAQ-icon-phone.svg'
import MessageIcon from '../assets/images/FAQ-icon-message.svg'

const FAQContact = () => {



  return (
      <>
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
    </>
  )
}

export default FAQContact
