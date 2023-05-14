import React from 'react'

import { jsLanguage } from './question/JsQuestion'


function QuestionSection() {
  return (
 <div className='container-fluid'>
    <div className='row'>
    </div>
    <div className=' w-100 question-sction'>
        <span className='d-block fs-2  w-100 text-center'>
            {jsLanguage[0].question}
        </span>
    </div>
    <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        {jsLanguage[0].option.map((option,i)=>{
           return (<button className='btn w-50 shadow rounded-1 border-1 my-2 fs-5 p-2'>
                {option}
            </button>)
        })}
    </div>
    <div className='nextBtn mt-5 justify-content-center w-100'>
        <button className='btn shadow-sm d-block mx-auto p-0 w-25'>
            Next
        </button>
    </div>
  
 </div>
  )
}

export default QuestionSection