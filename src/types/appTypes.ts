import { ChangeEvent } from "react";

export interface EducationItem {
  schoolName: string;
  degreeName: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface ExperienceItem {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface EditingProps {
  fullName: string;
  handleFullNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  phoneNumber: string;
  handlePhoneNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  address: string;
  handleAddressChange: (event: ChangeEvent<HTMLInputElement>) => void;
  educationItems: EducationItem[];
  handleEducationItemAddition: (item: EducationItem) => void;
  schoolName: string;
  handleSchoolNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  degreeName: string;
  handleDegreeNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  eduStartDate: string;
  handleEduStartDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  eduEndDate: string;
  handleEduEndDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  eduLocation: string;
  handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  experienceItems: ExperienceItem[];
  handleExperienceItemAddition: (item: ExperienceItem) => void;
  companyName: string;
  handleCompanyNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  jobTitle: string;
  handleJobTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  jobStartDate: string;
  handleJobStartDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  jobEndDate: string;
  handleJobEndDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  jobLocation: string;
  handleJobLocationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  jobDescription: string;
  handleJobDescriptionChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export type PreviewProps = Pick<
  EditingProps,
  | "fullName"
  | "email"
  | "phoneNumber"
  | "address"
  | "educationItems"
  | "schoolName"
  | "degreeName"
  | "eduStartDate"
  | "eduEndDate"
  | "eduLocation"
  | "experienceItems"
  | "companyName"
  | "jobTitle"
  | "jobStartDate"
  | "jobEndDate"
  | "jobLocation"
  | "jobDescription"
>;
