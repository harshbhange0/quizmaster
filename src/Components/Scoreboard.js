
import React from "react";

function Scoreboard({allQuestion,nowScore}) {
  return (
    <div className="scoreboard-holder border rounded-1 w-25  m-2 container">
      <div className="m-1 d-flex justify-content-center align-items-center text-center">
        <h1
          className="d-block mx-2 "
          style={{
            fontSize: "70px",
          }}
        >
         {allQuestion}
        </h1>
        <h1
          className="d-block mx-2"
          style={{
            fontSize: "70px",
          }}
        >
          Of
        </h1>
        <h1
          className="d-block mx-2"
          style={{
            fontSize: "70px",
          }}
        >
         {nowScore}
        </h1>
      </div>
    </div>
  );
}

export default Scoreboard;
