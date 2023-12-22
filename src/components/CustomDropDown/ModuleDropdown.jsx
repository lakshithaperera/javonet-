// Importing necessary React components, icons, and styles
import React, { useEffect, useRef, useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./ModuleDropdown.scss"; // Import SCSS file

// ModuleDropdown Component: a dropdown for selecting programming modules
const ModuleDropdown = ({
  selectedOptions,
  handleCheckboxChange,
  removeSelectedOption,
  dropdownVisible,
  toggleDropdown,
}) => {
  const dropdownRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Clicked outside the dropdown, close it
      toggleDropdown();
    }
  }, [toggleDropdown]);

  useEffect(() => {
    // Attach the event listener when the dropdown is visible
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible, handleClickOutside]);

  // Available programming modules
  const Modules = [
    "Python",
    "Perl",
    "JVM",
    ".NET Core",
    "CLR",
    "Ruby",
    "Node .js",
  ];

  return (
    // Main container for the custom dropdown
    <div ref={dropdownRef} className={`custom-dropdown ${dropdownVisible ? "open" : ""}`}>
      {/* Dropdown button section */}
      <div className={`dropdown-button ${dropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? (
          // Display selected options with remove button
          <>
            {" "}
            {selectedOptions.map((option) => (
              <span key={option}>
                {option}
                <i
                  onClick={(event) => {
                    event.stopPropagation(); // Stop event propagation
                    removeSelectedOption(option);
                  }}
                  className="fa-solid fa-xmark"
                  
                ></i>
              </span>
            ))}
          </>
        ) : (
          // Display default text when no option is selected
          "Select from dropdown or diagram below"
        )}
        {/* Dropdown toggle button */}
        <IoIosArrowDown
          className={`drop-down-toggle-btn ${dropdownVisible ? "active" : ""}`}
          
        />
      </div>

      {/* Dropdown content section */}
      {dropdownVisible && (
        <div className="dropdown-content">
          {/* Map through available modules to display checkboxes */}
          {Modules.map((language) => (
            <div
              className={`checkbox-container ${
                selectedOptions.includes(language) ? "checked" : ""
              }`}
              key={language}
            >
              {/* Checkbox for each programming module */}
              <input
                type="checkbox"
                id={language}
                onChange={() => handleCheckboxChange(language)}
                checked={selectedOptions.includes(language)}
              />
              {/* Label for the checkbox */}
              <label className="checkbox-label" htmlFor={language}>
                {language}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleDropdown;
