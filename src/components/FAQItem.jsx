import React from 'react'


const FAQItem = ({faqItems, activeQuestionId, toggleAnswer}) => {




  return (
    <div className="form-container">
    {faqItems.map((item) => (
      <div key={item.id} className={`forms ${activeQuestionId === item.id ? 'open' : ''}`}>
        {/* Lägger till klassen "open" om villkoret stämmer */}
          <div className="question" onClick={() => toggleAnswer(item.id)}>
            {/* Lägger till onClick-händelse och anropar toggleAnswer */}
            <h3>{item.title}</h3>
            <button className="btn-round">
            <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <div className="expandable">
              <p>{item.content}</p>
            </div>
          </div>
      </div>
    ))}
  </div>
  )
}

export default FAQItem
