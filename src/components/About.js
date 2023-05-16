import React from 'react'
import './About.css'

function About({ title, imageUrl, body,imageUrl1,imageUrl2,imageUrl3,imageUrl4  }) {
  return (
    <>
    <div className='top-navbar'>
        
    </div>
      <div className="card-container">
          <div className="image-container">
              <img src={imageUrl} alt=""/>
          </div>
          <div className="card-content">
              
          </div>
          <div className="card-title">
              <h3>{title}</h3>
          </div>
          <div className="card-body">
              <p>{body}</p>
          </div>
          <div className="conatiner">
          <div className="icon-git">
              <img src={imageUrl1} alt="github" height="50px" border-radius="10px"/>
          </div>
          <div className="icon-linkedin">
              <img src={imageUrl2} alt="linkedin" height="50px"/>
          </div>
          <div className="icon-twitter">
              <img src={imageUrl3} alt="twitter" height="50px"/>
          </div>
          <div className="icon-insta">
              <img src={imageUrl4} alt="insta" height="50px"/>
          </div>


          </div>
          

      </div>
      </>
  );
}

export default About
