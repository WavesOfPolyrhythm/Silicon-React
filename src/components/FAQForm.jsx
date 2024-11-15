import React, { useState, useEffect } from 'react';
import FAQItem from './FAQItem';

/* This section is a combination of Joakim's conditional rendering video, Hans WebAPI and help from ChatGPT to make this work step by step */

      const FAQForm = () => {
        const [faqItems, setFAQItems] = useState([]);
        const [activeQuestionId, setActiveQuestionId] = useState(null);

          // Funktion för att hämta data från API
          useEffect(() => {
          const fetchData = async () => {
            const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
            const data = await res.json();
            setFAQItems(data);
          };

            fetchData();
          }, []); // Kör endast när komponenten laddas

          // Tar ID som argument för att växla mellan att visa och dölja svaret
          const toggleAnswer = (id) => {  
            setActiveQuestionId(prevId => (prevId === id ? null : id));
          };

          return (
            <>
              <FAQItem faqItems={faqItems} activeQuestionId={activeQuestionId} toggleAnswer={toggleAnswer}/>
            </>
          );
        };

export default FAQForm;

