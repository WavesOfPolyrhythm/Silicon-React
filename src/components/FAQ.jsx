import React from 'react'
import Container from './Container'
import PhoneIcon from '../assets/images/FAQ-icon-phone.svg'
import MessageIcon from '../assets/images/FAQ-icon-message.svg'

const FAQ = () => {
  return (
    <section className="section-faq">
    
    <Container>

    <div className="faq-container">

      <div className="headline">

        <div className="header">
          <h2>
            Any questions? <br className="break"/>Check out the FAQs
          </h2>
        </div>
        <div className="headline-text">
          <p>Still have unanswered questions and need to get <br className="break"/> in touch?</p>
        </div>
      </div>

      <div className="form-container">
        
        <div className="forms f-1">
          <a href="#" className="form-headline">
            <span className="headline-text">Is any of my personal information stored in the App?</span>
            <span className="btn-circle btn-circle-primary">
              <i className="arrow-up fa-solid fa-chevron-up"></i>
              <i className="arrow-down fa-solid fa-chevron-down"></i>
            </span>
          </a>
          <p>Nunc duis id aenean gravida tincidunt eu, tempor
            ullamcorper. Viverra aliquam arcu, viverra et,
            cursus. Aliquet pretium cursus adipiscing gravida
            et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa
            cursus molestie lorem scelerisque pellentesque.
            Nisi, enim, arcu purus gravida adipiscing euismod
            montes, duis egestas. Vehicula eu etiam quam
            tristique tincidunt suspendisse ut consequat.</p>
            <p>Ornare senectus fusce dignissim ut. Integer
              consequat in eu tortor, faucibus et lacinia
              posuere. Turpis sit viverra lorem suspendisse
              lacus aliquam auctor vulputate. Quis egestas
              aliquam nunc purus lacus, elit leo elit facilisi.
              Dignissim amet adipiscing massa integer.</p>
        </div>
        <div className="forms">
          <a href="#" className="form-headline">
            <span className="headline-text">What formats can I download my transaction history in?</span>
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </a>
        </div>
        <div className="forms f-3">
          <a href="#" className="form-headline">
            <span className="headline-text">Can I schedule future transfers?</span>
            <span className="btn-circle btn-circle-primary">
              <i className="arrow-up fa-solid fa-chevron-up"></i>
              <i className="arrow-down fa-solid fa-chevron-down"></i>
            </span>
          </a>
          <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
        </div>
        <div className="forms">
          <a href="#" className="form-headline">
            <span className="headline-text">When can I use Banking App services?</span>
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </a>
        </div>
        <div className="forms">
          <a href="#" className="form-headline">
            <span className="headline-text">Can I create my own password that is easy for me to remember?</span>
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </a>
        </div>
        <div className="forms">
          <a href="#" className="form-headline">
            <span className="headline-text">What happens if I forget or lose my password?</span>
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </a>
        </div>

      </div>

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
