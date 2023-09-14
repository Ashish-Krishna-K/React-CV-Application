import { type PreviewProps } from '../types/appTypes';
import '../styles/GenInfoPreview.css';
import Icon from '@mdi/react';
import { mdiEmail, mdiPhone, mdiMapMarker } from '@mdi/js';

export default function GeneralInformationPreview({
  generalInfo,
}: Pick<PreviewProps, 'generalInfo'>) {
  const { fullName, email, phoneNumber, address } = generalInfo;
  return (
    <div className="preview-personal-details">
      <h2>{fullName}</h2>
      <div className="second-line">
        {email && (
          <p>
            <Icon path={mdiEmail} size={1} />
            {email}
          </p>
        )}
        {phoneNumber && (
          <p>
            <Icon path={mdiPhone} size={1} />
            {phoneNumber}
          </p>
        )}
        {address && (
          <p>
            <Icon path={mdiMapMarker} size={1} />
            {address}
          </p>
        )}
      </div>
    </div>
  );
}
