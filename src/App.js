import React from "react";
import Navbar from "./Components/Navbar";
import './App.css'
<<<<<<< HEAD
import QuestionSection from "./Components/QuestionSection";
=======
import Offcanvas from "./Components/Offcanvas";
import SideBarSection from "./Components/SideBar";
>>>>>>> 0d2805b5b640f0650f833e094efa86bad9e22c56


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
