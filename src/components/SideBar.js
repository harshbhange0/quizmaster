import React from "react";
import Arrowsvg from "./img/Arrowsvg";
import { Link } from "react-router-dom";

function SideBarSection() {
  return (
    <div className="SidebarLink  w-100 d-flex  mt-2 thin-scrollbar">
      <div className="w-100 list-group">
        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/c"
        >
          <span className="d-block"> C QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          to="/quiz/html"
          class="list-group-item d-flex justify-content-between align-items-center border w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
        >
          <span className="d-block"> HTML QUIZ</span>
          <span className="d-block ms-5">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/css"
        >
          <span className="d-block"> CSS QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/bootstarp"
        >
          <span className="d-block"> BOOTSTRAP QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/js"
        >
          <span className="d-block"> JAVASCRIPT QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/react"
        >
          <span className="d-block"> REACT QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/node"
        >
          <span className="d-block"> NODEJS QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/java"
        >
          <span className="d-block"> JAVA QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>

        <Link
          class="list-group-item d-flex justify-content-between align-items-center border  w-100 my-3 p-3    rounded-1 fs-6 list-group-item-action "
          id=""
          to="/quiz/python"
        >
          <span className="d-block"> PYTHON QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </Link>
      </div>
    </div>
  );
}
export default SideBarSection;
