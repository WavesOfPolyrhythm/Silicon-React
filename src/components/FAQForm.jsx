import React, { useState } from 'react';

{/* This section is a combination of Joakims condition rendering-video and help from ChatGPT to make the accordion work */}

const FAQForm = () => {
  const questions = [
    { id: 1, question: "Is any of my personal information stored in the App?", answer: "Yes, some data is stored in the App" },
    { id: 2, question: "What formats can I download my transaction history in?", answer: "Ornare senectus fusce dignissim ut." },
    { id: 3, question: "Can I schedule future transfers?", answer: "Ornare senectus fusce dignissim ut." },
    { id: 4, question: "When can I use Banking App services?", answer: "Ornare senectus fusce dignissim ut." },
    { id: 5, question: "Can I create my own password that is easy for me to remember?", answer: "Ornare senectus fusce dignissim ut." },
    { id: 6, question: "What happens if I forget or lose my password?", answer: "Ornare senectus fusce dignissim ut." },
  ];

  const [showAnswer, setShowAnswer] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState(null);

  const toggleAnswer = (id) => {   {/*Tar ID som argument*/}
    setActiveQuestionId(prevId => (prevId === id ? null : id)); {/* Om man klickar på den öppna frågan så stänger den sig igen */}
    setShowAnswer(prevId => (activeQuestionId === id ? false : true)); /* Växlar showAnswer till true om en ny fråga öppnas eller false om den klickade frågan redan är öppen */
  };

  return (
    <div className="form-container">
      {questions.map((item) => (
        <div key={item.id} className={`forms ${activeQuestionId === item.id && showAnswer ? 'open' : ''}`}> {/* Lägger till klassen Open om villkoren stämmer*/}

          <div className="question" onClick={() => toggleAnswer(item.id)}> {/* Lägger till onClick händelse och anropar toggleAnswer */}
            <h3>{item.question}</h3>
            <button className="btn-round">
              <i className={`fa-solid fa-chevron-${activeQuestionId === item.id && showAnswer ? 'up' : 'down'}`}></i> {/* Ändrar namnet på pilens riktning */}
            </button>
          </div>

          {activeQuestionId === item.id && showAnswer && ( {/* Kollar om activeQuestionId matchar frågans id och om showAnswer är true */},
            <div className="answer">
              <div className="expandable">
                <p>{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQForm;

