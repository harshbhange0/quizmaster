import React from "react";

function Scoreboard({ allQuestion, nowScore }) {
  return (
    <div className="scoreboard-holder w-50 border rounded-1 m-2 container">
      <h1 className="text-center">Score Board</h1>
      <hr className="mx-auto my-1 w-75"/>
      <div className="m-1 d-flex justify-content-center align-items-center text-center">
        <h2 className="d-block mx-0 mx-sm-1 mx-md-2"> {allQuestion} </h2>
        <h2 className="d-block mx-0 mx-sm-1 mx-md-2">Of</h2>
        <h2 className="d-block mx-0 mx-sm-1 mx-md-2"> {nowScore}</h2>
      </div>
    </div>
  );
}

export default Scoreboard;
