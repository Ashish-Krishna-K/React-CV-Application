import { PreviewProps } from "../types/appTypes";

export default function ExperienceInformationPreview({
  experienceItems,
  companyName,
  jobTitle,
  jobStartDate,
  jobEndDate,
  jobLocation,
  jobDescription,
}: Pick<
  PreviewProps,
  | "experienceItems"
  | "companyName"
  | "jobTitle"
  | "jobStartDate"
  | "jobEndDate"
  | "jobLocation"
  | "jobDescription"
>) {
  const renderDates = jobStartDate !== "" && jobEndDate !== "";
  return (
    <>
      <ul>
        {experienceItems.map((item) => (
          <li key={item.uid}>
            <p>{item.companyName}</p>
            <p>{item.jobTitle}</p>
            <p>{item.description}</p>
            <p>
              {item.startDate} - {item.endDate}
            </p>
            <p>{item.location}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>{companyName}</p>
        <p>{jobTitle}</p>
        <p>{jobDescription}</p>
        {renderDates && (
          <p>
            {jobStartDate} - {jobEndDate}
          </p>
        )}
        <p>{jobLocation}</p>
      </div>
    </>
  );
}
