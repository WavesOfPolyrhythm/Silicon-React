import React, { useState, useEffect } from 'react'


const SubscribeItem = ( {handleSubscribe, handleChange, email, error} ) => {
  return (
    <form 
      onSubmit={handleSubscribe} className="input-flex" noValidate>
        <i className="fa-regular fa-envelope icon"></i>
            <input 
              className={`form-input email ${error ? 'error' : ''}`}
              type="email"
              id='email'
              placeholder="Your email"
              value={email}
              onChange={handleChange}
            />
        <button className="btn" type='submit'>Subscribe</button>
    </form>
  )
}

export default SubscribeItem
