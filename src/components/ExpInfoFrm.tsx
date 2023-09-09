import { SyntheticEvent } from "react";
import { EditingProps, ExperienceItem } from "../types/appTypes";

function CompanyNameInput({
  companyName,
  handleCompanyNameChange,
}: Pick<EditingProps, "companyName" | "handleCompanyNameChange">) {
  return (
    <>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={companyName}
        placeholder="Enter Company Name"
        onChange={handleCompanyNameChange}
      />
    </>
  );
}

function JobTitleInput({
  jobTitle,
  handleJobTitleChange,
}: Pick<EditingProps, "jobTitle" | "handleJobTitleChange">) {
  return (
    <>
      <label htmlFor="jobTitle">Position Title</label>
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        value={jobTitle}
        placeholder="Enter Position Title"
        onChange={handleJobTitleChange}
      />
    </>
  );
}

function JobStartDateInput({
  jobStartDate,
  handleJobStartDateChange,
}: Pick<EditingProps, "jobStartDate" | "handleJobStartDateChange">) {
  return (
    <>
      <label htmlFor="jobStartDate">Start Date</label>
      <input
        type="date"
        id="jobStartDate"
        name="jobStartDate"
        value={jobStartDate}
        onChange={handleJobStartDateChange}
      />
    </>
  );
}

function JobEndDateInput({
  jobEndDate,
  handleJobEndDateChange,
}: Pick<EditingProps, "jobEndDate" | "handleJobEndDateChange">) {
  return (
    <>
      <label htmlFor="jobEndDate">End Date</label>
      <input
        type="date"
        id="jobEndDate"
        name="jobEndDate"
        value={jobEndDate}
        onChange={handleJobEndDateChange}
      />
    </>
  );
}

function JobLocationInput({
  jobLocation,
  handleJobLocationChange,
}: Pick<EditingProps, "jobLocation" | "handleJobLocationChange">) {
  return (
    <>
      <label htmlFor="jobLocation">Location</label>
      <input
        type="text"
        id="jobLocation"
        name="jobLocation"
        placeholder="City, Country"
        value={jobLocation}
        onChange={handleJobLocationChange}
      />
    </>
  );
}

function JobDescriptionInput({
  jobDescription,
  handleJobDescriptionChange,
}: Pick<EditingProps, "jobDescription" | "handleJobDescriptionChange">) {
  return (
    <>
      <label htmlFor="jobDescription">Description</label>
      <textarea 
        name="jobDescription" 
        id="jobDescription"
        placeholder="Enter Description"
        value={jobDescription}
        onChange={handleJobDescriptionChange}
      >
      </textarea>
    </>
  );
}

function ExperienceForm({
  handleExperienceItemAddition,
  companyName,
  handleCompanyNameChange,
  jobTitle,
  handleJobTitleChange,
  jobStartDate,
  handleJobStartDateChange,
  jobEndDate,
  handleJobEndDateChange,
  jobLocation,
  handleJobLocationChange,
  jobDescription,
  handleJobDescriptionChange
}: Pick<
  EditingProps,
  "handleExperienceItemAddition"
  | "companyName"
  | "handleCompanyNameChange"
  | "jobTitle"
  | "handleJobTitleChange"
  | "jobStartDate"
  | "handleJobStartDateChange"
  | "jobEndDate"
  | "handleJobEndDateChange"
  | "jobLocation"
  | "handleJobLocationChange"
  | "jobDescription"
  | "handleJobDescriptionChange"
>) {
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const frmData = new FormData(ev.target as HTMLFormElement);
    const newExpItem: ExperienceItem = {
      companyName: frmData.get("companyName")?.toString() || '',
      jobTitle: frmData.get("jobTitle")?.toString() || '',
      startDate: frmData.get("jobStartDate")?.toString() || '',
      endDate: frmData.get("jobEndDate")?.toString() || '',
      location: frmData.get("jobLocation")?.toString() || '',
      description: frmData.get("jobDescription")?.toString() || ''
    }
    handleExperienceItemAddition(newExpItem);
  }
  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <CompanyNameInput companyName={companyName} handleCompanyNameChange={handleCompanyNameChange} />
      <JobTitleInput jobTitle={jobTitle} handleJobTitleChange={handleJobTitleChange} />
      <JobStartDateInput jobStartDate={jobStartDate} handleJobStartDateChange={handleJobStartDateChange} />
      <JobEndDateInput jobEndDate={jobEndDate} handleJobEndDateChange={handleJobEndDateChange}/>
      <JobLocationInput jobLocation={jobLocation} handleJobLocationChange={handleJobLocationChange}/>
      <JobDescriptionInput jobDescription={jobDescription} handleJobDescriptionChange={handleJobDescriptionChange}/>
      <button type="reset">Clear</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default function ExperienceInformationForm({
  handleExperienceItemAddition,
  companyName,
  handleCompanyNameChange,
  jobTitle,
  handleJobTitleChange,
  jobStartDate,
  handleJobStartDateChange,
  jobEndDate,
  handleJobEndDateChange,
  jobLocation,
  handleJobLocationChange,
  jobDescription,
  handleJobDescriptionChange
}: Pick<
  EditingProps,
  "handleExperienceItemAddition"
  | "companyName"
  | "handleCompanyNameChange"
  | "jobTitle"
  | "handleJobTitleChange"
  | "jobStartDate"
  | "handleJobStartDateChange"
  | "jobEndDate"
  | "handleJobEndDateChange"
  | "jobLocation"
  | "handleJobLocationChange"
  | "jobDescription"
  | "handleJobDescriptionChange"
>) {
  return (
    <section className="experience-detail">
      <h2>Experience Details</h2>
      <ExperienceForm 
        handleExperienceItemAddition={handleExperienceItemAddition}
        companyName={companyName}
        handleCompanyNameChange={handleCompanyNameChange}
        jobTitle={jobTitle}
        handleJobTitleChange={handleJobTitleChange}
        jobStartDate={jobStartDate}
        handleJobStartDateChange={handleJobStartDateChange}
        jobEndDate={jobEndDate}
        handleJobEndDateChange={handleJobEndDateChange}
        jobLocation={jobLocation}
        handleJobLocationChange={handleJobLocationChange}
        jobDescription={jobDescription}
        handleJobDescriptionChange={handleJobDescriptionChange}
      />
    </section>
  );
}
