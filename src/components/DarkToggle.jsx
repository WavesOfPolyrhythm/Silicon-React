import React from 'react'

const DarkToggle = () => {
  return (
    <div id="darkmode-toggle" className="darkmode-toggle">
      <span className="label">Dark mode</span>
    <label htmlFor="darkmode-switch" className="toggle">
      <input type="checkbox" id="darkmode-switch"/>
      <span className="slider"></span>
      </label>
  </div>
  )
}

export default DarkToggle
