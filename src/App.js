import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'


function App() {
  return (
    <div className="App shadow-sm ">
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-sm-none d-md-flex col-md-3">
            {/* past leftSide bar  */}
          </div>
          <div className="col-12 col-sm-12 col-md-9 ">
            <div className="row">
              <div className="col-12">
                {/* this section score board and language name and icon */}
              </div>
              <div className="col-12">
                {/* this section question  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
