import { ChangeEvent, SyntheticEvent, useState } from 'react';
import {
  EditingProps,
  ExperienceItem,
  ExperienceProps,
} from '../types/appTypes';

function ExperienceForm({
  item,
  handleEditCurrentItem,
  handleNewItemCreation,
  handleCancelBtnClick,
}: ExperienceProps) {
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleNewItemCreation();
  };
  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={item.companyName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, companyName: ev.target.value })
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
          value={item.jobTitle}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, jobTitle: ev.target.value })
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
          value={item.startDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, startDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobEndDate">End Date</label>
        <input
          type="date"
          id="jobEndDate"
          name="jobEndDate"
          value={item.endDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, endDate: ev.target.value })
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
          value={item.location}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, location: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobDescription">Description</label>
        <textarea
          name="jobDescription"
          id="jobDescription"
          placeholder="Enter Description"
          value={item.description}
          onChange={(ev: ChangeEvent<HTMLTextAreaElement>) =>
            handleEditCurrentItem({ ...item, description: ev.target.value })
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
  const [showFrm, setShowFrm] = useState(false);
  const [expItem, setExpItem] = useState<ExperienceItem>({
    uid: crypto.randomUUID(),
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  const handleShowDropDownClick = () => setShowDropDown(!showDropDown);
  const handleShowFrmClick = () => setShowFrm(!showFrm);
  const handleEditCurrentItem = (currentItem: ExperienceItem) => {
    setExpItem(currentItem);
  };
  const handleNewItemCreation = () => {
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
    handleShowFrmClick();
  };
  const handleEditItemClick = (item: ExperienceItem) => {
    setExpItem(item);
    handleShowFrmClick();
  };

  return (
    <section className="experience-detail">
      <h2 onClick={handleShowDropDownClick}>Experience Details</h2>
      {showDropDown && (
        <div>
          <ul className="experience-items">
            {experienceItems.map((item) => (
              <li key={item.uid} onClick={() => handleEditItemClick(item)}>
                {item.companyName}
              </li>
            ))}
          </ul>
          {!showFrm && (
            <button onClick={handleShowFrmClick}>Add Experience</button>
          )}
          {showFrm && (
            <ExperienceForm
              item={expItem}
              handleEditCurrentItem={handleEditCurrentItem}
              handleNewItemCreation={handleNewItemCreation}
              handleCancelBtnClick={handleShowFrmClick}
            />
          )}
        </div>
      )}
    </section>
  );
}
