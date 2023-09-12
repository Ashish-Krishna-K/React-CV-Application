import { PreviewProps } from '../types/appTypes';

export default function EducationInformationPreview({
  educationItems,
  schoolName,
  degreeName,
  eduStartDate,
  eduEndDate,
  eduLocation,
}: Pick<
  PreviewProps,
  | 'educationItems'
  | 'schoolName'
  | 'degreeName'
  | 'eduStartDate'
  | 'eduEndDate'
  | 'eduLocation'
>) {
  const renderDates = eduStartDate !== '' && eduEndDate !== '';
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
      <div>
        <p>{schoolName}</p>
        <p>{degreeName}</p>
        {renderDates && (
          <p>
            {eduStartDate} - {eduEndDate}
          </p>
        )}
        <p>{eduLocation}</p>
      </div>
    </>
  );
}
