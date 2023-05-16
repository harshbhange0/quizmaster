import React from "react";
import "./Footer.css";
import github from "./Components/img/logos/github";
import linkdin from "./Components/img/logos/linkdin";
import twitter from "./Components/img/logos/twitter";
import instagram from "./Components/img/logos/instagram";

function Footer  () {
    return(
        <>
        <footer className=" footer  py-5">
            <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 className="text-dark"> QUIZ APP</h1>
                                <div className="py-5">
                                     <input type="email"  className="form-control"  placeholder="Enter Your Email"/>
                                </div>
                            </div>                           
                        
                            <div className="col-md-3">
                                <h5 className="text-dark px-3"> Link</h5>
                                <ul className="list-unstyled">
                                <li className="py-1 px-3"> <a className="text-dark"    href="#">Home</a> </li>
                                <li className="py-1 px-3"><a  className="text-dark"   href="#">About</a> </li>
                                <li className="py-1 px-3"><a  className="text-dark"  href="#">Get Certification</a></li>
                                </ul>
                            </div>
                        
                        <div className="col-md-3">
                            <h5 className="text-dark"> Popular Quiz Language</h5>
                            <ul className="list-unstyled">
                            <li className="py-1 px-3"><a className="text-dark"    href="#">Python</a></li>
                            <li className="py-1 px-3"> <a  className="text-dark"   href="#">Nodejs</a></li>
                            <li className="py-1 px-3"><a  className="text-dark"  href="#">Css</a></li>
                            </ul>
                        </div>

                    <div className="col-md-3">
                            <h5 className="text-dark px-3">Social media</h5>
                        <ul className="list-unstyled">
                            <li className="py-1 px-4"><a className="text-dark"  href="">
                            <img src={github} alt=""/></a></li>

                            <li className="py-1 px-4"> <a  className="text-dark"   href=""></a>
                            <img src={linkdin} alt=""/>
                            </li>
                        
                            <li className="py-1 px-4"><a  className="text-dark"  href=""></a>
                            <img src={twitter} alt=""/>
                            </li>
                       
                            <li className="py-1 px-4"><a  className="text-dark"  href=""></a>
                            <img src={instagram} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>            
        </footer>
    </>
)
}


export default Footer