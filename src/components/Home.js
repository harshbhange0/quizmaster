import React from "react";
import "./Home.css";

import Homeimg1 from "./img/Home.jpg";
import Navbar from "./Navbar";
import letter from "./img/letter-c.png"
import HTML from "./img/files.png";
import java from "./img/java.png";
import python from "./img/python.png";
import node from "./img/node.jpg";
import bootstrap from "./img/bootstap.jpg";
import css from "./img/css.png";


function Home() {
  return (
    <div>
      <div className="top-navbar">
        <Navbar/>
      </div>

      <div className="Container">
        <div>
          <img src={Homeimg1} className="home-image" alt="..." />
           
          <div className="Container1">

          <div className="home-heading"> 
          <img src={letter} className="Lang-img" alt="..." />
            <h5 class="langName">C </h5>
            <p class="font">C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.
              It is a very popular language, despite being old.</p>
          </div>

          <div className="home-heading">
          <img src={HTML} className="Lang-img" alt="..." />
            <h5 class="langName">HTML </h5>
            <p class="font">HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements.  </p>
          </div>

          <div className="home-heading">
          <img src={java} className="Lang-img" alt="..." />
            <h5 class="langName">JAVA </h5>
            <p class="font">Java is a popular programming language, created in 1995.
              It is owned by Oracle, and more than 3 billion devices run Java.</p>
          </div>

          <div className="home-heading">
          <img src={python} className="Lang-img" alt="..." />
            <h5 class="langName">PYTHON </h5>
            <p class="font">Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language.</p>
          </div>
          </div>
        </div>

        <div className="Container2">
            
          <div className="home-heading2"> 
          <img src={bootstrap} className="Lang-img" alt="..." />
            <h5 class="langName">BOOTSTARP</h5>
            <p class="font">Bootstrap 5 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.</p>
          </div>

          <div className="home-heading2"> 
          <img src={css} className="Lang-img" alt="..." />
            <h5 class="langName">CSS</h5>
            <p class="font">CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.

</p>
          </div>

          <div className="home-heading2"> 
          <img src={node} className="Lang-img" alt="..." />
            <h5 class="langName">NODE JS</h5>
            <p class="font">Developers use Node. js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
          </div>

          </div>
      </div>
    </div>
  );
}

export default Home;
