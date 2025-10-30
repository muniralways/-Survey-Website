
import './App.css';
import SurveyForm from './components/SurveyForm';
import React, { useState } from 'react'

function App() {
 
  const [submitted, setSubmitted] = useState(false);
const [ansers, setAnsers] = useState (null);


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
          <h1 className="text-success mb-3">ধন্যবাদ!</h1>
          <p>আপনার উত্তরগুলো জমা হয়েছে।</p>
          <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
            আবার শুরু করুন
          </button>
        </div>
      )}
    </div>
    
    </>
  );
}

export default App;
