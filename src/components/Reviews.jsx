import React from 'react'
import Container from './Container'
import QuoationIcon from '../assets/images/p5-quote.svg'
import Rating4 from '../assets/images/p5-rating-4.svg'
import Rating5 from '../assets/images/p5-rating-5.svg'
import AvatarFannie from '../assets/images/p5-avatar-Fannie.svg'
import AvatarAlbert from '../assets/images/p5-avatar-Albert.svg'

const Reviews = () => {
  return (
    <section className="section-reviews">

    <Container>

    <div className="flex-container">
      <div className="headline">
        <h2>Clients are <br/>Loving Our App</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="quotation-icon">
            <img src={QuoationIcon} alt="quotation marks"/>
          </div>
          <img className="rating" src={Rating4} alt="four star rating"/>
          <div className="card-text">
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
    
            <div className="author-flex">
              <img className="avatar" src={AvatarFannie} alt="Avatar of Fannie Summers"/>
              <div className="name-group">
                  <h6>Fannie Summers</h6>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="quotation-icon">
            <img src={QuoationIcon} alt="quotation marks"/>
          </div>
          <img className="rating" src={Rating5} alt="five star rating"/>
          <div className="card-text">
            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
            <div className="author-flex">
              <img className="avatar" src={AvatarAlbert} alt="Avatar of Albert Flores"/>
            <div className="name-group">
                <h6>Albert Flores</h6>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
</section>
  )
}

export default Reviews
