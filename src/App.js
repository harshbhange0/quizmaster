import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'
import QuestionSection from "./Components/QuestionSection";


function App() {
  return (
    <div className="App ">
      <Navbar />
      <Offcanvas/>
  

      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-sm-none d-md-flex col-md-3">
            <SideBarSection/>
          </div>
          <div className="col-12 col-sm-12 col-md-9 ">
            <div className="row">
              <div className="col-12">
                {/* this section score board and language name and icon */}
              </div>
              <div className="col-12">
                {/* this section question  */}
                <QuestionSection/>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
