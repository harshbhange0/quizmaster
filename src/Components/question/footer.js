import React from "react";
import './footer.css';
import github from '../img/logos/github.png';
import instagram from '../img/logos/instagram.png';
import linkedin from '../img/logos/linkedin.png';
import twitter from '../img/logos/twitter.png';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_pading">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>All Time Popular</h4>
                        <a href="/CQuestion">
                            <p>C Language MCQ</p>
                        </a>
                        <a href="/javaQuestion">
                            <p>Java Language MCQ</p>
                        </a>
                        <a href="/jsQuestion">
                            <p>Js Language MCQ</p>
                        </a>
                        <a href="/pythonQuestion">
                            <p>Python Language MCQ</p>
                        </a>
                        <a href="/NodejsQuestion">
                            <p>Nodejs Language MCQ</p>
                        </a>
                        <a href="/CQuestion">
                            <p>Bootstrap Language MCQ</p>
                        </a>
                        <a href="/cssQuestion">
                            <p>CSS Language MCQ</p>
                        </a>
                        <a href="/htmlQuestion">
                            <p>HTML Language MCQ</p>
                        </a>
                        <a href="/ReactjsQuestion">
                            <p>Reactjs Language MCQ</p>
                        </a>

                    </div>
                    
                    <div className="sb_footer_links_div">
                            <h4> Company</h4>
                            <a href="Home">
                                Home
                            </a>
                            <a href="About">
                                About
                            </a>
                            <a href="Login">
                                Login
                            </a>
                            <a href="Get Cetification">
                                 Get Cetification
                            </a>
                        
                    </div>

                    <div className="sb_footer-liks_div">
                        <h4>Coming soon on </h4>
                        <div className="socialmedia">
                            <p><img src={github} alt=""/></p>
                            <p><img src={instagram} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                        </div>
                    </div>

                    <hr></hr>

                   <div className="sb_footer-below">
                        <div className="sb_footer-below-links">
                            <a href="/trems"><div><p> Terms & conditions</p></div></a>
                            <a href="/Pivacy"><div><p> Pivacy</p></div></a>
                            <a href="/Security"><div><p>Security </p></div></a>
                            <a href="/Cookie Declaratio"><div><p> Cookie Declaration </p></div></a>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
    )

}

export default Footer;