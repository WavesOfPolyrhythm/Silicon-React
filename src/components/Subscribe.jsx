import React, {useState}  from 'react'
import Container from './Container'
import SubscribeIcon from '../assets/images/p5-subscribe.svg'

const Subscribe = () => {

//Combination of Hans form-validation video, Jockes form-validation video and Chat GPT to make this simple validation work
const [email, setEmail] = useState('')
const [error, setError] = useState('')

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //From Chat GPT

const handleSubscribe = (e) => {
  e.preventDefault();

  if (!email.trim()) {
    setError('This field can not be empty');
  } else if (!emailRegex.test(email)) {
    setError('You need to enter a valid email adress');
  } else {
    setError('');
  }
}

  return (
    <section className="subscribe">

      <Container>
          <div className='subscribe-box'>
            <div className="item-group">
                <div className="image-container">
                  <img src={SubscribeIcon} alt="Subscribe icon"/>
                </div>
                    <div className="header">
                      <h2>Subscribe to our <br className="break"/> newsletter </h2>
                    </div>
                 </div>

                  <form onSubmit={handleSubscribe} className="input-flex" noValidate>
                    <i className="fa-regular fa-envelope icon"></i>
                    <input 
                    className={`form-input email ${error ? 'error' : ''}`}
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => {
                     setEmail(e.target.value)
                      if(error) setError('');
                    }}/>
                    <button className="btn" type='submit'>Subscribe</button>
                  </form>

            {error && (
            <div className='error-section'>
              <span className='error'>{error}</span>
            </div>
            )}
          </div>
      </Container>
    </section>
  )
}

export default Subscribe
