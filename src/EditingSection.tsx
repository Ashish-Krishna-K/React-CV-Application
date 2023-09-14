import { type EditingProps } from './types/appTypes';
import EducationInformationForm from './components/EduInfoFrm';
import ExperienceInformationForm from './components/ExpInfoFrm';
import GeneralInformationForm from './components/GenInfoFrm';
import './styles/EditingSection.css';

export default function EditingSection({
  generalInfo,
  handleGeneralInfoChange,
  educationItems,
  handleEducationItemAddition,
  handleEducationItemDeletion,
  experienceItems,
  handleExperienceItemAddition,
  handleExperienceItemDeletion,
}: EditingProps) {
  return (
    <section className="editing-section">
      <GeneralInformationForm
        generalInfo={generalInfo}
        handleGeneralInfoChange={handleGeneralInfoChange}
      />
      <EducationInformationForm
        educationItems={educationItems}
        handleEducationItemAddition={handleEducationItemAddition}
        handleEducationItemDeletion={handleEducationItemDeletion}
      />
      <ExperienceInformationForm
        experienceItems={experienceItems}
        handleExperienceItemAddition={handleExperienceItemAddition}
        handleExperienceItemDeletion={handleExperienceItemDeletion}
      />
    </section>
  );
}
