import React from 'react'


 {/* Help from Hans WebApi video and Jockes how to loop in react combined with a little help from ChatGPT */}
const ReviewItem = ({ reviews, QuoationIcon, Rating4, Rating5 }) => {


  return (
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
  )
}

export default ReviewItem
