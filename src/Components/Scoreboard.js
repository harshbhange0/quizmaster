import React from "react";

function Scoreboard({ allQuestion, nowScore }) {
  return (
    <div className="scoreboard-holder w-50 border rounded-1 m-2 container">
      <div className="m-1 d-flex justify-content-center align-items-center text-center">
        <h1 className="d-block mx-0 mx-sm-1 mx-md-2"> {allQuestion} </h1>
        <h1 className="d-block mx-0 mx-sm-1 mx-md-2">Of</h1>
        <h1 className="d-block mx-0 mx-sm-1 mx-md-2"> {nowScore}</h1>
      </div>
    </div>
  );
}

export default Scoreboard;
