import React from 'react'
import "./About.css"
import github from "./img/logos/github.png";
import linkdin from "./img/logos/linkedin.png";
import Gmail from "./img/logos/gmail.png";
import instagram from "./img/logos/instagram.png";
import Css from "./img/logos/css.png";
import Html from "./img/logos/html.png";
import Javascript from "./img/logos/javascript.png";
import Bootstrap from "./img/logos/bootstrap.png";
import Reactimg from "./img/logos/react.png";



function AboutCard({ ProfilPick, AboutCardTitle, Instagram, Twitter, Github, linkedin }) {
    return (

        

        <div className='card m-3  shadow-sm' style={{
            width: "20rem"
        }}>
            <img className='card-img profile-pick' src={ProfilPick} alt="profile photo" />
            <div className='card-body mt-2'>
                <h2 className='text-center'>{AboutCardTitle}</h2>

                <div className='card-footer my-1'>
                    <div className='d-flex p-2 justify-content-center align-items-center'>
                        <span className='d-block mx-1 p-2 border'><img height="40px" alt="" src={Html}/></span>
                        <span className='d-block mx-1 p-2 border'><img height="40px" alt="" src={Css}/></span>
                        <span className='d-block mx-1 p-2 border'><img height="35px" alt="" src={Javascript}/></span>
                        <span className='d-block mx-1 p-2 border'><img height="30px" alt="" src={Bootstrap}/></span>
                        <span className='d-block mx-1 p-2 border'><img height="40px"  alt="" src={Reactimg}/></span>
                        
                    </div>
                    <h5 className='text-center'>Connect With Us</h5>
                    <div className='d-flex flx-wrap social-logo'>
                        <a href={linkedin} className='m-1 p-1 text-dark social-logo '><img src={linkdin} alt=""  width="50px"/></a>
                        <a href={Github} className='m-1 p-1 text-dark social-logo'> <img src={github} alt="" width="50px"/></a>
                        <a href={Gmail} className='m-1 p-1 text-dark social-logo'><img src={Gmail} alt=""  width="60px"/></a>
                        <a href={Instagram} className='m-1 p-1 text-dark social-logo'><img src={instagram} alt=""  width="50px"/></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutCard