import React from 'react'
import ImgMenuBtn from '../assets/images/p1-menu-btn.svg'

const MenuBtn = () => {
  return (
      <>
          <button className="menu-btn">
            <img src={ImgMenuBtn}/>
          </button>
    </>
  )
}

export default MenuBtn
