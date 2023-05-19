import React from 'react';
import HtmlSvg from './langIconData/HtmlSvg';
import CssSvg from './langIconData/CssSvg';
import JsSvg from './langIconData/JsSvg';
import BootstrapSvg from './langIconData/BootstrapSvg';
import ReactSvg from './langIconData/ReactSvg';
import CLangsvg from './langIconData/CLangSvg';
import NodeSvg from './langIconData/NodeSvg';
import PythonSvg from './langIconData/PythonSvg';
import JavaSvg from './langIconData/JavaSvg';
import Navbar from './Navbar';
import homepageimg2  from './img/homepageimg2.png';
import "./Home.css";

import {Link} from 'react-router-dom';
import Footer from './Footer'






function Home() {
  return (
    <div className="homepage ">
    <div className="top-navbar"><Navbar/></div>
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 ">
          <div className="container my-3">
            <h1 className="heading-text  text-center my-3 ">WELCOME TO QUIZ MASTER!!</h1>
           <p className="d-block w-50 my-4 disable mx-auto text-center">Boost your knowledge by appearing for the quiz with different coding languages.</p>
           </div>

           
        </div>

        <div class="container py-5">
        <div class="row  text-center mx-auto">
            <div class="col-md-6 m-auto">
                <div class="card  m-auto shadow ">
                    <div class=" card-main-body">
                        <h1 class="card-title mt-5 p-auto">Explore To Quizz Master</h1>
                            <p class="fs-5 mt-4 fs-3">Test your knowledge, take the quiz!</p>
                        <div class="d-grid gap-5 w-50 m-auto mt-4 ">
                            <Link to="/quizsection" class="btn    btn-pink" type="button">GET START 🚀</Link>
                        </div>
                        <div class="container mt-4">
                            <h4 >Our Certification Verified by</h4>
                            <div class="row mt-4">
                                <div class="col col-md-12">
                                    <button class="btn btn-primary w-50 text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                            <path
                                                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>oogle</button>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
            <div class="col-md-6">
                <img src={homepageimg2} class="img-fluid imgExternal-css" alt="..." />

            </div>
        </div>

    </div>
      <h3 className="text-center my-5"> Provided languages :</h3>
    <div className="d-flex justify-content-around align-item-center flex-wrap">
              <div className="m-2"><HtmlSvg width="20"/></div>
              <div className="m-2">< JsSvg width="20"/></div>
              <div className="m-2">< CssSvg width="20"/></div>
              <div className="m-2">< BootstrapSvg width="20"/></div>
              <div className="m-2">< ReactSvg width="20"/></div>
              <div className="m-2">< CLangsvg width="80"/></div>
              <div className="m-2"><NodeSvg width="20"/></div>
              <div className="m-2"><PythonSvg width="20"/></div>
              <div className="m-2"><JavaSvg width="20px"/></div>

           </div>


    </div>
      </div>

      <div className="footer"><Footer/></div>


      <div className="footer">
        <Footer/>
      </div>

    </div>

  

  )
}

export default Home

