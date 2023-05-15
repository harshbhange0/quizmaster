import React from "react";
import Navbar from "./Components/Navbar";

import './App.css'
import QuestionSection from "./Components/QuestionSection";
import SideBarSection from "./Components/SideBar";
import Certification from "./Components/Certification";
 import Logup from "./Components/Signup";


function App() {
  return (
    <div className="App ">
      <div className="top-navbar">
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none side-Sction-Holder d-sm-none border-end d-md-flex col-md-3">
            <div className="  d-none d-sm-none d-md-flex flex-column  h-100 w-100 p-4">
              <SideBarSection />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 ">
            {/* this section question  */}
            <QuestionSection />
          </div>
        </div>
      </div>
      <Certification />
      <Logup/>
    </div>
  );
}

export default App;
