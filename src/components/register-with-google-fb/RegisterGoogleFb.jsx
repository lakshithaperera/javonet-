import React from 'react'

import ContinueWithGoogle from '../buttons/Continue with Google/ContinueWithGoogle'
import ContinueWithFacebook from '../buttons/Continue with Facebook/ContinueWithFacebook'

const RegisterGoogleFb = () => {
  return (
    <div className="sign-in-g-fb">
      <h3>Register with</h3>
      <div className="btns">
           <ContinueWithFacebook />
           <ContinueWithGoogle />
      </div>
    </div>
  )
}

export default RegisterGoogleFb

