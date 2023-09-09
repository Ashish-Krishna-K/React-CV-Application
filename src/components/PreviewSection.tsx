import { PreviewProps } from "../types/appTypes";
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
    </section>
  );
}
