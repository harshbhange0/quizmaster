import React from 'react'

function QuestionSection() {
  return (
    <div className='container-fluid'>
        
<div className='row'>

    <div className='col-12'>
        <span className='fs-4 p-3 mb-2 d-block '>
        Note that the development build is not optimized.
To create a production build, use npm run build.
        </span>
    </div>


    <div className='col-12'>
       <div className='container px-3 justify-content-center'>
        <button className='d-block my-3 shadow-sm rounded-1  w-50'>
           1
        </button>
             
        <button className='d-block my-3 shadow-sm rounded-1  w-50'>
            2
        </button>

        <button className='d-block my-3 shadow-sm rounded-1  w-50'>
            3
        </button>

        <button className='d-block my-3 shadow-sm rounded-1  w-50'>
            4
        </button>

        <div className='container-btn'>
            <button>
                Next
            </button>
        </div>
        </div>
    </div>
</div>

    </div>


  )
}

export default QuestionSection