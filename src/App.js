import React from "react";

import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Certification from "./components/Certification";
import QuizSection from "./components/QuizSection";
import Scoreboard from "./components/Scoreboard";
import QuestionSection from "./components/QuestionSection";



import HtmlQuiz from "./components/AllQuizes/HtmlQuiz";
import CssQuiz from "./components/AllQuizes/CssQuiz";
import CQuiz from "./components/AllQuizes/CQuiz";
import JavaQuiz from "./components/AllQuizes/JavaQuiz";
import JsQuiz from "./components/AllQuizes/JsQuiz";
import NodeJsQuize from "./components/AllQuizes/NodeJsQuiz";
import ReactQuiz from "./components/AllQuizes/ReactQuiz";
import PythonQuiz from "./components/AllQuizes/PythonQuiz";
import BootstrapQuiz from "./components/AllQuizes/BootstrapQuiz";

function App() {
  return (

    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/singup" element={<Signup />}></Route>
            <Route path="/certification" element={<Certification />}></Route>
            <Route path="/quizsection" element={<QuizSection />}></Route>

            <Route path="/quiz/html" element={<HtmlQuiz />}></Route>
            <Route path="/quiz/css" element={<CssQuiz />}></Route>
            <Route path="/quiz/c" element={<CQuiz />}></Route>
            <Route path="/quiz/java" element={<JavaQuiz />}></Route>
            <Route path="/quiz/js" element={<JsQuiz />}></Route>
            <Route path="/quiz/node" element={<NodeJsQuize />}></Route>
            <Route path="/quiz/python" element={<PythonQuiz />}></Route>
            <Route path="/quiz/react" element={<ReactQuiz />}></Route>
            <Route path="/quiz/bootstarp" element={<BootstrapQuiz />}></Route>
          </Routes >
        </BrowserRouter >
      </div>

      <div>
        <div className="col-12 col-sm-12 col-md-9 ">
          <div className="row">
            <div className="col-12">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-4">
                    <Scoreboard />
                  </div>
                  <div className="col-8"></div>
                </div>
              </div>

            </div>
            <div className="col-12">
              {/* this section question  */}
              <QuestionSection />
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-9 question-section-holder ">
            {/* this section question  */}
            <QuestionSection />

          </div>
        </div>
      </div>
      <Certification />
    </div>
  );
}

export default App
