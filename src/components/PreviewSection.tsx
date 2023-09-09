import { PreviewProps } from "../types/appTypes";
import EducationInformationPreview from "./EduInfoPreview";
import ExperienceInformationPreview from "./ExpInfoPreview";
import GeneralInformationPreview from "./GenInfoPreview";

export default function PreviewSection({
  fullName,
  email,
  phoneNumber,
  address,
  educationItems,
  schoolName,
  degreeName,
  eduStartDate,
  eduEndDate,
  eduLocation,
  experienceItems,
  companyName,
  jobTitle,
  jobStartDate,
  jobEndDate,
  jobLocation,
  jobDescription,
}: PreviewProps) {
  return (
    <section className="preview-section">
      <GeneralInformationPreview
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
      <EducationInformationPreview
        educationItems={educationItems}
        schoolName={schoolName}
        degreeName={degreeName}
        eduStartDate={eduStartDate}
        eduEndDate={eduEndDate}
        eduLocation={eduLocation}
      />
      <ExperienceInformationPreview
        experienceItems={experienceItems}
        companyName={companyName}
        jobTitle={jobTitle}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
        jobLocation={jobLocation}
        jobDescription={jobDescription}
      />
    </section>
  );
}
