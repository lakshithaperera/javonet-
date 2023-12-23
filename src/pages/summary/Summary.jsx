import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Summary.scss";
import { NavBarSignIn } from "../../components/nav-bar-signin/NavBarSignIn";
import SummaryDropDown from "../../components/CustomDropDown/SummaryDropDown";
import Footer from "../../components/footer/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { ProjectForm } from "../project-name/ProjectName";
import "./projectStyleForSummary.scss";
import { FaPlus } from "react-icons/fa6";
import { useMediaPredicate } from "react-media-hook";
import MobileViewHelpBtn from "../../components/MobileViewHelpBtn/MobileViewHelpBtn";

export const ProjectDropDown = ({
  projectData,
  onProjectNameChange,
  onSelectedOptionsChange,
  onNumberOfMachinesChange,
  onNumberOfEmailsChange,
  onDeleteProject,
  isHelpCheckboxChecked,
  onHelpCheckboxChange,


}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [diagramCheckboxChecked, setDiagramCheckboxChecked] = useState(
    projectData.diagramCheckboxChecked
  );

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const handleCheckboxClick = () => {
    setDiagramCheckboxChecked(!diagramCheckboxChecked);
  };



  return (
    <div className="project-drop-down">
      <div className="header" onClick={toggleDropDown}>
        <h3>{projectData.projectName}</h3>
        <div className="right">
          <span className="tech">
            {projectData.selectedOptions.length} Tech
          </span>
          <div className="line"></div>
          <span className="machines">
            {projectData.numberOfMachines} Machines
          </span>
          <div className="line"></div>
          <span className="members">{projectData.numberOfEmails} Members</span>
          <IoIosArrowDown
            className={`arrow-icon ${isDropDownVisible ? "active" : ""}`}
          />
        </div>
      </div>
      {isDropDownVisible && (
        <div className="drop-down-content">
          <ProjectForm
            formKey={projectData.key}
            diagramCheckboxChecked={diagramCheckboxChecked}
            handleCheckboxClick={handleCheckboxClick}
            numberOfMachines={projectData.numberOfMachines}
            onNumberOfMachinesChange={onNumberOfMachinesChange}
            onDeleteProject={() => onDeleteProject(projectData.key)}
            onSelectedOptionsChange={onSelectedOptionsChange}
            selectedOptions={projectData.selectedOptions || []}
            onNumberOfEmailsChange={onNumberOfEmailsChange}
            projectName={projectData.projectName}
            onProjectNameChange={onProjectNameChange}
            initialNumberOfEmails={projectData.numberOfEmails}
            isHelpCheckboxChecked={isHelpCheckboxChecked}
            onHelpCheckboxChange={onHelpCheckboxChange}
            emails={projectData.emails || []}
            
          />
        </div>
      )}
    </div>
  );
};

const Summary = () => {
  const location = useLocation();
  const { projectForms: initialProjectForms } = location.state || {};
  const [projectForms, setProjectForms] = useState(initialProjectForms || []);
const lessThan1300 = useMediaPredicate("(max-width: 1299px)");


// State and function for the help checkbox
const [isHelpCheckboxChecked, setIsHelpCheckboxChecked] = useState(true);

  const handleHelpCheckboxChange = () => {
    // Your logic to handle checkbox change
    setIsHelpCheckboxChecked(!isHelpCheckboxChecked);
  };

  // Function to handle changes in the project name input
  const handleProjectNameChange = (formKey, newProjectName) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey ? { ...form, projectName: newProjectName } : form
      )
    );
  };


  const handleSelectedOptionsChange = (formKey, selectedOptions) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey ? { ...form, selectedOptions } : form
      )
    );
  };

  const handleNumberOfMachinesChange = (formKey, value) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey ? { ...form, numberOfMachines: value } : form
      )
    );
  };

  const handleNumberOfEmailsChange = (formKey, emails, count) => {
    const updatedForms = projectForms.map((form) =>
      form.key === formKey ? { ...form, numberOfEmails: count, emails } : form
    );
    setProjectForms(updatedForms);
    
  };

  const handleNewProjectClick = () => {
    const newProjectKey = projectForms.length;
    const newProject = {
      key: newProjectKey,
      diagramCheckboxChecked: true,
      numberOfMachines: "",
      selectedOptions: [],
      numberOfEmails: 0,
      projectName: "",
      emails: [],
    };

    // Add the new project to the beginning of the array
    setProjectForms([newProject, ...projectForms]);
  };

  const handleDeleteProject = (projectKey) => {
    // Filter out the project with the specified key and update the state
    setProjectForms((prevForms) =>
      prevForms.filter((project) => project.key !== projectKey)
    );
  };
  
  return (
    <section className="summary-page">
      <div className="wrapper">
        <NavBarSignIn />
        <main>
          <div className="header">
            <h3>Nice to Meet you, John!</h3>
            <p>Let’s configure your subscription</p>
          </div>
          {lessThan1300 && (
            <MobileViewHelpBtn
            isHelpCheckboxChecked={isHelpCheckboxChecked}
            onHelpCheckboxChange={handleHelpCheckboxChange}
          />
          )}
          <div className="content">
            <div className="projects-content">
            {projectForms.slice().reverse().map((project) => (
    <ProjectDropDown
      key={project.key}
      projectData={project}
      onProjectNameChange={handleProjectNameChange}
      onSelectedOptionsChange={handleSelectedOptionsChange}
      onNumberOfMachinesChange={handleNumberOfMachinesChange}
      onNumberOfEmailsChange={handleNumberOfEmailsChange}
      onDeleteProject={handleDeleteProject}
      isHelpCheckboxChecked={isHelpCheckboxChecked}
     onHelpCheckboxChange={handleHelpCheckboxChange}
     emails={project.emails || []}
     
    />
  ))}
            </div>
            <button className="new-project" onClick={handleNewProjectClick}>
            <FaPlus className="icon" />
            <span>New Project</span>
          </button>
            {/*      <button className="new-project">
              <FaPlus className="icon" />
              <span>New Project</span>
            </button>   */}
            <div className="summary-drop-down">
              <SummaryDropDown
                numberOfProjects={projectForms ? projectForms.length : 0}
                projectForms={projectForms || []}
              />
            </div>
            <div className="complete-setup">
            <button>
            Complete Setup
            </button>
          </div>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default Summary;
