import React from "react";
import uniqid from "uniqid";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { General } from "./components/General-Information";

import './styles/App.css'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: {
        general: {
          name: '',
          email: '',
          phone: '',
        },
        experience: {
          title: {
            text: '',
          },
          company: {
            text: '',
          },
          years: {
            text: '',
          },
          id: uniqid(),
        },
        education: {
          title: {
            text: '',
          },
          school: {
            text: '',
          },
          graduation: {
            text: '',
          },
          id: uniqid(),
        },
      },
      experiences: [],
      educations: [],
    }

    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePhoneInput = this.handlePhoneInput.bind(this)
    this.handleJobInput = this.handleJobInput.bind(this)
    this.handleCompanyInput = this.handleCompanyInput.bind(this)
    this.handleYearsInput = this.handleYearsInput.bind(this)
    this.handleDegreeInput = this.handleDegreeInput.bind(this)
    this.handleSchoolInput = this.handleSchoolInput.bind(this)
    this.handleGraduationInput = this.handleGraduationInput.bind(this)
    this.handleAddExp = this.handleAddExp.bind(this)
    this.handleAddEdu = this.handleAddEdu.bind(this)
    this.deleteExp = this.deleteExp.bind(this)
    this.deleteEdu = this.deleteEdu.bind(this)

  }

  handleNameInput = (e) => {
    this.setState({
      input: {
        general: {
          name: e.target.value,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleEmailInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: e.target.value,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }


  handlePhoneInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: e.target.value,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleJobInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: e.target.value,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleCompanyInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: e.target.value,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleYearsInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: e.target.value,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleDegreeInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: e.target.value,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleSchoolInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: e.target.value,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleGraduationInput = (e) => {
    this.setState({
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: e.target.value,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleAddExp = (e) => {
    this.setState({
      experiences: this.state.experiences.concat(this.state.input.experience),
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: '',
          },
          company: {
            text: '',
          },
          years: {
            text: '',
          },
          id: uniqid(),
        },
        education: {
          title: {
            text: this.state.input.education.title.text,
          },
          school: {
            text: this.state.input.education.school.text,
          },
          graduation: {
            text: this.state.input.education.graduation.text,
          },
          id: this.state.input.education.id,
        },
      },
    })
  }

  handleAddEdu = (e) => {
    this.setState({
      educations: this.state.educations.concat(this.state.input.education),
      input: {
        general: {
          name: this.state.input.general.name,
          email: this.state.input.general.email,
          phone: this.state.input.general.phone,
        },
        experience: {
          title: {
            text: this.state.input.experience.title.text,
          },
          company: {
            text: this.state.input.experience.company.text,
          },
          years: {
            text: this.state.input.experience.years.text,
          },
          id: this.state.input.experience.id,
        },
        education: {
          title: {
            text: '',
          },
          school: {
            text: '',
          },
          graduation: {
            text: '',
          },
          id: uniqid(),
        },
      },
      
    })
  }

  deleteExp = (e) => {
    this.setState({
      experiences: this.state.experiences.filter(item => item.id !== e.target.getAttribute("data-id"))
    })
  }

  deleteEdu = (e) => {
    this.setState({
      educations: this.state.educations.filter(item => item.id !== e.target.getAttribute("data-id"))
    })
  }


  render() {

    const { general, experience, education} = this.state.input;

    return (
      <div className="App">
        <div id="form-section">
          <form>
            <fieldset>
              <legend>General Information</legend>
              <label htmlFor="user-name">Name:</label>
              <input 
              onChange={this.handleNameInput}
              value = {general.name.text}
              type="text" 
              id="user-name"
              />
              <label htmlFor="user-email">Email:</label>
              <input 
              onChange={this.handleEmailInput}
              value = {general.email.text}
              type="email" 
              id="user-email"
              />
              <label htmlFor="user-phone">Phone number:</label>
              <input 
              onChange={this.handlePhoneInput}
              value = {general.phone.text}
              type="text" 
              id="user-phone"
              />
            </fieldset>
            <fieldset>
              <legend>Professional Experience</legend>
                <label htmlFor="job-title">Job Title:</label>
                <input 
                onChange={this.handleJobInput}
                value={experience.title.text}
                type="text" 
                id="job-title"
                />
                <label htmlFor="company-name">Company Name:</label>
                <input 
                onChange={this.handleCompanyInput}
                value={experience.company.text}
                type="text" 
                id="company-name"
                />
                <label htmlFor="years-worked">Years worked:</label>
                <input 
                onChange={this.handleYearsInput}
                value={experience.years.text}
                type="text" 
                id="years-worked"
                />
              <button type="button" onClick={this.handleAddExp}>Add</button>
              </fieldset>
            <fieldset>
              <legend>Education</legend>
                <label htmlFor="degree-name">Name:</label>
                <input 
                onChange={this.handleDegreeInput}
                value={education.title.text}
                type="text" 
                id="degree-name"
                />
                <label htmlFor="school-name">School Name:</label>
                <input 
                onChange={this.handleSchoolInput}
                value={education.school.text}
                type="text" 
                id="school-name"
                />
                <label htmlFor="grad-year">Graduation Year:</label>
                <input 
                onChange={this.handleGraduationInput}
                value={education.graduation.text}
                type="text" 
                id="grad-year"
                />
              <button type="button" onClick={this.handleAddEdu}>Add</button>
              </fieldset>
          </form>
        </div>
        <div id="display-section">
            <General genInfo={general} />
            <Experience experiences={this.state.experiences} deleteMethod={this.deleteExp} />
            <Education educations={this.state.educations} deleteMethod={this.deleteEdu}/>
        </div>
      </div>
    )
  }
}