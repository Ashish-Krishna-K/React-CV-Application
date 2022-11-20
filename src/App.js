import React, { useState } from "react";
import uniqid from "uniqid";
import General from "./components/General-Information";
import Experience from "./components/Experience";
import Education from "./components/Education";

import './styles/App.css'

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState({
    job: '',
    company: '',
    yearsWorked: '',
    id: uniqid(),
  });
  const [education, setEducation] = useState({
    degree: '',
    school: '',
    graduationYear: '',
    id: uniqid(),
  });
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);

  const handleNameInput = (e) => setName(e.target.value);

  const handleEmailInput = (e) => setEmail(e.target.value);

  const handlePhoneInput = (e) => setPhone(e.target.value);

  const handleJobInput = (e) => {
    setExperience({
      job: e.target.value,
      company: experience.company,
      yearsWorked: experience.yearsWorked,
      id: experience.id,
    });
  };

  const handleCompanyInput = (e) => {
    setExperience({
      job: experience.job,
      company: e.target.value,
      yearsWorked: experience.yearsWorked,
      id: experience.id,
    });
  };

  const handleYearsInput = (e) => {
    setExperience({
      job: experience.job,
      company: experience.company,
      yearsWorked: e.target.value,
      id: experience.id,
    });
  };

  const handleDegreeInput = (e) => {
    setEducation({
      degree: e.target.value,
      school: education.school,
      graduationYear: education.graduationYear,
      id: education.id,
    })
  }

  const handleSchoolInput = (e) => {
    setEducation({
      degree: education.degree,
      school: e.target.value,
      graduationYear: education.graduationYear,
      id: education.id,
    })
  }

  const handleGraduationInput = (e) => {
    setEducation({
      degree: education.degree,
      school: education.school,
      graduationYear: e.target.value,
      id: education.id,
    })
  }

  const handleAddExp = () => {
    setExperiences(experiences.concat(experience));
    setExperience({
      job: '',
      company: '',
      yearsWorked: '',
      id: uniqid(),
    })
  }

  const handleAddEdu = () => {
    setEducations(educations.concat(education));
    setEducation({
      degree: '',
      school: '',
      graduationYear: '',
      id: uniqid(),
    })
  }

  const deleteExp = (e) => {
    setExperiences(experiences.filter(item => item.id !== e.target.getAttribute("data-id")))
  }

  const deleteEdu = (e) => {
    setEducations(educations.filter(item => item.id !== e.target.getAttribute("data-id")))
  }

  return (
    <div className="App">
        <div id="form-section">
        <form>
        <fieldset>
          <legend>General Information</legend>
          <label htmlFor="user-name">Name:</label>
          <input 
          onChange={handleNameInput}
          value = {name}
          type="text" 
          id="user-name"
          />
          <label htmlFor="user-email">Email:</label>
          <input 
          onChange={handleEmailInput}
          value = {email}
          type="email" 
          id="user-email"
          />
          <label htmlFor="user-phone">Phone number:</label>
          <input 
          onChange={handlePhoneInput}
          value = {phone}
          type="text" 
          id="user-phone"
          />
        </fieldset>
        <fieldset>
          <legend>Professional Experience</legend>
          <label htmlFor="job-title">Job Title:</label>
          <input 
          onChange={handleJobInput}
          value={experience.job}
          type="text" 
          id="job-title"
          />
          <label htmlFor="company-name">Company Name:</label>
          <input 
          onChange={handleCompanyInput}
          value={experience.company}
          type="text" 
          id="company-name"
          />
          <label htmlFor="years-worked">Years worked:</label>
          <input 
          onChange={handleYearsInput}
          value={experience.yearsWorked}
          type="text" 
          id="years-worked"
          />
          <button type="button" onClick={handleAddExp}>Add</button>
        </fieldset>
        <fieldset>
          <legend>Education</legend>
          <label htmlFor="degree-name">Name:</label>
          <input 
          onChange={handleDegreeInput}
          value={education.degree}
          type="text" 
          id="degree-name"
          />
          <label htmlFor="school-name">School Name:</label>
          <input 
          onChange={handleSchoolInput}
          value={education.school}
          type="text" 
          id="school-name"
          />
          <label htmlFor="grad-year">Graduation Year:</label>
          <input 
          onChange={handleGraduationInput}
          value={education.graduationYear}
          type="text" 
          id="grad-year"
          />
          <button type="button" onClick={handleAddEdu}>Add</button>
        </fieldset>
        </form>
        </div>
        <div id="display-section">
          <General name={name} phone={phone} email={email} />
          <Experience experiences={experiences} deleteExp={deleteExp}/>
          <Education educations={educations} deleteEdu={deleteEdu}/>
        </div>
    </div>
  )
}


export default App