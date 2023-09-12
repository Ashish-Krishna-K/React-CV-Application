import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { EditingProps, EducationItem, EducationProps } from '../types/appTypes';

function EducationForm({
  item,
  handleEducationItemAddition,
  handleCancelBtnClick,
}: EducationProps) {
  const [eduItem, setEduItem] = useState<EducationItem>({
    uid: crypto.randomUUID(),
    schoolName: '',
    degreeName: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  if (item !== undefined) setEduItem(item);

  const handleFormSubmission = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleEducationItemAddition(eduItem);
    setEduItem({
      uid: crypto.randomUUID(),
      schoolName: '',
      degreeName: '',
      startDate: '',
      endDate: '',
      location: '',
    });
  };
  return (
    <form action="#" onSubmit={handleFormSubmission}>
      <div>
        <label htmlFor="schoolName">School</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={eduItem.schoolName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setEduItem({ ...eduItem, schoolName: ev.target.value })
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
          value={eduItem.degreeName}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setEduItem({ ...eduItem, degreeName: ev.target.value })
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
          value={eduItem.startDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setEduItem({ ...eduItem, startDate: ev.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="eduEndDate">End Date</label>
        <input
          type="date"
          id="eduEndDate"
          name="eduEndDate"
          value={eduItem.endDate}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setEduItem({ ...eduItem, endDate: ev.target.value })
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
          value={eduItem.location}
          onChange={(ev: ChangeEvent<HTMLInputElement>) =>
            setEduItem({ ...eduItem, location: ev.target.value })
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
    <section className="education-detail">
      <h2 onClick={handleShowDropDownClick}>Education Details</h2>
      {showDropDown && (
        <div>
          <ul className="education-items">
            {educationItems.map((item) => (
              <li key={item.uid}>{item.schoolName}</li>
            ))}
          </ul>
          {showFrm.button && (
            <button onClick={handleShowFrmClick}>Add Education</button>
          )}
          {showFrm.form && (
            <EducationForm
              handleEducationItemAddition={handleEducationItemAddition}
              handleCancelBtnClick={handleShowFrmClick}
            />
          )}
        </div>
      )}
    </section>
  );
}
