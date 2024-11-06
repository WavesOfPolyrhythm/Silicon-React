  import React, {useState, useEffect} from 'react'
  import Container from './Container'
  import QuoationIcon from '../assets/images/p5-quote.svg'
  import Rating4 from '../assets/images/p5-rating-4.svg'
  import Rating5 from '../assets/images/p5-rating-5.svg'

  
  const Reviews = () => {
    const [reviews, setReviews] =useState([])

    const fetchData = async () => {
      const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
      const data = await res.json()
      setReviews(data)
    }

    useEffect(() => {
      fetchData()

    }, [])

    {/* Help from Hans WebApi video and Jockes how to loop in react combined with a little help from ChatGPT */}

      return (
        <section className="section-reviews">

          <Container>

              <div className="flex-container">
                <div className="headline">
                  <h2>Clients are <br/>Loving Our App</h2>
                </div>

                  <div className="cards">
                    {reviews.map(review => (
                    <div key={review.id} className="card">
                      <div className="quotation-icon">
                        <img src={QuoationIcon} alt="quotation marks"/>
                      </div>

                        <img className="rating"
                        src={review.starRating === 5 ? Rating5 : Rating4} //Code snip from Chat GPT
                        alt={`${review.starRating} star rating`} /> 
                        <div className="card-text">
                          <p>{review.comment}</p>
              
                      <div className="author-flex">
                        <img className="avatar" src={review.avatarUrl} alt={`Avatar of ${review.author}`}/> {/* Code snip from Chat GPT */}
                        <div className="name-group">
                          <h6>{review.author}</h6>
                          <p>{review.jobRole}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
             </div>

       </Container>
    </section>
  )
}

  export default Reviews
