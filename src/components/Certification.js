import React from 'react'
import Navbar from './Navbar'
import cerf from './img/cerf.png'
import harshCertificate from './img/harshCert.png'
import ruchikaCertificate from './img/ruchikaCert.png'
import nikitaCertificate from './img/nikitaCert.png'
import Footer from "./Footer"

function Certification() {
  return (<>
  <div className='top-navbar'>
    <Navbar/>
  </div>
    <div className='container'>
      <div className="row text-center">
        <h1 className="text-center my-4">Free Online Quizz With Certificates</h1>
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 back-color rounded-3 ">
              <h2>"Unlock Your Knowledge, Complete the Quiz, and Earn Your Certification!"</h2>
              <p className="fw-semibold">Elevate your status, certify your success. - Elevate your professional status and certify your success by completing our quiz. Let the world know that you've achieved greatness in your field.</p>
              <button className="btn btn-outline-dark" type="button">Example button</button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="h-100  bg-body-tertiary border rounded-3 shadow">
              <img src={cerf} alt="" height="300px" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-lg-center text-md-center mt-5">Recent students Who Completed their Quizz</h2>
    <div className="row">
      <div className="col col-md-4">
        <div className="card m-auto my-5  shadow width-in-rem " >
          <img src={harshCertificate} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
          </div>
        </div>
      </div>
      <div className="col col-md-4">
        <div className="card m-auto my-5  shadow width-in-rem " >
          <img src={nikitaCertificate} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
          </div>
        </div>
      </div>
      <div className="col col-md-4">
        <div className="card m-auto my-5 shadow  width-in-rem">
          <img src={ruchikaCertificate} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
          </div>
        </div>
      </div>

    </div>










    </div>

    <div className='footer'>
      <Footer/>
    </div>
    </>
  )
}

export default Certification
