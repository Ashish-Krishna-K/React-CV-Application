import { ChangeEvent, SyntheticEvent, useState } from 'react';
import {
  EditingProps,
  ExperienceItem,
  ExperienceProps,
} from '../types/appTypes';

function ExperienceForm({
  handleExperienceItemAddition,
  handleCancelBtnClick,
  item,
}: ExperienceProps) {
  const [expItem, setExpItem] = useState<ExperienceItem>({
    uid: crypto.randomUUID(),
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleExperienceItemAddition(expItem);
    setExpItem({
      uid: crypto.randomUUID(),
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  };
  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={expItem.companyName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setExpItem({ ...expItem, companyName: ev.target.value })
          }
          placeholder="Enter Company Name"
        />
      </div>

      <div>
        <label htmlFor="jobTitle">Position Title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={expItem.jobTitle}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setExpItem({ ...expItem, jobTitle: ev.target.value })
          }
          placeholder="Enter Position Title"
        />
      </div>

      <div>
        <label htmlFor="jobStartDate">Start Date</label>
        <input
          type="date"
          id="jobStartDate"
          name="jobStartDate"
          value={expItem.startDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setExpItem({ ...expItem, startDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobEndDate">End Date</label>
        <input
          type="date"
          id="jobEndDate"
          name="jobEndDate"
          value={expItem.endDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setExpItem({ ...expItem, endDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobLocation">Location</label>
        <input
          type="text"
          id="jobLocation"
          name="jobLocation"
          placeholder="City, Country"
          value={expItem.location}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setExpItem({ ...expItem, location: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobDescription">Description</label>
        <textarea
          name="jobDescription"
          id="jobDescription"
          placeholder="Enter Description"
          value={expItem.description}
          onChange={(ev: ChangeEvent<HTMLTextAreaElement>) =>
            setExpItem({ ...expItem, description: ev.target.value })
          }
        ></textarea>
      </div>

      <button type="submit">Submit</button>
      <button onClick={handleCancelBtnClick}>Cancel</button>
    </form>
  );
}

export default function ExperienceInformationForm({
  experienceItems,
  handleExperienceItemAddition,
}: Pick<EditingProps, 'experienceItems' | 'handleExperienceItemAddition'>) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFrm, setShowFrm] = useState({
    form: false,
    button: true,
  });
  const handleShowDropDownClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleShowFrmClick = () => {
    setShowFrm({
      form: !showFrm.form,
      button: !showFrm.button,
    });
  };
  return (
    <section className="experience-detail">
      <h2 onClick={handleShowDropDownClick}>Experience Details</h2>
      {showDropDown && (
        <div>
          <ul className="experience-items">
            {experienceItems.map((item) => (
              <li key={item.uid}>{item.companyName}</li>
            ))}
          </ul>
          {showFrm.button && (
            <button onClick={handleShowFrmClick}>Add Experience</button>
          )}
        </div>
      )}
      {showFrm.form && (
        <ExperienceForm
          handleExperienceItemAddition={handleExperienceItemAddition}
          handleCancelBtnClick={handleShowFrmClick}
        />
      )}
    </section>
  );
}
