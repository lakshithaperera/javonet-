import React from 'react'
import "./navbarlogin.scss"
import logo from "../../assets/Logo.svg"
import en_icon from "../../assets/en-icn.svg"

export const NavBarSignIn = () => {
  return (
    <nav className='nav-bar-login'>
         <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="btns">
                    <button className='login-btn'>LOG IN</button>
                    <span></span>
                    <button className='en-btn'>EN <img src={en_icon} alt="icon" /></button>
                </div>
         </div>
    </nav>
  )
}
