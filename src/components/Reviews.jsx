  import React, {useState, useEffect} from 'react'
  import Container from './Container'
  import QuoationIcon from '../assets/images/p5-quote.svg'
  import Rating4 from '../assets/images/p5-rating-4.svg'
  import Rating5 from '../assets/images/p5-rating-5.svg'
  import ReviewItem from './ReviewItem'

  
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
                <ReviewItem reviews={reviews} QuoationIcon={QuoationIcon} Rating4={Rating4} Rating5={Rating5}/>
             </div>
        </Container>
    </section>
  )
}

  export default Reviews
