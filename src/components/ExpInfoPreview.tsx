import { type PreviewProps } from '../types/appTypes';
import '../styles/ExpInfoPreview.css';

const formatDate = (rawDate: string): string => {
  const date = new Date(rawDate);
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.toLocaleString('default', { year: 'numeric' });
  return `${month}, ${year}`;
};

export default function ExperienceInformationPreview({
  experienceItems,
}: Pick<PreviewProps, 'experienceItems'>) {
  formatDate(experienceItems[0]?.startDate);
  return (
    <div className="preview-experience-details">
      <h2>Professional Experience</h2>
      <ul>
        {experienceItems.map((item) => (
          <li key={item.uid} className="experience-item">
            <div className="left-side">
              <p>
                <h3>{item.jobTitle}</h3>
                <em>
                  <span>{item.companyName}</span>
                </em>
              </p>

              <p>{item.description}</p>
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
