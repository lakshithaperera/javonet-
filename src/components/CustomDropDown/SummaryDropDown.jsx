import React, { useState } from 'react';
import './SummaryDropDown.scss';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SummaryDropDown = ({ numberOfProjects,  projectForms   }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const totalNumberOfMachines = projectForms.reduce(
    (total, project) => total + project.numberOfMachines,
    0
  );

  const totalNumberOfEmails = projectForms.reduce(
    (total, project) => total + project.numberOfEmails,
    0
  );

  const selectedTechnologies = Array.from(
    new Set(
      projectForms
        .flatMap((project) => project.selectedOptions || []) // Ensure selectedOptions is an array
        .filter(Boolean)
    )
  );

  return (
    <div className={`summary ${isDropdownOpen ? 'open' : ''}`}>
      <div className="drop-down-header" >
        <h3 onClick={toggleDropdown}>Summary</h3>
        {isDropdownOpen ? (
          <IoIosArrowUp className="drop-down-icon" onClick={toggleDropdown} />
        ) : (
          <IoIosArrowDown className="drop-down-icon" onClick={toggleDropdown} />
        )}
      </div>
      {isDropdownOpen && (
        <div className="drop-down-options">
          {/* Include your dropdown options/content here */}
          <div className="option bg"><span>Licence Type</span><p>Enterprise</p></div>
          <div className="option"><span>Number of Projects</span><p>{numberOfProjects}</p></div>
          <div className="option bg"><span>Selected Technologies</span> <p>{selectedTechnologies.length > 0 ? selectedTechnologies.join(', ') : 'None'}</p></div>
          <div className="option"><span>Activation Methods</span><p>Runtime or Compile</p></div>
          <div className="option bg"><span>Machines</span><p>{totalNumberOfMachines}</p></div>
          <div className="option"><span>Users</span><p>{totalNumberOfEmails}</p></div>
          <div className="line"></div>
          <div className="option total"><span>total</span><div className="left"><h3>$0 / First Month*</h3><p>*After first month: $ 23450 / Year</p></div></div>
        </div>
      )}
    </div>
  );
};

export default SummaryDropDown;