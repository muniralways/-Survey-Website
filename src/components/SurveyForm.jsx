import React, { useState } from 'react'

import { questions }    from './Question';


const SurveyForm = ({onSubmit}) => {
 
    const [answers, setAnswers] = useState({});

    const handleChange = (Id, value) => {

setAnswers ({...answers, [Id]: value})
}


const handlesubmit = (e) =>{
    e.preventDefault();
    onSubmit(answers)
    console.log(answers);
    
}
 
 
    return (
    <div>
      
<div className="container">
    <div className="card shadow mt-5">
        <div className="card-header">
            <h1 className='text-center mb-4 text-primary'>Survey</h1>
        </div>
        <div className="card-body">
            <form onSubmit={handlesubmit}>

{questions.map ((q) =>(

<div className="mb-3">
    <label className='form-label fw-bold' htmlFor="">{q.question}</label>
    {q.type === "text" && (
        <input type="text"
        onChange={(e) => handleChange(q.id, e.target.value)}
        className='form-control'
        />
    )}

    {q.type === "radio" && q.options.map (( opt) => (

        <div className="form-check" key = {opt}>
            <input type="radio"
             className='form-check-input'
             name={q.id}
            value={opt}
            onChange={(e) => handleChange(q.id, e.target.value)}
            />
            <label className='form-check-label' htmlFor="">{opt}</label>
        </div>


    ))} 
{q.type === "checkbox" 
&& q.options.map((opt) =>(


    <div className="form-check ">
        <input type="checkbox"
        className='form-check-input'
        
        value={opt}
onChange={(e) => handleChange(q.id, e.target.value)}
        />
        <label htmlFor="" className='form-check-label'>{opt}</label>
    </div>
))}
</div>

))}
<button type='submit' className='btn btn-primary'>Submit</button>
            </form>

        </div>
    </div>
</div>


    </div>
  )
}

export default SurveyForm
