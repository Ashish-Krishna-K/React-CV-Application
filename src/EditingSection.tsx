import { EditingProps } from './types/appTypes';
import EducationInformationForm from './components/EduInfoFrm';
import ExperienceInformationForm from './components/ExpInfoFrm';
import GeneralInformationForm from './components/GenInfoFrm';

export default function EditingSection({
  generalInfo,
  handleGeneralInfoChange,
  educationItems,
  handleEducationItemAddition,
  experienceItems,
  handleExperienceItemAddition,
}: EditingProps) {
  return (
    <>
      <GeneralInformationForm
        generalInfo={generalInfo}
        handleGeneralInfoChange={handleGeneralInfoChange}
      />
      <EducationInformationForm
        educationItems={educationItems}
        handleEducationItemAddition={handleEducationItemAddition}
      />
      <ExperienceInformationForm
        experienceItems={experienceItems}
        handleExperienceItemAddition={handleExperienceItemAddition}
      />
    </>
  );
}
