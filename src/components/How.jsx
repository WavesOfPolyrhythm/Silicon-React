import React from 'react'
import Container from './Container'
import Phone1Mobile from '../assets/images/p3-phone1.svg'
import Phone1Tablet from '../assets/images/p3-tablet-phone1.svg'
import Phone2Tablet from '../assets/images/p3-tablet-phone2.svg'
import Phone3Tablet from '../assets/images/p3-tablet-phone3.svg'
import Phone1Desktop from '../assets/images/p3-phone3-1.svg'
import Phone2Desktop from '../assets/images/p3-phone3-2.svg'
import Phone3Desktop from '../assets/images/p3-phone3-3.svg'

const How = () => {
  return (

    
    <section className="section-how">

      <Container>


      <div className="headline">
      <h1>How Does it Work?</h1>
    </div>

      <div className="img-mobile">
      <img src={Phone1Mobile} alt="Iphone"/> 
    </div>
    <div className="text-mobile">
      <h2>Transfers to people from your contact list</h2>
      <p>Proin volutpat mollis egestas. Nam luctus facilisis
        ultrices. Pellentesque volutpat ligula est. Mattis
        fermentum, at nec lacus.</p>
      </div>

      <div className="img-tablet">
        <div className="phone-container-tablet">
          <img src={Phone1Tablet} alt="three Iphones"/>
          <img src={Phone2Tablet} alt="three Iphones"/>
          <img src={Phone3Tablet} alt="three Iphones"/>
        </div>
      </div>
    <div className="text-tablet">
      <h2>Step 3. Transfers to people from your
        contact list</h2>
      <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
        Pellentesque volutpat ligula est. Mattis fermentum, at nec
        lacus.</p>
      </div>

    <div className="img-desktop">
      <div className="phone-container-desktop">
        <img src={Phone1Desktop} alt=""/>
        <img src={Phone2Desktop} alt=""/>
        <img src={Phone3Desktop} alt=""/>
      </div>
    </div>
    <div className="text-desktop">
    <h2>Latest transaction history</h2>
    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
  </div>

  </Container>

</section>

  )
}

export default How
