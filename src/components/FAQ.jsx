import React from 'react'
import Container from './Container'
import PhoneIcon from '../assets/images/FAQ-icon-phone.svg'
import MessageIcon from '../assets/images/FAQ-icon-message.svg'

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

      <div className="form-container">

          <div className="forms">
            <div className="question">
              <h3>Is any of my personal information stored in the App?</h3>
              <button className="btn-round">
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer">
              <div className="expandable">
                <p>Nunc duis id aenean gravida tincidunt eu, tempor
                  ullamcorper. Viverra aliquam arcu, viverra et,
                  cursus. Aliquet pretium cursus adipiscing gravida
                  et consequat lobortis arcu velit. Nibh pharetra
                  fermentum duis accumsan lectus non. Massa
                  cursus molestie lorem scelerisque pellentesque.
                  Nisi, enim, arcu purus gravida adipiscing euismod
                  montes, duis egestas. Vehicula eu etiam quam
                  tristique tincidunt suspendisse ut consequat.
                  <br/><br/>
                    Ornare senectus fusce dignissim ut. Integer
                    consequat in eu tortor, faucibus et lacinia
                    posuere. Turpis sit viverra lorem suspendisse
                    lacus aliquam auctor vulputate. Quis egestas
                    aliquam nunc purus lacus, elit leo elit facilisi.
                    Dignissim amet adipiscing massa integer.</p>
                </div>
              </div>
            </div>
              <div className="forms">
                <div className="question">
                  <h3>What formats can I download my transaction history in?</h3>
                  <button className="btn-round">
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
                <div className="answer">
                  <div className="expandable">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum ipsa facere asperiores temporibus minima? Officia nulla excepturi culpa eveniet!</p>
                  </div>
                </div>
              </div>
              <div className="forms">
                <div className="question">
                  <h3>Can I schedule future transfers?</h3>
                  <button className="btn-round">
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
                <div className="answer">
                  <div className="expandable">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque illum beatae a vero voluptate qui voluptatum blanditiis similique enim at sapiente nulla, voluptas tempore aperiam aliquam corporis eum quisquam in!</p>
                  </div>
                </div>
              </div>
              <div className="forms">
                <div className="question">
                  <h3>When can I use Banking App services?</h3>
                  <button className="btn-round">
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
                <div className="answer">
                  <div className="expandable">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, consequatur.</p>
                  </div>
                </div>
              </div>
          <div className="forms">
            <div className="question">
              <h3>Can I create my own password that is easy for me to remember?</h3>
              <button className="btn-round">
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer">
              <div className="expandable">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ducimus atque veniam cum debitis at?</p>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="question">
              <h3>What happens if I forget or lose my password?</h3>
              <button className="btn-round">
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer">
              <div className="expandable">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reprehenderit.</p>
              </div>
            </div>
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
