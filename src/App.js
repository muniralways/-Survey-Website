
import './App.css';
import SurveyForm from './components/SurveyForm';
import React, { useState } from 'react'

function App() {
 
  const [submitted, setSubmitted] = useState(false);
const [answers, setAnsers] = useState (null);


  const handleSurveySubmit = (data) => {

    alert("Survey submitted successfully!");
    setSubmitted(true);
    setAnsers(data);
  }
 
 
  return (
    <>
   <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
      {!submitted ? (
        <SurveyForm onSubmit={handleSurveySubmit} />
      ) : (
        <div className="text-center">
          <h1 className="text-success mb-3">Thanks!</h1>
          <p>Your answers have been submitted.</p>
          <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
            Start again
          </button>
        </div>
      )}
    </div>
    
    </>
  );
}

export default App;
