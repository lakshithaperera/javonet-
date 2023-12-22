import React from "react";
import "./createaccount.scss";
import { NavBarSignIn } from "../../components/nav-bar-signin/NavBarSignIn";
import RegisterGoogleFb from "../../components/register-with-google-fb/RegisterGoogleFb";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const navigate = useNavigate();
    
    const navigateToSignIn = () => {
        navigate("/sign-in", {});
       };

  return (
    <section className="create-account">
      <div className="wrapper">
        <NavBarSignIn />
        <div className="header">
          <div className="top">
            <h2>Free 30-day trial</h2>
            <h5>No credit card required.</h5>
          </div>
          <div className="bottom">
            <h5>You are just a few steps away from your Javonet experience!</h5>
            <p>Let’s get started!</p>
          </div>
        </div>
        <div className="register-container">
          <div className="left">
            <RegisterGoogleFb />
          </div>
          <div className="middle">
            <span></span>
            <p>Or</p>

            <span></span>
          </div>
          <div className="right">
            <h3>Create account </h3>
            <div className="input-container">
              <div className="input-area">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-area">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input-area">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Type Password" />
              </div>
              <div className="input-area">
                <label htmlFor="">Repeat Password</label>
                <input type="password" placeholder="Retype Password" />
              </div>
            </div>
            <a href="/">
              <button>Create Account</button>
            </a>
          </div>
        </div>
        <div className="bottom-text">
          <p>Already have an account? </p> <span onClick={() => navigateToSignIn()}>Sign In</span>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default CreateAccount;
