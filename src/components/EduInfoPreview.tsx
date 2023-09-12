import { PreviewProps } from '../types/appTypes';

export default function EducationInformationPreview({
  educationItems,
}: Pick<PreviewProps, 'educationItems'>) {
  return (
    <>
      <ul>
        {educationItems.map((item) => (
          <li key={item.uid}>
            <p>{item.schoolName}</p>
            <p>{item.degreeName}</p>
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
