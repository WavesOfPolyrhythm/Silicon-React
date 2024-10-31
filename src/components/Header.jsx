import React from 'react'
import SiliconLogo from './SiliconLogo'
import Container from './Container'
import DarkToggle from './DarkToggle'
import HeaderBtn from './HeaderBtn'
import MenuBtn from './MenuBtn'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <nav id="main-menu" className="main-menu">
        <Container>

          <SiliconLogo />
          <DarkToggle />
          <MenuBtn />
          <HeaderBtn />
          <NavBar />

      </Container>
    </nav>
  </header>
  )
}

export default Header
