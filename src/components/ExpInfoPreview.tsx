import { PreviewProps } from '../types/appTypes';

export default function ExperienceInformationPreview({
  experienceItems,
}: Pick<PreviewProps, 'experienceItems'>) {
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
    </>
  );
}
