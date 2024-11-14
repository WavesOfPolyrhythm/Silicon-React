import React, { useState, useEffect } from 'react'


//I used Hans darkmode toggle segment combined with tips from Henrik Ljungberg to keep my css class .dark from my first project instead of adding data theme

const DarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode)

    if (newMode) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    if(savedTheme === 'dark') {
      document.body.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.body.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, []);

  return (
    <div id="darkmode-toggle" className="darkmode-toggle">
      <span className="label">Dark mode</span>
        <label htmlFor="darkmode-switch" className="toggle">
          <input type="checkbox"
            id="darkmode-switch"
            checked={isDarkMode}
            onChange={toggleDarkMode}/>
            <span className="slider"></span>
          </label>
      </div>
    )
  }

export default DarkToggle
