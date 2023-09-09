import { SyntheticEvent } from "react";
import { EditingProps, EducationItem } from "../types/appTypes";

function SchoolNameInput({
  schoolName,
  handleSchoolNameChange,
}: Pick<EditingProps, "schoolName" | "handleSchoolNameChange">) {
  return (
    <>
      <label htmlFor="schoolName">School</label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={schoolName}
        placeholder="Enter School/University"
        onChange={handleSchoolNameChange}
      />
    </>
  );
}

function DegreeNameInput({
  degreeName,
  handleDegreeNameChange,
}: Pick<EditingProps, "degreeName" | "handleDegreeNameChange">) {
  return (
    <>
      <label htmlFor="degreeName">Degree</label>
      <input
        type="text"
        id="degreeName"
        name="degreeName"
        value={degreeName}
        placeholder="Enter Degree/Field of Study"
        onChange={handleDegreeNameChange}
      />
    </>
  );
}

function EducationStartDateInput({
  eduStartDate,
  handleEduStartDateChange,
}: Pick<EditingProps, "eduStartDate" | "handleEduStartDateChange">) {
  return (
    <>
      <label htmlFor="eduStartDate">Start Date</label>
      <input
        type="date"
        id="eduStartDate"
        name="eduStartDate"
        value={eduStartDate}
        onChange={handleEduStartDateChange}
      />
    </>
  );
}

function EducationEndDateInput({
  eduEndDate,
  handleEduEndDateChange,
}: Pick<EditingProps, "eduEndDate" | "handleEduEndDateChange">) {
  return (
    <>
      <label htmlFor="eduEndDate">End Date</label>
      <input
        type="date"
        id="eduEndDate"
        name="eduEndDate"
        value={eduEndDate}
        onChange={handleEduEndDateChange}
      />
    </>
  );
}

function EducationLocationInput({
  eduLocation,
  handleLocationChange,
}: Pick<EditingProps, "eduLocation" | "handleLocationChange">) {
  return (
    <>
      <label htmlFor="eduLocation">Location</label>
      <input
        type="text"
        id="eduLocation"
        name="eduLocation"
        placeholder="City, Country"
        value={eduLocation}
        onChange={handleLocationChange}
      />
    </>
  );
}

function EducationForm({
  handleEducationItemAddition,
  schoolName,
  handleSchoolNameChange,
  degreeName,
  handleDegreeNameChange,
  eduStartDate,
  handleEduStartDateChange,
  eduEndDate,
  handleEduEndDateChange,
  eduLocation,
  handleLocationChange,
}: Pick<
  EditingProps,
  | "handleEducationItemAddition"
  | "schoolName"
  | "handleSchoolNameChange"
  | "degreeName"
  | "handleDegreeNameChange"
  | "eduStartDate"
  | "handleEduStartDateChange"
  | "eduEndDate"
  | "handleEduEndDateChange"
  | "eduLocation"
  | "handleLocationChange"
>) {
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const frmData = new FormData(ev.target as HTMLFormElement);
    const newEduItem: EducationItem = {
      schoolName: frmData.get("schoolName")?.toString() || '',
      degreeName: frmData.get("degreeName")?.toString() || '',
      startDate: frmData.get("eduStartDate")?.toString() || '',
      endDate: frmData.get("eduEndDate")?.toString() || '',
      location: frmData.get("eduLocation")?.toString() || ''
    }
    handleEducationItemAddition(newEduItem);
  }
  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <SchoolNameInput schoolName={schoolName} handleSchoolNameChange={handleSchoolNameChange} />
      <DegreeNameInput degreeName={degreeName} handleDegreeNameChange={handleDegreeNameChange} />
      <EducationStartDateInput eduStartDate={eduStartDate} handleEduStartDateChange={handleEduStartDateChange} />
      <EducationEndDateInput eduEndDate={eduEndDate} handleEduEndDateChange={handleEduEndDateChange}/>
      <EducationLocationInput eduLocation={eduLocation} handleLocationChange={handleLocationChange}/>
      <button type="reset">Clear</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default function EducationInformationForm({
  handleEducationItemAddition,
  schoolName,
  handleSchoolNameChange,
  degreeName,
  handleDegreeNameChange,
  eduStartDate,
  handleEduStartDateChange,
  eduEndDate,
  handleEduEndDateChange,
  eduLocation,
  handleLocationChange,
}: Pick<
  EditingProps,
  | "handleEducationItemAddition"
  | "schoolName"
  | "handleSchoolNameChange"
  | "degreeName"
  | "handleDegreeNameChange"
  | "eduStartDate"
  | "handleEduStartDateChange"
  | "eduEndDate"
  | "handleEduEndDateChange"
  | "eduLocation"
  | "handleLocationChange"
>) {
  return (
    <section className="education-detail">
      <h2>Education Details</h2>
      <EducationForm 
        handleEducationItemAddition={handleEducationItemAddition}
        schoolName={schoolName}
        handleSchoolNameChange={handleSchoolNameChange}
        degreeName={degreeName}
        handleDegreeNameChange={handleDegreeNameChange}
        eduStartDate={eduStartDate}
        handleEduStartDateChange={handleEduStartDateChange}
        eduEndDate={eduEndDate}
        handleEduEndDateChange={handleEduEndDateChange}
        eduLocation={eduLocation}
        handleLocationChange={handleLocationChange}
      />
    </section>
  );
}
