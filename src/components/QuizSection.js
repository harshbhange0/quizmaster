import React from "react";
import Navbar from "./Navbar";
import SideBarSection from "./SideBar";
import QuestionSection from "./QuestionSection";
import Footer from "./Footer";

function QuizSection() {
  return (
    <div className="QuizeSction">
      <div className="top-navbar">
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-sm-none d-md-flex col-md-3 border border-bottom-0 side-Sction-Holder ">
            <SideBarSection />
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-12 ">
                  <div className="question-section-holder" />
                  <QuestionSection />
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
                  <Footer/>
                </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSection;
