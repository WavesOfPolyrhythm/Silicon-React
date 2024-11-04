import React, { useState } from 'react'
import Container from './Container'
import FAQForm from './FAQForm'
import FAQContact from './FAQContact'
import FAQHeader from './FAQHeader'

const FAQ = () => {
  return (

    <section className="section-faq">
        <Container>
            <div className="grid-container">
              <FAQHeader />
              <FAQForm />
              <FAQContact />
            </div>
        </Container>
    </section>
  )
}

export default FAQ
