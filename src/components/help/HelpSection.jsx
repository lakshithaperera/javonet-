import React, { useState } from "react";
import "./help.scss";
import { useMediaPredicate } from "react-media-hook";

const HelpSection = ({
  isHelpVisible,
  setIsHelpVisible,
  title,
  description,
}) => {
  const [ishelpContentVisible, setIshelpContentVisible] = useState(true);
  const biggerThan1300 = useMediaPredicate("(min-width: 1300px)");
  const lessThan1300 = useMediaPredicate("(max-width: 1299px)");

  

  const handleHelpContentCheckboxChange = () => {
    setIshelpContentVisible(!ishelpContentVisible);
  };

  return (
    <>
      {biggerThan1300 && isHelpVisible && (
        <div className="help">
          <div className="radio-input-area-help">
          {ishelpContentVisible && (
            <h4>Help</h4>
          )}
           {!ishelpContentVisible && (
            <h4 style={{color: '#95A1BD'}}>Help</h4>
          )}
            
            <label className="switch" htmlFor={`${title}HelpCheckbox`}>
              <input
                type="checkbox"
                id={`${title}HelpCheckbox`}
                onChange={handleHelpContentCheckboxChange}
                checked={ishelpContentVisible}
              />
              <div className="slider"></div>
            </label>
          </div>
          {ishelpContentVisible && (
            <div className="help-content">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          )}
        </div>
      )}

      {lessThan1300 && (
        <div className="help">
          <div className="help-content">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpSection;
