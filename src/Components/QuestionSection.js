import React from "react";
import { useState } from "react";
import { PyLanguage } from "./question/PyQuestion";


function QuestionSection() {
const [queIndex, setQueIndex]=useState(0)
 function changeQue() {
  if(queIndex<PyLanguage.length-1){
    setQueIndex(queIndex+1)
    console.log(queIndex);
  }else{}
}
 function priQue(){
  if (queIndex > 0){
    setQueIndex(queIndex-1)
  }else{}
 }


  return (
    <div className="container-fluid mt-5 p-5 rounded question-sction">
      <div className="row">
        <div className="col-12">
          <div className="mb-5">
            <span className="d-block fs-2  w-100 text-center">
           {queIndex+1}. {PyLanguage[queIndex].question}
            </span>
          </div>
        </div>
        <div className="col-12">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center">
            {PyLanguage[queIndex].option.map((option, i) => {
              return (
                <button className="btn position-relative w-75 btn-option shadow rounded-1 border-1 my-2 fs-5 p-2">
                  <span className=" position-absolute que-number" >{i+1}. </span>{option}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="d-flex mt-5 justify-content-center w-100">
        <button className="btn priv-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25" onClick={priQue}>
          Priv
        </button>
        <button className="btn next-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25" onClick={changeQue} >
          Save & Next
        </button>
      </div>
    </div>
  );
}

export default QuestionSection;
