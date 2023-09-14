import { ChangeEvent, SyntheticEvent, useState } from 'react';
import {
  type EditingProps,
  type ExperienceItem,
  type ExperienceProps,
} from '../types/appTypes';
import '../styles/ExpInfoFrm.css';
import Icon from '@mdi/react';
import {
  mdiChevronDown,
  mdiChevronUp,
  mdiBriefcaseVariant,
  mdiDelete,
} from '@mdi/js';

function ExperienceForm({
  item,
  handleEditCurrentItem,
  handleNewItemCreation,
  handleCancelBtnClick,
}: ExperienceProps) {
  // a function for handling form submission
  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleNewItemCreation();
  };
  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <div>
        <label htmlFor="companyName">
          Company Name <em>*required</em>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          required
          value={item.companyName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, companyName: ev.target.value })
          }
          placeholder="Enter Company Name"
        />
      </div>

      <div>
        <label htmlFor="jobTitle">
          Position Title <em>*required</em>
        </label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          required
          value={item.jobTitle}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, jobTitle: ev.target.value })
          }
          placeholder="Enter Position Title"
        />
      </div>

      <div>
        <label htmlFor="jobStartDate">Start Date <em>*required</em></label>
        <input
          type="date"
          id="jobStartDate"
          name="jobStartDate"
          required
          value={item.startDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, startDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobEndDate">End Date <em>*required</em></label>
        <input
          type="date"
          id="jobEndDate"
          name="jobEndDate"
          required
          value={item.endDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            handleEditCurrentItem({ ...item, endDate: ev.target.value })
          }
        />
      </div>

      <div>
        <label htmlFor="jobLocation">
          Location <em>*required</em>
        </label>
        <input
          type="text"
          id="jobLocation"
          name="jobLocation"
          required
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
  handleExperienceItemDeletion,
}: Pick<
  EditingProps,
  | 'experienceItems'
  | 'handleExperienceItemAddition'
  | 'handleExperienceItemDeletion'
>) {
  // state for showing and hiding dropdown(the view when education details is clicked)
  const [showDropDown, setShowDropDown] = useState(false);
  // state for showing and hiding form
  const [showFrm, setShowFrm] = useState(false);
  // state for editing individual fields for experience form
  const [expItem, setExpItem] = useState<ExperienceItem>({
    uid: crypto.randomUUID(),
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  // function for toggling drop down
  const handleShowDropDownClick = () => setShowDropDown(!showDropDown);
  // function for toggling form display
  const handleShowFrmClick = () => setShowFrm(!showFrm);
  // function for changing state when input fields are changed
  const handleEditCurrentItem = (currentItem: ExperienceItem) => {
    setExpItem(currentItem);
  };
  // function for creating a newItem, adding it to the list and resetting
  // state
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
  // function for item to be displayed in the form if an item
  // is clicked for editing
  const handleEditItemClick = (item: ExperienceItem) => {
    setExpItem(item);
    handleShowFrmClick();
  };
  // function to handle cancel button
  const handleCancelBtnClick = () => {
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
  return (
    <div className="experience-detail">
      <div className="section-heading" onClick={handleShowDropDownClick}>
        <div className="left-side">
          <Icon path={mdiBriefcaseVariant} size={1.5} />
          <h2>Experience Details</h2>
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
              <ul className="experience-items">
                {experienceItems.map((item) => (
                  <li key={item.uid} onClick={() => handleEditItemClick(item)}>
                    <p>{item.companyName}</p>
                    <button
                      className="delete-exp-item"
                      onClick={(ev: SyntheticEvent) => {
                        // prevent parent element's event from firing
                        ev.stopPropagation();
                        handleExperienceItemDeletion(item);
                      }}
                    >
                      <Icon path={mdiDelete} size={1} />
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={handleShowFrmClick} className="add-exp-btn">
                Add Experience
              </button>
            </>
          )}
          {showFrm && (
            <ExperienceForm
              item={expItem}
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
