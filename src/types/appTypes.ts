export interface GeneralInfoItem {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface EducationItem {
  uid: string;
  schoolName: string;
  degreeName: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface ExperienceItem {
  uid: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface EditingProps {
  generalInfo: GeneralInfoItem;
  handleGeneralInfoChange: (item: GeneralInfoItem) => void;
  educationItems: EducationItem[];
  handleEducationItemAddition: (item: EducationItem) => void;
  experienceItems: ExperienceItem[];
  handleExperienceItemAddition: (item: ExperienceItem) => void;
}

export interface EducationProps {
  item: EducationItem;
  handleEditCurrentItem: (item: EducationItem) => void;
  handleNewItemCreation: () => void;
  handleCancelBtnClick: () => void;
}

export interface ExperienceProps {
  item: ExperienceItem;
  handleEditCurrentItem: (item: ExperienceItem) => void;
  handleNewItemCreation: () => void;
  handleCancelBtnClick: () => void;
}

export interface PreviewProps {
  generalInfo: GeneralInfoItem;
  educationItems: EducationItem[];
  experienceItems: ExperienceItem[];
}
