import { PreviewProps } from './types/appTypes';
import EducationInformationPreview from './components/EduInfoPreview';
import ExperienceInformationPreview from './components/ExpInfoPreview';
import GeneralInformationPreview from './components/GenInfoPreview';

export default function PreviewSection({
  generalInfo,
  educationItems,
  experienceItems,
}: PreviewProps) {
  return (
    <section className="preview-section">
      <GeneralInformationPreview generalInfo={generalInfo} />
      <EducationInformationPreview educationItems={educationItems} />
      <ExperienceInformationPreview experienceItems={experienceItems} />
    </section>
  );
}
