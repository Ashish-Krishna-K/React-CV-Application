import { ChangeEvent, SyntheticEvent, useState } from 'react';
import {
  type EditingProps,
  type EducationItem,
  type EducationProps,
} from '../types/appTypes';
import '../styles/EduInfoFrm.css';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp, mdiSchool, mdiDelete } from '@mdi/js';

// form element extracted to it's own component for readability
function EducationForm({
  item,
  handleEditCurrentItem,
  handleNewItemCreation,
  handleCancelBtnClick,
}: EducationProps) {

  // a function to handle form submission
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleNewItemCreation();
  };

  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <div>
        <label htmlFor="schoolName">
          School <em>*required</em>
        </label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          required
          value={item.schoolName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, schoolName: ev.target.value })
          }
          placeholder="Enter School/University"
        />
      </div>

      <div>
        <label htmlFor="degreeName">
          Degree <em>*required</em>
        </label>
        <input
          type="text"
          id="degreeName"
          name="degreeName"
          required
          value={item.degreeName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, degreeName: ev.target.value })
          }
          placeholder="Enter Degree/Field of Study"
        />
      </div>

      <div>
        <label htmlFor="eduStartDate">Start Date <em>*required</em></label>
        <input
          type="date"
          id="eduStartDate"
          name="eduStartDate"
          required
          value={item.startDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, startDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="eduEndDate">End Date <em>*required</em></label>
        <input
          type="date"
          id="eduEndDate"
          name="eduEndDate"
          required
          value={item.endDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, endDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="eduLocation">
          Location <em>*required</em>
        </label>
        <input
          type="text"
          id="eduLocation"
          name="eduLocation"
          placeholder="City, Country"
          required
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
  handleEducationItemDeletion,
}: Pick<
  EditingProps,
  | 'educationItems'
  | 'handleEducationItemAddition'
  | 'handleEducationItemDeletion'
>) {
  // state for showing and hiding dropdown(the view when education details is clicked)
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  // state for showing and hiding form
  const [showFrm, setShowFrm] = useState<boolean>(false);
  // state for editing individual fields for education form
  const [eduItem, setEduItem] = useState<EducationItem>({
    uid: crypto.randomUUID(),
    schoolName: '',
    degreeName: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  // function for toggling drop down
  const handleShowDropDownClick = () => setShowDropDown(!showDropDown);
  // function for toggling form
  const handleShowFrmClick = () => setShowFrm(!showFrm);
  // function for changing state when input fields are changed
  const handleEditCurrentItem = (currentItem: EducationItem) => {
    setEduItem(currentItem);
  };
  // function for creating a newItem, adding it to the list and resetting
  // state
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
  // function for item to be displayed in the form if an item
  // is clicked for editing
  const handleEditItemClick = (item: EducationItem) => {
    setEduItem(item);
    handleShowFrmClick();
  };
  // function to handle cancel button
  const handleCancelBtnClick = () => {
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
  return (
    <div className="education-detail">
      <div className="section-heading" onClick={handleShowDropDownClick}>
        <div className="left-side">
          <Icon path={mdiSchool} size={1.5} />
          <h2>Education Details</h2>
        </div>
        {/* changing the dropdown icon based on showDropDown state */}
        {showDropDown ? (
          <Icon path={mdiChevronUp} size={2.5} />
        ) : (
          <Icon path={mdiChevronDown} size={2.5} />
        )}
      </div>
      {/* only show other fields if the user clicks the div */}
      {showDropDown && (
        <>
        {/* only show the form if the user clicks on an item or on the 
        add item button */}
          {!showFrm && (
            <>
              <ul className="education-items">
                {educationItems.map((item) => (
                  <li key={item.uid} onClick={() => handleEditItemClick(item)}>
                    <p>{item.schoolName}</p>
                    <button
                      className="delete-edu-item"
                      onClick={(ev: SyntheticEvent) => {
                        // prevent parent element's event from firing
                        ev.stopPropagation();
                        handleEducationItemDeletion(item);
                      }}
                    >
                      <Icon path={mdiDelete} size={1} />
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={handleShowFrmClick} className="add-edu-btn">
                Add Education
              </button>
            </>
          )}
          {showFrm && (
            <EducationForm
              item={eduItem}
              handleEditCurrentItem={handleEditCurrentItem}
              handleNewItemCreation={handleNewItemCreation}
              handleCancelBtnClick={handleCancelBtnClick}
            />
          )}
        </>
      )}
    </div>
  );
}
