import { ChangeEvent } from 'react';
import { type EditingProps } from '../types/appTypes';
import '../styles/GenInfoFrm.css';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

export default function GeneralInformationForm({
  generalInfo,
  handleGeneralInfoChange,
}: Pick<EditingProps, 'generalInfo' | 'handleGeneralInfoChange'>) {
  return (
    <div className="personal-detail">
      <div className="section-heading">
        <Icon path={mdiAccount} size={1.5} />
        <h2>Personal Details</h2>
      </div>
      <form action="#">
        <div>
          <label htmlFor="fullName">
            Full Name <em>*required</em>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
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
          <label htmlFor="email">
            Email <em>*required</em>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
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
          <label htmlFor="phone">
            Phone number <em>*required</em>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
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
          <label htmlFor="address">
            Address <em>*required</em>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
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
    </div>
  );
}
