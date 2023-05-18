import React from "react";
import "./Footer.css";
import github from "./img/logos/github.png";
import linkdin from "./img/logos/linkedin.png";
import twitter from "./img/logos/twitter.png";
import instagram from "./img/logos/instagram.png";

function Footer() {
  return (
    <>
      <footer className=" footer mt-3  py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h1 className="text-dark"> QUIZ APP</h1>
              <div className="py-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <div className="col-md-3">
              <h5 className="text-dark px-3"> Link</h5>
              <ul className="list-unstyled">
                <li className="py-1 px-3">
                  {" "}
                  <a className="text-dark text-decoration-none" href="/">
                    Home
                  </a>{" "}
                </li>
                <li className="py-1 px-3">
                  <a className="text-dark text-decoration-none" href="/">
                    About
                  </a>{" "}
                </li>
                <li className="py-1 px-3">
                  <a className="text-dark text-decoration-none" href="/">
                    Get Certification
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-dark"> Popular Quiz Language</h5>
              <ul className="list-unstyled">
                <li className="py-1 px-3">
                  <a className="text-dark text-decoration-none" href="/">
                    Python
                  </a>
                </li>
                <li className="py-1 px-3">
                  {" "}
                  <a className="text-dark text-decoration-none" href="/">
                    Nodejs
                  </a>
                </li>
                <li className="py-1 px-3">
                  <a className="text-dark text-decoration-none" href="/">
                    Css
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-dark px-3">Social media</h5>
              <ul className="list-unstyled d-flex">
                <li className="my-1 mx-2">
                  <a className="text-dark text-decoration-none" href="/">
                    <img src={github} alt="" width="30px" />
                  </a>
                </li>

                <li className="my-1  mx-2">
                  {" "}
                  <a className="text-dark text-decoration-none" href="/">
                    <img src={linkdin} alt="" width="30px" />
                  </a>
                </li>

                <li className="my-1  mx-2">
                  <a className="text-dark text-decoration-none" href="/">
                    <img src={twitter} alt="" width="30px" />
                  </a>
                </li>

                <li className="my-1  mx-2">
                  <a className="text-dark text-decoration-none" href="/">
                    <img src={instagram} alt="" width="30px" />
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="text-center my-2"> Our Developers </h3>
            <div className="d-flex  flex-wrap justify-content-center align-items-center">
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link  "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link   "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link   "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link "
                href="/"
              >
                {" "}
                wel come
              </a>
              <a
                className="d-block mx-2 text-dark text-decoration-none dev-link "
                href="/"
              >
                {" "}
                wel come
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
