import React, {useState, useEffect}  from 'react'
import Container from './Container'
import SubscribeIcon from '../assets/images/p5-subscribe.svg'
import SubscribeItem from './SubscribeItem'

const Subscribe = () => {

//Combination of Hans form-validation video, Jockes form-validation video and Chat GPT to make this validation work
const [email, setEmail] = useState('')
const [submitted, setSubmitted] = useState(false)
const [error, setError] = useState('')

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //Regex from Chat GPT

const handleChange = (e) => {
  setEmail(e.target.value);
  setError('')
}

const handleSubscribe = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    setError('This field can not be empty');
  } else if (!emailRegex.test(email)) {
    setError('You need to enter a valid email adress');
  } else {
      setEmail('');
      setError(''); 

      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    }
  }
      //Tips av Maria Falk och kod av chat GPT för att få timern att fungera
      useEffect(() => {
        if (submitted) {
          const timer = setTimeout(() => {
            setSubmitted(false); 
          }, 3000);

          return () => clearTimeout(timer);
        }
      }, [submitted]);


      if (submitted) {
        return (
          <section className="subscribe">
            <Container>
                <div className="subscribe-box">
                  <div className='item-group'>
                     <div className="image-container">
                        <img src={SubscribeIcon} alt="Subscribe icon"/>
                      </div>
                    <h2>Thank you for subscribing!</h2>
                  </div>
              </div>
            </Container>
          </section>
        );
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
                    <SubscribeItem 
                    handleSubscribe={handleSubscribe} 
                    handleChange={handleChange} 
                    email={email} 
                    error={error}
                    />
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
