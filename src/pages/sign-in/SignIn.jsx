import React from "react";
import { NavBarSignIn } from "../../components/nav-bar-signin/NavBarSignIn";
import "./signin.scss";
import SignInGoogleFb from "../../components/sign-in-with-google-fb/SignInGoogleFb";
import Footer from "../../components/footer/Footer";
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();
    
  const navigateToCreateAccount = () => {
      navigate("/create-account", {});
     };

  return (
    <section className="log-in">
      <div className="wrapper">
        <NavBarSignIn />
        <div className="header">
          <h3>Welcome Back!</h3>
          <p>We’re happy to see you again</p>
        </div>
        <div className="sign-in-container">
          <div className="left">
            <SignInGoogleFb />
          </div>
          <div className="middle">
            <span></span>
            <p>Or</p>

            <span></span>
          </div>
          <div className="right">
            <h3>Sign in with</h3>
            <div className="input-container">
              <div className="input-area">
                <label htmlFor="">Email</label>
                <input type="email" />
              </div>
              <div className="input-area">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
            </div>
            <a href="/">
              <button>Sign in</button>
            </a>
          </div>
        </div>
        <div className="bottom-text">
          <p>Don’t have an account?</p> <span onClick={() => navigateToCreateAccount()}>Create an Account</span>
        </div>
       <Footer />
      </div>
    </section>
  );
};

export default SignIn;
