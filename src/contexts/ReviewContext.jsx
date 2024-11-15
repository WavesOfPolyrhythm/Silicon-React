import React, {createContext, useState, useEffect} from 'react'

export const ReviewContext = createContext()

const ReviewProvider = ({children}) => {
  const [reviews, setReviews] =useState([]);


  useEffect(() => {
  const fetchData = async () => {
    const res = await fetch ('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()

    setReviews(data)
  }

    fetchData()

  }, [])

  return (
    <ReviewContext.Provider value ={{ reviews }}>
      {children}
    </ReviewContext.Provider>
  )
}


export default ReviewProvider
