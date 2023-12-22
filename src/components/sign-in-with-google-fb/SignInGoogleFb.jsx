import React from 'react'
import "./signingooglefb.scss"
import ContinueWithGoogle from '../buttons/Continue with Google/ContinueWithGoogle'
import ContinueWithFacebook from '../buttons/Continue with Facebook/ContinueWithFacebook'

const SignInGoogleFb = () => {
  return (
    <div className="sign-in-g-fb">
      <h3>Sign in with</h3>
      <div className="btns">
           <ContinueWithFacebook />
           <ContinueWithGoogle />
      </div>
    </div>
  )
}

export default SignInGoogleFb

