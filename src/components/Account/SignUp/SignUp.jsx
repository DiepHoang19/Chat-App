import React, { Component } from "react";

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-google-plus-g" />
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </div>
                    <div className="form-container sign-in-container">
                        <form >
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                                <a href="#" className="social">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input type="text" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">
                                    Sign In
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}