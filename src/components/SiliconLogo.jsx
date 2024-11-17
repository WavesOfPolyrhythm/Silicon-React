import React from 'react'
import LogoType from '../assets/images/p1-silicon-logo.svg'


const SiliconLogo = () => {
  return (
    <div className='silicon-box'>
      <a href="/" className="logo">
      <img src={LogoType}/>
      </a>
      <h1 className='silicon-text'>Silicon</h1>
    </div>
  )
}

export default SiliconLogo
