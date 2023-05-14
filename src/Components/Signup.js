import "./Signup.css";
import 'bootstrap/dist/css/bootstrap.css';
import img from "../Components/img/Signup img.jpg"

function Signup() {
    return (
        <div className="d-flex main-container">
            <div className="">
                <img src={img} alt="img1" className='img' />
            </div>
            <div>
                <div className="signup-container">
                    <h2 className='text-center'> Sign up </h2>
                    <form className="rounded">
                        <h4 className="text-center mt-3">Get started with QuizMaster</h4>
                        <p className="text-center  mb-4">Create an account, and Challenge Your Code Skills.</p>

                        <div className="d-flex mb-4">
                            <div className="form-group">
                                <label for="usernameInput">First name </label>
                                <input type="text" className="form-control" id="usernameInput" placeholder="First name" />
                            </div>
                            <div className="form-group ms-4">
                                <label for="usernameInput">Last name </label>
                                <input type="text" className="form-control" id="usernameInput" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="usernameInput">Username</label>
                            <input type="text" className="form-control" id="usernameInput" placeholder="Username" />
                        </div>
                        <div className="form-group mt-4 mb-3">
                            <label for="passwordInput">Password</label>
                            <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                        </div>
                        <button type="button" className="btn mt-3" id='signup-btn'>Sign Up</button>

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
    )
}

export default Signup