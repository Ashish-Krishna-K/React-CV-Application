import { ChangeEvent } from 'react';
import { EditingProps } from '../types/appTypes';

export default function GeneralInformationForm({
  generalInfo,
  handleGeneralInfoChange,
}: Pick<EditingProps, 'generalInfo' | 'handleGeneralInfoChange'>) {
  return (
    <section className="personal-detail">
      <h2>Personal Details</h2>
      <form action="#">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={generalInfo.fullName}
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              handleGeneralInfoChange({
                ...generalInfo,
                fullName: ev.target.value,
              })
            }
            placeholder="First and Last name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={generalInfo.email}
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              handleGeneralInfoChange({
                ...generalInfo,
                email: ev.target.value,
              })
            }
            placeholder="Enter email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={generalInfo.phoneNumber}
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              handleGeneralInfoChange({
                ...generalInfo,
                phoneNumber: ev.target.value,
              })
            }
            placeholder="Enter Phone number"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            value={generalInfo.address}
            onChange={(ev: ChangeEvent<HTMLInputElement>) =>
              handleGeneralInfoChange({
                ...generalInfo,
                address: ev.target.value,
              })
            }
            placeholder="City, Country"
          />
        </div>
      </form>
    </section>
  );
}
