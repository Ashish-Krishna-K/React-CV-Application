import { type PreviewProps } from './types/appTypes';
import EducationInformationPreview from './components/EduInfoPreview';
import ExperienceInformationPreview from './components/ExpInfoPreview';
import GeneralInformationPreview from './components/GenInfoPreview';
import './styles/PreviewSection.css';

export default function PreviewSection({
  generalInfo,
  educationItems,
  experienceItems,
}: PreviewProps) {
  return (
    <section className="preview-section">
      <div className="container">
        <GeneralInformationPreview generalInfo={generalInfo} />
        <EducationInformationPreview educationItems={educationItems} />
        <ExperienceInformationPreview experienceItems={experienceItems} />
      </div>
    </section>
  );
}
