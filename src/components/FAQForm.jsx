import React, { useState, useEffect } from 'react';

/* This section is a combination of Joakim's conditional rendering video, Hans WebAPI and help from ChatGPT to make this work step by step */

const FAQForm = () => {
  const [faqItems, setFAQItems] = useState([]);
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  // Funktion för att hämta data från API
  const fetchData = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
    const data = await res.json();
    setFAQItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []); // Kör endast när komponenten laddas

  // Tar ID som argument för att växla mellan att visa och dölja svaret
  const toggleAnswer = (id) => {  
    setActiveQuestionId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="form-container">
      {faqItems.map((item) => (
        <div key={item.id} className={`forms ${activeQuestionId === item.id ? 'open' : ''}`}>
          {/* Lägger till klassen "open" om villkoret stämmer */}

          <div className="question" onClick={() => toggleAnswer(item.id)}>
            {/* Lägger till onClick-händelse och anropar toggleAnswer */}
            <h3>{item.title}</h3>
            <button className="btn-round">
            <i class="fa-solid fa-chevron-down"></i>
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
  );
};

export default FAQForm;

