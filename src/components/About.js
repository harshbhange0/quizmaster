import React from 'react'
import './About.css'
import AboutCard from './AboutCard';
import { ReactPropTypes } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
    return (
        <>

            <div className="top-navbar">
                <Navbar />
            </div>

            <div className='d-flex justify-content-evenly flex-wrap'>
                <AboutCard
                    ProfilPick="https://github.com/harshbhange0.png"
                    AboutCardTitle="Harsh Bhange"
                    GitHubLink="https://github.com.png"
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/saurabhjaykar1603.png"
                    AboutCardTitle="Saurabh Jaykar"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/RuchikaKadu02.png"
                    AboutCardTitle="Ruchika Kadu"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/SwetaRamteke-74.png"
                    AboutCardTitle="Sweta Ramteke"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/rp7003.png"
                    AboutCardTitle="Rahul Pawar"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/.png"
                    AboutCardTitle="Vaibhav Gaikwad"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/tejas7558.png"
                    AboutCardTitle="Tejas"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/nikitajambe.png"
                    AboutCardTitle="Nikita Jambe"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                <AboutCard
                    ProfilPick="https://github.com/sanikabargal7.png"
                    AboutCardTitle="Sanika Bargal"
                    GitHubLink=""
                    LInkedinLink=""
                    InstagramLink=""
                    GmailLink=""
                />

                

            </div>

            <div className="footer">
                <Footer />
            </div>


       

      </>
  );
}

export default About
