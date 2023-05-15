import "./Signup.css";
import 'bootstrap/dist/css/bootstrap.css';
import img from "../Components/img/Signup img.jpg"

function Signup() {
    return (
        <div className="container-fluid">
            <div className="main-container row">
                <div className=" col">
                    <img src={img} alt="img1" className='img' />
                </div>
                <div className=" col">
                    <div className="signup-container">
                        <h2 className='text-center'> Sign up </h2>
                        <form className="rounded m-auto">
                            <h4 className="text-center mt-3">Get started with QuizMaster</h4>
                            <p className="text-center  mb-4">Create an account, and Challenge Your Code Skills.</p>

                            <div className="row">
                                <div className="d-flex ">
                                    <div className="col">
                                        <div className="form-group">
                                            <label for="usernameInput">First name </label> <br />
                                            <input type="text" className="fl-input" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <div className="form-group">
                                            <label for="usernameInput">Last name </label> <br />
                                            <input type="text" className="fl-input" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-md-12">
                                    <div className="form-group">
                                        <label for="usernameInput">Username</label> <br />
                                        <input type="text" className="up-input" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col col-md-12">
                                    <div className="form-group mt-4 mb-3">
                                        <label for="passwordInput">Password</label> <br />
                                        <input type="password" className="up-input" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn mt-3" id='signup-btn'>Sign Up</button>
                                </div>
                            </div>

                            <div className="text-center mt-3">
                                <span>By signing up, I agree to QuizMaster Terms of Service and<br /> Privacy Policy.</span>
                            </div>

                            <div className="text-center mt-3">
                                <span>Already have an account?</span> <a href="sign_in.html"
                                    className="text-primary text-decoration-none text-dark"> Sign in</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup