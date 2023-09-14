import { type PreviewProps } from '../types/appTypes';
import '../styles/EduInfoPreview.css';

const formatDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return `${month}, ${year}`;
};

export default function EducationInformationPreview({
  educationItems,
}: Pick<PreviewProps, 'educationItems'>) {
  return (
    <div className="preview-education-details">
      <h2>Education</h2>
      <ul>
        {educationItems.map((item) => (
          <li key={item.uid} className="education-item">
            <div className="left-side">
              <h3>{item.degreeName}</h3>
              <p>
                <em>{item.schoolName}</em>
              </p>
            </div>
            <div className="right-side">
              <p>
                {formatDate(item.startDate)} - {formatDate(item.endDate)}
              </p>
              <p>
                <em>{item.location}</em>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
