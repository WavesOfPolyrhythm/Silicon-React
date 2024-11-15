import React from 'react'
import Hero from '../components/Hero'
import BrandLogos from '../components/BrandLogos'
import AppFeatures from '../components/AppFeatures'
import How from '../components/How'
import MoneyTransfer from '../components/MoneyTransfer'
import Reviews from '../components/Reviews'
import FAQ from '../components/FAQ'
import Subscribe from '../components/Subscribe'

const Main = () => {
  return (
    <main id ="main">
      <Hero />
      <BrandLogos />
      <AppFeatures />
      <How />
      <MoneyTransfer />
      <Reviews />
      <FAQ />
      <Subscribe />
    </main>
  )
}

export default Main
