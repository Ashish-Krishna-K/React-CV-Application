import { PreviewProps } from "../types/appTypes";

export default function GeneralInformationPreview({
  fullName,
  email,
  phoneNumber,
  address,
}: Pick<PreviewProps, "fullName" | "email" | "phoneNumber" | "address">) {
  return (
    <div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{phoneNumber}</div>
      <div>{address}</div>
    </div>
  );
}
