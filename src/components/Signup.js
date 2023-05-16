import React from 'react';
import img from "./img/img-1080.jpg";
import "./Signup.css";
import { Link } from 'react-router-dom';


function Signup() {
    return (
        <>
        <div className='container-fluid signup-container'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-6 p-0'>
                    <div className='container-fluid h-100 p-0'>
                        <img src={img} className='img-fluid d-block img' />
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-6 p-0 d-flex align-items-center justify-content-center'>
                    <div className='d-block w-75'>
                        <div className='mb-5'>
                            <h3>Get started with QuizMaster</h3>
                            <p>Create an account, and Challenge Your Code Skills.</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Last Name</label>
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <button class="btn signup-btn" type="button">Sign up </button>
                        </div>
                        <div className='mt-3'>
                            <span>By signing up, I agree to QuizMaster Terms of Service and Privacy Policy.</span>
                        </div>
                        <div className='text-center mt-3'>
                            <span>Already have an account? <Link to="/login"> Sign in </Link></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Signup