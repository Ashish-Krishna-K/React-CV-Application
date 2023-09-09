import { EditingProps } from "../types/appTypes";

function NameInput({
  fullName,
  handleFullNameChange,
}: Pick<EditingProps, "fullName" | "handleFullNameChange">) {
  return (
    <>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        value={fullName}
        placeholder="First and Last name"
        onChange={handleFullNameChange}
      />
    </>
  );
}

function EmailInput({
  email,
  handleEmailChange,
}: Pick<EditingProps, "email" | "handleEmailChange">) {
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={handleEmailChange}
      />
    </>
  );
}

function PhoneInput({
  phoneNumber,
  handlePhoneNumberChange,
}: Pick<EditingProps, "phoneNumber" | "handlePhoneNumberChange">) {
  return (
    <>
      <label htmlFor="phone">Phone number</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={phoneNumber}
        placeholder="Enter Phone number"
        onChange={handlePhoneNumberChange}
      />
    </>
  );
}

function AddressInput({
  address,
  handleAddressChange,
}: Pick<EditingProps, "address" | "handleAddressChange">) {
  return (
    <>
      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        type="text"
        value={address}
        placeholder="City, Country"
        onChange={handleAddressChange}
      />
    </>
  );
}

function PersonalDetailsForm({
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  phoneNumber,
  handlePhoneNumberChange,
  address,
  handleAddressChange,
}: Pick<
  EditingProps,
  | "fullName"
  | "handleFullNameChange"
  | "email"
  | "handleEmailChange"
  | "phoneNumber"
  | "handlePhoneNumberChange"
  | "address"
  | "handleAddressChange"
>) {
  return (
    <form action="#">
      <NameInput
        fullName={fullName}
        handleFullNameChange={handleFullNameChange}
      />
      <EmailInput email={email} handleEmailChange={handleEmailChange} />
      <PhoneInput
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <AddressInput
        address={address}
        handleAddressChange={handleAddressChange}
      />
    </form>
  );
}

export default function GeneralInformationForm({
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  phoneNumber,
  handlePhoneNumberChange,
  address,
  handleAddressChange,
}: Pick<
  EditingProps,
  | "fullName"
  | "handleFullNameChange"
  | "email"
  | "handleEmailChange"
  | "phoneNumber"
  | "handlePhoneNumberChange"
  | "address"
  | "handleAddressChange"
>) {
  return (
    <section className="personal-detail">
      <h2>Personal Details</h2>
      <PersonalDetailsForm
        fullName={fullName}
        handleFullNameChange={handleFullNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
        address={address}
        handleAddressChange={handleAddressChange}
      />
    </section>
  );
}
