import React, { useState, useEffect } from "react";
import "./MobileViewHelpBtn.scss"

const MobileViewHelpBtn = ({ isHelpCheckboxChecked, onHelpCheckboxChange }) => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    // For simplicity, let's assume scrolling after a certain point triggers fixed position
    if (window.scrollY > 100) {
        setScrolling(true);
    } else {
        setScrolling(false);
    }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
      window.removeEventListener("scroll", handleScroll);
  };
}, []);

    return (
      <div  className={`radio-input-area mobile-help-sec ${scrolling ? "fixed-help-btn" : ""}`}>
       {isHelpCheckboxChecked && (
           <h4>Help</h4>
       )} 
        {!isHelpCheckboxChecked && (
           <h4 className="light">Help</h4>
       )} 
       
        <label className="switch" htmlFor="lessthan1300Help">
          <input
            type="checkbox"
            id="lessthan1300Help"
            checked={isHelpCheckboxChecked}
            onChange={onHelpCheckboxChange}
          />
          <div className="slider"></div>
        </label>
      </div>
    );
  };
  
  export default MobileViewHelpBtn;
