  import React, { useContext } from 'react'
  import Container from './Container'
  import QuotationIcon from '../assets/images/p5-quote.svg'
  import Rating4 from '../assets/images/p5-rating-4.svg'
  import Rating5 from '../assets/images/p5-rating-5.svg'
  import ReviewItem from './ReviewItem'
  import { ReviewContext } from '../contexts/ReviewContext'

  const ratingImages = {
    4: Rating4,
    5: Rating5,
  };
  
  const Reviews = () => {
    const { reviews } = useContext(ReviewContext); 
  

    {/* Help from Hans WebApi video and Jockes how to loop in react combined with a little help from ChatGPT */}
      return (
        <section className="section-reviews">
          <Container>
              <div className="flex-container">
                <div className="headline">
                  <h2>Clients are <br/>Loving Our App</h2>
                </div>
                <ReviewItem reviews={reviews} QuotationIcon={QuotationIcon} ratingImages={ratingImages}/>
             </div>
        </Container>
    </section>
  )
}

  export default Reviews
