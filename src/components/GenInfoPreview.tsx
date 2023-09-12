import { PreviewProps } from '../types/appTypes';

export default function GeneralInformationPreview({
  generalInfo,
}: Pick<PreviewProps, 'generalInfo'>) {
  const { fullName, email, phoneNumber, address } = generalInfo;
  return (
    <div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{phoneNumber}</div>
      <div>{address}</div>
    </div>
  );
}
