// Importing necessary React components, icons, and styles
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./MachinesDropDown.scss";


// Functional component for a custom dropdown
const MachinesDropDown = () => {
  // State variables to manage dropdown behavior
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [isClickedInside, setIsClickedInside] = useState(false);

  // Reference to the dropdown DOM element
  const dropdownRef = useRef(null);

  // Effect hook to handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsClickedInside(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to toggle the dropdown visibility and handle clicks inside
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    handleClickInside();
  };

  // Function to handle the selection of an option in the dropdown
  const handleOptionChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  // Function to mark that a click occurred inside the dropdown
  const handleClickInside = () => {
    setIsClickedInside(true);
  };

  // Data for number options in the dropdown
  const numberOptions = [
    { label: "10", value: "10" },
    { label: "11-15", value: "11-15" },
    { label: "16-50", value: "16-50" },
    { label: "51-100", value: "51-100" },
    { label: "100+", value: "100+" },
  ];

  // Rendering the dropdown component
  return (
    <div
      ref={dropdownRef}
      className={`custom-dropdown-machine  ${isClickedInside ? "clicked" : ""}`}
    >
      <h4>Number of machines</h4>
      <div
        className={`dropdown-header ${selectedValue ? "selected" : ""} ${
          isOpen ? "active" : ""
        }`}
      >
        {selectedValue ? ` ${selectedValue}` : "Select"}
        <IoIosArrowDown
          className={`dropdown-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleDropdown}
        />
      </div>

      {/* Displaying dropdown options when it is open */}
      {isOpen && (
        <div className="dropdown-options">
          {numberOptions.map(({ label, value }) => (
            <label
              key={value}
              className={`option-label ${
                selectedValue.includes(value) ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                value={value}
                checked={value === selectedValue}
                onChange={() => handleOptionChange(value)}
                className="option-radio"
              />
              <p>{label}</p>
            </label>
          ))}
        </div>
      )}
    
    </div>
  );
};

// Exporting the component as the default export
export default MachinesDropDown;
