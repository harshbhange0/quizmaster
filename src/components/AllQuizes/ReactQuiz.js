import React from "react";
import { useState } from "react";
import { ReactQuestion } from "../question/ReactQuestion";
import Scoreboard from "../Scoreboard";
import ReactSvg from "../langIconData/ReactSvg";
import SideBarSection from "../SideBar";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ReactQuiz() {
  const [queIndex, setQueIndex] = useState(0);

  const [trackClick, SetTrackClick] = useState(0);

  function changeQue() {
    if (queIndex < ReactQuestion.length - 1) {
      setQueIndex(queIndex + 1);
      updateScore();
    } else {
      return;
    }
  }

  function priQue() {
    if (queIndex > 0) {
      setQueIndex(queIndex - 1);
    } else {
      return;
    }
  }
  const [changeScore, setChangeScore] = useState(0);

  function updateScore() {
    if (trackClick === ReactQuestion[queIndex].ans) {
      setChangeScore(changeScore + 1);
    } else {
      console.log(ReactQuestion[queIndex].ans);
    }
  }

  return (
    <div>
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
                  <div className="container">
          <div className="score-section d-flex">
            <Scoreboard allQuestion={ReactQuestion.length} nowScore={changeScore} />
            <>
              <div className="d-flex m-2 w-100 rounded border justify-content-center align-items-center">
                <span className="svg d-block mx-2 p-1">
                  <ReactSvg width="60" />
                </span>
                <span className="name d-block mx-2 fs-2 ">React Js </span>
              </div>
            </>
          </div>
        </div>
        <div className="container-fluid mt-5 m-auto p-2 p-sm-3 p-md-5 rounded question-sction">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <span className="d-block fs-2  w-100 text-center">
                  {queIndex + 1}.{ReactQuestion[queIndex].question}
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                {ReactQuestion[queIndex].options.map((option, i) => {
                  return (
                    <button
                    key={i} 
                      className="btn position-relative w-75 btn-option shadow rounded-1 border-1 my-2 fs-5 p-2"
                      onClick={function trackScore() {
                        SetTrackClick(i + 1);
                      }}
                    >
                      <span className=" position-absolute que-number">
                        {i + 1}.{" "}
                      </span>
                      {option}
                    </button>
                  );  
                })}
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 justify-content-center w-100">
            <button
              className="btn priv-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25"
              onClick={priQue}
            >
              Prev
            </button>
            <button
              className="btn next-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25"
              onClick={changeQue}
            >
              Save & Next
            </button>
          </div>
        </div>
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
    </div>
  );
}

export default ReactQuiz;

