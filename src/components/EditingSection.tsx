import { EditingProps } from "../types/appTypes";
import EducationInformationForm from "./EduInfoFrm";
import ExperienceInformationForm from "./ExpInfoFrm";
import GeneralInformationForm from "./GenInfoFrm";

export default function EditingSection({
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  phoneNumber,
  handlePhoneNumberChange,
  address,
  handleAddressChange,
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
  experienceItems,
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
  handleJobDescriptionChange,
}: EditingProps) {
  return (
    <>
      <GeneralInformationForm
        fullName={fullName}
        handleFullNameChange={handleFullNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        address={address}
        handleAddressChange={handleAddressChange}
      />
      <EducationInformationForm 
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
      <ExperienceInformationForm 
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
    </>
  );
}
