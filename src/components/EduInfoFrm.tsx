import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { EditingProps, EducationItem, EducationProps } from '../types/appTypes';

function EducationForm({
  item,
  handleEditCurrentItem,
  handleNewItemCreation,
  handleCancelBtnClick,
}: EducationProps) {
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleNewItemCreation();
  };

  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <div>
        <label htmlFor="schoolName">School</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={item.schoolName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, schoolName: ev.target.value })
          }
          placeholder="Enter School/University"
        />
      </div>

      <div>
        <label htmlFor="degreeName">Degree</label>
        <input
          type="text"
          id="degreeName"
          name="degreeName"
          value={item.degreeName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, degreeName: ev.target.value })
          }
          placeholder="Enter Degree/Field of Study"
        />
      </div>

      <div>
        <label htmlFor="eduStartDate">Start Date</label>
        <input
          type="date"
          id="eduStartDate"
          name="eduStartDate"
          value={item.startDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, startDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="eduEndDate">End Date</label>
        <input
          type="date"
          id="eduEndDate"
          name="eduEndDate"
          value={item.endDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, endDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="eduLocation">Location</label>
        <input
          type="text"
          id="eduLocation"
          name="eduLocation"
          placeholder="City, Country"
          value={item.location}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, location: ev.target.value })
          }
        />
      </div>

      <button type="submit">Submit</button>
      <button onClick={handleCancelBtnClick}>Cancel</button>
    </form>
  );
}

export default function EducationInformationForm({
  educationItems,
  handleEducationItemAddition,
}: Pick<EditingProps, 'educationItems' | 'handleEducationItemAddition'>) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showFrm, setShowFrm] = useState(false);
  const [eduItem, setEduItem] = useState<EducationItem>({
    uid: crypto.randomUUID(),
    schoolName: '',
    degreeName: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  const handleShowDropDownClick = () => setShowDropDown(!showDropDown);
  const handleShowFrmClick = () => setShowFrm(!showFrm);
  const handleEditCurrentItem = (currentItem: EducationItem) => {
    setEduItem(currentItem);
  };
  const handleNewItemCreation = () => {
    handleEducationItemAddition(eduItem);
    setEduItem({
      uid: crypto.randomUUID(),
      schoolName: '',
      degreeName: '',
      startDate: '',
      endDate: '',
      location: '',
    });
    handleShowFrmClick();
  };
  const handleEditItemClick = (item: EducationItem) => {
    setEduItem(item);
    handleShowFrmClick();
  };
  return (
    <section className="education-detail">
      <h2 onClick={handleShowDropDownClick}>Education Details</h2>
      {showDropDown && (
        <div>
          <ul className="education-items">
            {educationItems.map((item) => (
              <li key={item.uid} onClick={() => handleEditItemClick(item)}>
                {item.schoolName}
              </li>
            ))}
          </ul>
          {!showFrm && (
            <button onClick={handleShowFrmClick}>Add Education</button>
          )}
          {showFrm && (
            <EducationForm
              item={eduItem}
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
