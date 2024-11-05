import React, {useState}  from 'react'
import Container from './Container'
import SubscribeIcon from '../assets/images/p5-subscribe.svg'

const Subscribe = () => {

//Combination of Hans form-validation video and Chat GPT to make this simple validation work
const [email, setEmail] = useState('')
const [error, setError] = useState('')

const handleSubscribe = () => {

  if (!email.trim()) {
    setError('You need to enter a valid email');
  } else {
    setError('');
  }
}

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
                  <input className="form-input email" 
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}/>
                  <button className="btn" onClick={handleSubscribe}>Subscribe</button>
                </div>

          {error && (
          <div className='error-section'>
            <span className='error'>{error}</span>
          </div>
          )}
      </Container>
    </section>
  )
}

export default Subscribe
