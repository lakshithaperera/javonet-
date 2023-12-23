// Importing necessary modules and components
import React, { useState, useEffect, useRef } from "react";
import "./projectname.scss";
import { NavBarSignIn } from "../../components/nav-bar-signin/NavBarSignIn";
import logo from "../../assets/Logo.svg";
import miniLogo from "../../assets/Minilogo.svg"
import frame from "../../assets/Frame 1401.svg";
import { FaPlus } from "react-icons/fa6";
import EmailInput from "../../components/email-input/EmailInput";
import Footer from "../../components/footer/Footer";
import ModuleDropdown from "../../components/CustomDropDown/ModuleDropdown";
import HelpSection from "../../components/help/HelpSection";
import { useNavigate } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import MobileViewHelpBtn from "../../components/MobileViewHelpBtn/MobileViewHelpBtn";


// ProjectForm component represents the content and functionality of each project form
export const ProjectForm = ({
  formKey,
  diagramCheckboxChecked,
  handleCheckboxClick,
  numberOfMachines,
  onNumberOfMachinesChange,
  onDeleteProject,
  onSelectedOptionsChange,
  onNumberOfEmailsChange,
  projectName,
  onProjectNameChange,
  selectedOptions: initialSelectedOptions,
  isHelpCheckboxChecked,
  onHelpCheckboxChange,
  emails,
  
  
}) => {
  const [contentBackgroundColor, setContentBackgroundColor] =
    useState("transparent");
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const [isHelpModuleVisible, setIsHelpModuleVisible] = useState(false);
  const [isHelpMachinesVisible, setIsHelpMachinesVisible] = useState(false);
  const [isHelpEmailVisible, setIsHelpEmailVisible] = useState(false);
  // State variables using hooks
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions || []);
  const contentRef = useRef(null);
  const inputRef = useRef(null);
  const projectNameInputRef = useRef(null);
  const lessThan1300 = useMediaPredicate("(max-width: 1299px)");
  const greateThan1300 = useMediaPredicate("(min-width: 1300px)");

  

  // Define the content and functionality of the project form here
  // You can include your input fields, buttons, and other form elements

  // Function to toggle the visibility of the module dropdown
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to handle changes in the project name input
  const handleProjectNameChange = (e) => {
    onProjectNameChange(formKey, e.target.value); // Pass the formKey to identify which form's project name is being changed
  };

  // Function to handle checkbox changes for selected modules
  const handleCheckboxChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
  };
  // Pass selected options (formerly technologies) to the Summary component
  useEffect(() => {
    onSelectedOptionsChange(formKey, selectedOptions); // Ensure onSelectedOptionsChange is called
  }, [selectedOptions, formKey, onSelectedOptionsChange]);

  // Function to remove a selected module
  const removeSelectedOption = (option) => {
    const updatedOptions = selectedOptions.filter(
      (selectedOption) => selectedOption !== option
    );
    setSelectedOptions(updatedOptions);
  };

  // Function to check if a button/module is selected
  const isButtonSelected = (language) => {
    return selectedOptions.includes(language);
  };

  const handleNameClick = () => {
    setIsHelpVisible(true);
    setIsHelpModuleVisible(false);
    setIsHelpMachinesVisible(false);
    setIsHelpEmailVisible(false);
    projectNameInputRef.current.focus();
  };

  const handleMachinesClick = () => {
    setIsHelpMachinesVisible(true);
    setIsHelpVisible(false);
    setIsHelpModuleVisible(false);
    setIsHelpEmailVisible(false);
    inputRef.current.focus();
  };

  const handleEmailsClick = () => {
    setIsHelpEmailVisible(true);
    setIsHelpMachinesVisible(false);
    setIsHelpVisible(false);
    setIsHelpModuleVisible(false);
  };

  // Function to handle content click and change background color
  const handleContentClick = () => {
    setContentBackgroundColor("var(--primary-variant)");
    setIsHelpModuleVisible(true);
    setIsHelpVisible(false);
    setIsHelpMachinesVisible(false);
    setIsHelpEmailVisible(false);
  };

  // useEffect to handle clicks outside the content area
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the content element
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        // Clicked outside, remove the background color
        setContentBackgroundColor("transparent");
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  const handleDeleteClick = () => {
    // Invoke the onDeleteProject function with the current project key
    onDeleteProject(formKey);
  };



  // Function to handle changes in the number of machines input
  const handleNumberOfMachinesChange = (e) => {
    const value = e.target.value;
    onNumberOfMachinesChange(formKey, Number(value)); // Pass the formKey and the updated value
  };


  const handleNumberOfEmailsChange = (formKey, count, emails) => {
    onNumberOfEmailsChange(formKey, count, emails);
  };
  

  return (
    <>
      <div className="project-heading">
        <span>
          {formKey === 0 ? "Create your project" : "Create another project"}
        </span>
        {formKey > 0 && (
          <span className="delate-project" onClick={handleDeleteClick}>
            Delete <span> Project</span> 
          </span>
        )}
      </div>
      <div className="input-area project-name" >

        <div className="project-name-top" onClick={handleNameClick}>
          <label className="input-label" htmlFor={`projectName_${formKey}`}>
            Project name
          </label>
          <input
            ref={projectNameInputRef}
            type="text"
            id={`projectName_${formKey}`}
            placeholder="project"
            value={projectName}
            onChange={handleProjectNameChange}
          />
        </div>

        <div id="help-content">
          { greateThan1300 && (
             <HelpSection
             isHelpVisible={isHelpVisible}
             setIsHelpVisible={setIsHelpVisible}
             title="Name Your Project"
             description="Give your project a name so you can keep track of its licence keys and team members"
           />
          )}

          { lessThan1300 && isHelpCheckboxChecked && (
                 <HelpSection
                 isHelpVisible={isHelpVisible}
                 setIsHelpVisible={setIsHelpVisible}
                 title="Name Your Project"
                 description="Give your project a name so you can keep track of its licence keys and team members"
               />
          )}
        </div>
      </div>

      <div className="content su-content">
        <div
          className="content-top"
          ref={contentRef}
          style={{ backgroundColor: contentBackgroundColor }}
          onClick={handleContentClick}
        >
          <div className="input-area">
            <div className="top">
              <h4>Tech of module I want to call</h4>
              <div className="radio-input-area">
                <h4>View Diagram</h4>
                <label className="switch" htmlFor={`checkbox_${formKey}`}>
                  <input
                    type="checkbox"
                    id={`checkbox_${formKey}`}
                    checked={diagramCheckboxChecked}
                    onChange={() => handleCheckboxClick(formKey)}
                  />
                  <div className="slider"></div>
                </label>
              </div>
            </div>
            <div className="bottom">
              <ModuleDropdown
                selectedOptions={selectedOptions}
                handleCheckboxChange={handleCheckboxChange}
                removeSelectedOption={removeSelectedOption}
                dropdownVisible={dropdownVisible}
                toggleDropdown={toggleDropdown}
              />
            </div>
          </div>
          {diagramCheckboxChecked && ( // Conditionally render based on checkbox state
            <div className="diagram-content">
              <h4>Use modules from other technologies</h4>
              <p>
                With this license you will be able to{" "}
                <b>create application for Windows, Linux and MacOS</b> in{" "}
                <b>any supported technology</b> including CLR, Netcore, Python,
                Ruby, Perl, NodeJS, C++ and Go that can access and use any
                existing or custom <b>Python module</b> .
              </p>
              <div className="diagram">
                <div className="top">
                  <p className="first-text">Your App</p>
                  <p className="last-text">Module</p>
                </div>
                <div className="bottom">
                  <button>Any supported technology</button>
                  <div className="line first"></div>
                  <img className="logo" src={logo} alt="logo" />
                  <img className="mini-logo" src={miniLogo} alt="" />
                  <img className="frame" src={frame} alt="frame" />
                  <div className="btns">
                    <span
                      className={isButtonSelected("Python") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Python")}
                    >
                      Python
                    </span>
                    <span
                      className={isButtonSelected("Perl") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Perl")}
                    >
                      Perl
                    </span>
                    <span
                      className={isButtonSelected("JVM") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("JVM")}
                    >
                      JVM
                    </span>
                    <span
                      className={
                        isButtonSelected(".NET Core") ? "selected" : ""
                      }
                      onClick={() => handleCheckboxChange(".NET Core")}
                    >
                      .NET Core
                    </span>
                    <span
                      className={isButtonSelected("CRL") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("CRL")}
                    >
                      CRL
                    </span>
                    <span
                      className={isButtonSelected("Ruby") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Ruby")}
                    >
                      Ruby
                    </span>
                    <span
                      className={isButtonSelected("Node .js") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Node .js")}
                    >
                      Node .js
                    </span>
                  </div>
                </div>
              </div>
              <p>
                Select more target technologies if you need to use modules from
                other runtimes.
              </p>
              <h4 className="scnd">
                Create module available for other technologies
              </h4>
              <p>
                You can also create Python module and make it accessible for any
                other application created in any support technology including
                including CLR, Netcore, Python, Ruby, Perl, NodeJS, C++ and Go.
              </p>
              <div className="diagram diagram-2">
                <div className="top">
                  <p>Your Module</p>
                  <p className="scd-text">Tech with access to your modules</p>
                </div>
                <div className="bottom">
                  <div className="btns">
                    <span
                      className={isButtonSelected("Python") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Python")}
                    >
                      Python
                    </span>
                    <span
                      className={isButtonSelected("Perl") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Perl")}
                    >
                      Perl
                    </span>
                    <span
                      className={isButtonSelected("JVM") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("JVM")}
                    >
                      JVM
                    </span>
                    <span
                      className={
                        isButtonSelected(".NET Core") ? "selected" : ""
                      }
                      onClick={() => handleCheckboxChange(".NET Core")}
                    >
                      .NET Core
                    </span>
                    <span
                      className={isButtonSelected("CRL") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("CRL")}
                    >
                      CRL
                    </span>
                    <span
                      className={isButtonSelected("Ruby") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Ruby")}
                    >
                      Ruby
                    </span>
                    <span
                      className={isButtonSelected("Node .js") ? "selected" : ""}
                      onClick={() => handleCheckboxChange("Node .js")}
                    >
                      Node .js
                    </span>
                  </div>
                  <img className="frame" src={frame} alt="frame" />
                  <img className="logo" src={logo} alt="logo" />
                  <img className="mini-logo" src={miniLogo} alt="" />
                  <div className="line"></div>
                  <div className="right-btns">
                    <span>Ruby</span>
                    <span>Node .js</span>
                    <span>C#</span>
                    <span>JAR</span>
                    <span>Perl</span>
                    <span>JLL</span>
                  </div>
                </div>
              </div>
              <p style={{ paddingBottom: "14px" }}>
                Select more target technologies if you need to create universal
                modules in other technologies that will be accessible from any
                supported runtime.
              </p>
            </div>
          )}
        </div>

        <div id="help-content">
          
           { greateThan1300 && (
             <HelpSection
             isHelpVisible={isHelpModuleVisible}
             setIsHelpVisible={setIsHelpModuleVisible}
             title="How our licence works?"
             description="You pay per each technology and get access to either use modules in that tech from your app or create modules in this technology that will be instantly accessible to any supported runtime."
           />
            )}
  
            { lessThan1300 && isHelpCheckboxChecked && (
                 <HelpSection
                 isHelpVisible={isHelpModuleVisible}
                 setIsHelpVisible={setIsHelpModuleVisible}
                 title="How our licence works?"
                 description="You pay per each technology and get access to either use modules in that tech from your app or create modules in this technology that will be instantly accessible to any supported runtime."
               />
            )}
        </div>
      </div>
      <div className="machine-container" >
        <div className="input-area" onClick={handleMachinesClick}>
          <label className="input-label">Number of machines</label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a number"
            value={numberOfMachines}
            onChange={handleNumberOfMachinesChange}
          />
        </div>
        <div id="help-content">
         
          { greateThan1300 && (
             <HelpSection
             isHelpVisible={isHelpMachinesVisible}
             setIsHelpVisible={setIsHelpMachinesVisible}
             title="Number of Machines"
             description="Choose how many machines you need for your project"
           />
            )}
  
            { lessThan1300 && isHelpCheckboxChecked && (
                  <HelpSection
                  isHelpVisible={isHelpMachinesVisible}
                  setIsHelpVisible={setIsHelpMachinesVisible}
                  title="Number of Machines"
                  description="Choose how many machines you need for your project"
                />
            )}
        </div>
      </div>
      <div className="emails-container" onClick={handleEmailsClick}>
      <EmailInput
  onEmailsChange={(newEmails) => handleNumberOfEmailsChange(formKey,  newEmails, newEmails.length )}
  initialEmails={emails} // Pass the correct prop for initialEmails
/>
        <div id="help-content">
          { greateThan1300 && (
               <HelpSection
               isHelpVisible={isHelpEmailVisible}
               setIsHelpVisible={setIsHelpEmailVisible}
               title="Invite team members"
               description="Invite your team members by typing their email. You can also do this later on."
             />
            )}
  
            { lessThan1300 && isHelpCheckboxChecked && (
                    <HelpSection
                    isHelpVisible={isHelpEmailVisible}
                    setIsHelpVisible={setIsHelpEmailVisible}
                    title="Invite team members"
                    description="Invite your team members by typing their email. You can also do this later on."
                  />
            )}
        </div>
      </div>
    </>
  );
};

// Main component for the project page
const ProjectName = ({ setProjectEmails }) => {
  
  const lessThan1300 = useMediaPredicate("(max-width: 1299px)");

  const [isHelpCheckboxChecked, setIsHelpCheckboxChecked] = useState(true);
  const handleHelpCheckboxChange = () => {
    setIsHelpCheckboxChecked(!isHelpCheckboxChecked);
  };
// State variable to track an array of project forms
  const [projectForms, setProjectForms] = useState([
    {
      key: 0,
      diagramCheckboxChecked: true,
      numberOfMachines: "",
      selectedOptions: [],
      numberOfEmails: 0,
      projectName: "",
      emails: [],
    },
  ]);


  

  // Function to handle changes in the project name input
  const handleProjectNameChange = (formKey, projectName) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey ? { ...form, projectName } : form
      )
    );
  };

  // Event handler for "New Project" button
  const handleNewProjectClick = () => {
    setProjectForms((prevForms) => [
      ...prevForms,
      {
        key: prevForms.length,
        diagramCheckboxChecked: true,
        numberOfMachines: "",
        selectedOptions: [],
        numberOfEmails: 0,
        projectName: "",
        emails: [],
      },
    ]);
  };

  // Event handler for checkbox click
  const handleCheckboxClick = (formKey) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey
          ? { ...form, diagramCheckboxChecked: !form.diagramCheckboxChecked }
          : form
      )
    );
  };

  const handleNumberOfMachinesChange = (formKey, value) => {
    // Handle the change, e.g., update the state or perform any necessary logic
    // ...

    // Now update the corresponding project form
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey ? { ...form, numberOfMachines: value } : form
      )
    );
  };

  const handleDeleteProject = (projectKey) => {
    // Filter out the project with the specified key and update the state
    setProjectForms((prevForms) =>
      prevForms.filter((project) => project.key !== projectKey)
    );
  };

  const handleSelectedOptionsChange = (formKey, selectedOptions) => {
    setProjectForms((prevForms) =>
      prevForms.map((form) =>
        form.key === formKey ? { ...form, selectedOptions } : form
      )
    );
  };

 // Function to handle changes in the number of emails
 const handleNumberOfEmailsChange = (formKey, emails, count) => {
  const updatedForms = projectForms.map((form) =>
    form.key === formKey ? { ...form, numberOfEmails: count, emails } : form
  );
  setProjectForms(updatedForms);
  setProjectEmails(updatedForms.flatMap((form) => form.emails));
};
  // State variable to track whether all forms are completed
  const [allFormsCompleted, setAllFormsCompleted] = useState(false);

  useEffect(() => {
    // Check if all forms are completed
    const isAllFormsCompleted = projectForms.every((form) => {
      return (
        form.numberOfMachines !== "" &&
        form.selectedOptions.length > 0 &&
        form.numberOfEmails > 0 &&
        form.projectName.trim() !== ""
        // Add more conditions if needed
      );
    });

    setAllFormsCompleted(isAllFormsCompleted);
  }, [projectForms]);

  const navigate = useNavigate();
  const handleContinueToSummaryClick = () => {
    // Navigate to the summary page when the button is clicked
    navigate("/summary", { state: { projectForms } });
  };

  // ProjectName.jsx



  // JSX structure for the project page
  return (
    <section className="project-name-section">
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
         

          {projectForms.map((form) => (
            <form key={form.key}>
              <ProjectForm
                formKey={form.key}
                diagramCheckboxChecked={form.diagramCheckboxChecked}
                handleCheckboxClick={handleCheckboxClick}
                numberOfMachines={form.numberOfMachines}
               onNumberOfMachinesChange={handleNumberOfMachinesChange}
                onDeleteProject={handleDeleteProject}
                onSelectedOptionsChange={handleSelectedOptionsChange}
                onNumberOfEmailsChange={handleNumberOfEmailsChange}
                projectName={form.projectName}
                onProjectNameChange={handleProjectNameChange}
                isHelpCheckboxChecked={isHelpCheckboxChecked}
                onHelpCheckboxChange={handleHelpCheckboxChange}
               
               
              />
            </form>
          ))}
          <button className="new-project" onClick={handleNewProjectClick}>
            <FaPlus className="icon" />
            <span>New Project</span>
          </button>
          <div className="summary-container">
            <h3>Summary</h3>
            <div className="trial">
              <h3>Free 30-day trial</h3>
              <p>No credit card required.</p>
            </div>
          </div>
          <div className="continue-btn-container">
            <button
              disabled={!allFormsCompleted}
              onClick={handleContinueToSummaryClick}
            >
              Continue to Summary
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </section>
  );
};

// Exporting the component as the default export
export default ProjectName;
