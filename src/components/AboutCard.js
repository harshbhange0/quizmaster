import React from "react";
import "./About.css";
import github from "./img/logos/github.png";
import linkdin from "./img/logos/linkedin.png";
import Gmail from "./img/logos/gmail.png";
import instagram from "./img/logos/instagram.png";
import Css from "./img/logos/css.png";
import Html from "./img/logos/html.png";
import Javascript from "./img/logos/javascript.png";
import Bootstrap from "./img/logos/bootstrap.png";
import Reactimg from "./img/logos/react.png";

function AboutCard({
  ProfilPick,
  AboutCardTitle,
  Instagram,
  Twitter,
  Github,
  linkedin
}) {
  return (
    <div
      className="card AboutCard m-5 p-3  rounded-3 "
      style={{
        width: "24rem"
      }}
    >
      <img
        className="card-img profile-pick"
        src={ProfilPick}
        alt="profile photo"
      />
      <div className="card-body mt-2">
        <h2 className="text-center">{AboutCardTitle}</h2>

        <div className="card-footer bg-transparent my-1">
            <span className="d-block text-center">Skills</span>

          <div className="d-flex justify-content-center align-items-center my-1">
            <span className="d-block  mx-2 my-3 ">
              <img height="40px" alt="" src={Html} />
            </span>
            <span className="d-block  mx-2 my-3 ">
              <img height="40px" alt="" src={Css} />
            </span>
            <span className="d-block  mx-2 my-3 ">
              <img height="35px" alt="" src={Javascript} />
            </span>
            <span className="d-block  mx-2 my-3 ">
              <img height="30px" alt="" src={Bootstrap} />
            </span>
            <span className="d-block  mx-2 my-3 ">
              <img height="40px" alt="" src={Reactimg} />
            </span>
          </div>
          <h5 className="text-center m-2">Connect With Us</h5>
          <div className="d-flex flx-wrap social-logo justify-content-around">
            <a href={linkedin} className="m-1 p-1 text-dark social-logo ">
              <img src={linkdin} alt="" width="30px" />
            </a>
            <a href={Github} className="m-1 p-1 text-dark social-logo">
              {" "}
              <img src={github} alt="" width="30px" />
            </a>
            <a href={Gmail} className="m-1 p-1 text-dark social-logo">
              <img src={Gmail} alt="" width="30px" />
            </a>
            <a href={Instagram} className="m-1 p-1 text-dark social-logo">
              <img src={instagram} alt="" width="30px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
