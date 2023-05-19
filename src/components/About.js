import React from 'react'
import './About.css'
import AboutCard from './AboutCard';
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
    return (
        <div className='About-Holder'>

            <div className="top-navbar">
                <Navbar />
            </div>
            <div className='page-tittle '>
                <h1>DEVELOPERS</h1>
            </div>

            <div className='d-flex justify-content-evenly flex-wrap'>
                <AboutCard
                    ProfilPick="https://github.com/harshbhange0.png"
                    AboutCardTitle="Harsh Bhange"
                    Github="https://github.com/harshbhange0"
                    linkedin="https://www.linkedin.com/in/harshbhange0"
                    Instagram="https://www.instagram.com/harshbhange0"
                    Gmail="harshbhange123@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/saurabhjaykar1603.png"
                    AboutCardTitle="Saurabh Jaykar"
                    Github="https://github.com/saurabhjaykar1603?fbclid=PAAaY3qw6FDsmuEC_bzQEKrDcEGcedOB8dTSapaN-iQEjwwoDba8t31EQN82I"
                    linkedin="https://www.linkedin.com/in/saurabh-jaykar-04a167274/"
                    Instagram="https://www.instagram.com/saurabh.sj2.o/"
                    Gmail="jaykarsaurabh97@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/RuchikaKadu02.png"
                    AboutCardTitle="Ruchika Kadu"
                    GitHub="https://github.com/RuchikaKadu02"
                    linkedin="https://www.linkedin.com/in/ruchika-kadu-bb5515221"
                    Instagram="https://instagram.com/ruchii_kadu?igshid=OTk0YzhjMDVlZA=="
                    Gmail="kaduruchika@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/SwetaRamteke-74.png"
                    AboutCardTitle="Sweta Ramteke"
                    GitHub="https://github.com/SwetaRamteke-74"
                    linkedin="https://www.linkedin.com/in/sweta-ramteke-539a28248/"
                    Instagram=""
                    Gmail="swetaramteke38@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/rp7003.png"
                    AboutCardTitle="Rahul Pawar"
                    GitHub="https://github.com/rp7003"
                    linkedin="https://www.linkedin.com/in/rahul-pawar-74757a222"
                    Instagram="https://instagram.com/rp_patil7003?igshid=ZDdkNTZiNTM="
                    Gmail="rahulpawar7003@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/vaibhavgaikwad8476.png"
                    AboutCardTitle="Vaibhav Gaikwad"
                    GitHub="https://github.com/vaibhavgaikwad8476"
                    linkedin="https://www.linkedin.com/in/vaibhav-gaikwad-4423b9249"
                    Instagram="https://instagram.com/vaibhav_gaikwad_8476?igshid=YmMyMTA2M2Y="
                    Gmail="vaibhavgaikwad8476@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/tejas7558.png"
                    AboutCardTitle="Tejas"
                    GitHub="https://github.com/tejas7558"
                    linkedin="https://www.linkedin.com/in/tejas-sonawane-04160225b/"
                    Instagram="https://instagram.com/tejas____o?igshid=MzNlNGNkZWQ4Mg=="
                    Gmail="sonawanetejas712@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/nikitajambe.png"
                    AboutCardTitle="Nikita Jambe"
                    GitHub="https://github.com/nikitajambe"
                    linkedin="https://www.linkedin.com/in/nikita-jambe-9390a8276"
                    Instagram="https://www.instagram.com/invites/contact/?i=7rqfm94o0iu4&utm_content=ngqktc3"
                    Gmail="nikitajambe@gmail.com"
                />

                <AboutCard
                    ProfilPick="https://github.com/sanikabargal7.png"
                    AboutCardTitle="Sanika Bargal"
                    GitHub="https://github.com/sanikabargal7"
                    linkedin="https://www.linkedin.com/in/sanika-bargal-63790124a"
                    Instagram="https://instagram.com/bargal_sanika07?igshid=ZGUzMzM3NWJiOQ=="
                    Gmail="sanikabargal2004@gmail.com"
                />

                

            </div>

            <div className="footer">
                <Footer />
            </div>


       

      </div>
  );
}

export default About
