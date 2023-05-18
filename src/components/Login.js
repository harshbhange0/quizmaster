import React from 'react';
import img from "./img/img-1080.jpg";
import "./Signup.css";
import { Link } from 'react-router-dom';

function Login() {
    return (


        <div className='container-fluid signup-container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 p-0'>
                    <div className='container-fluid h-100 p-0'>
                        <img src={img} className='img-fluid d-block img'  alt=''/>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 p-0 d-flex align-items-center justify-content-center overflow-y-hidden'>
                    <div className='d-block w-75' data-aos="fade-up"
                        data-aos-offset="1">
                        <div className='mb-5'>
                            <h3>Sign in to QuizMaster</h3>
                            <p>Enter your details below.</p>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className='mb-4 mt-2'>
                            <a href="#" className='pass'>Forgot password?</a>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn signup-btn" type="button">Sign in </button>
                        </div>
                        <div className='text-center mt-3'>
                            <span>Not a member yet? <Link to="/singup">  Sign up now </Link></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login