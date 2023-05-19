import React from "react";
import Navbar from "./Navbar";
import SideBarSection from "./SideBar";    
import Footer from "./Footer";
import Computer from "./img/Computer.png"

function QuizSection() {
  return (
    <div className="QuizeSction">
      <div className="top-navbar">
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-sm-none d-md-flex col-md-3 border border-top-0 border-bottom-0 side-Sction-Holder ">
            <SideBarSection />
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-12 quiz-info d-flex  d-flex justify-content-center align-items-center">
                  <div className=" p-1 p-sm-2 p-md-5 my-4 mx-1 mx-sm-2 mx-md-5 rounded-2 shadow-sm border">
                 <img src={Computer}alt="" className="d-block my-3 mx-auto img-fluid quiz-section-img" width="500" />
                    <h1 className="text-center  m-auto">
                      Choose any four programming languages and try to beat the
                      highest record to win a <span className=" text-uppercase border-bottom ">certificate</span>  from us
                    </h1>
                    <div className="d-flex my-2 justify-content-center align-content-center flex-wrap">
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">C Programming</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">Html</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">Css</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">Js</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">Bootstrap</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">NodeJS</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">ReactJS</code>
                      <code className="d-block shadow-sm m-1 p-1 p-md-2 rounded-4">Java</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
