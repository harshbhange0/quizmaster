import React from "react";

function ResultShow({ AllQuestion, SolvedQueStion, WrongQuestion,RestFun }) {
  return (
    <div className="d-block my-5 rounded-2 shadow-sm justify-content-center a; border p-5 w-50">
      <span className="d-block my-3 text-center fs-3">All Question: {AllQuestion}</span>
      <span className="d-block my-3 text-center fs-3">Solved Questions: {SolvedQueStion}</span>
      <span className="d-block my-3 text-center fs-3">Wrong Questions: {WrongQuestion}</span>
      <button className="mt-4  fs-3 next-btn btn d-block w-25 mx-auto" onClick={RestFun}>Rest</button>
    </div>
  );
}

export default ResultShow;
