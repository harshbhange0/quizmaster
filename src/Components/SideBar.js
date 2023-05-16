import React from "react";
import Arrowsvg from "./img/Arrowsvg";

function SideBarSection() {
  return (
    <div className="SidebarLink  w-100 d-flex  mt-2 thin-scrollbar">
     <div className="w-100 list-group">
        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> HTML QUIZ</span>
          <span className="d-block ms-5">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>

        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> C QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>

        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> JAVA QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>

        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> PYTHON QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>

        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> JAVASCRIPT QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>

        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> REACT QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>

        <a
          class="list-group-item d-flex justify-content-between align-items-center w-100 my-2 rounded-1 fs-6 list-group-item-action "
          id=""
          href="/"
        >
          <span className="d-block"> NODEJS QUIZ</span>
          <span className="d-block">
            <Arrowsvg IconWidth="20" />
          </span>
        </a>
        </div>
    </div>
  );
}
export default SideBarSection;
