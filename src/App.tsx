import { useState } from 'react';
import {
  type GeneralInfoItem,
  type EducationItem,
  type ExperienceItem,
} from './types/appTypes';
import EditingSection from './EditingSection';
import PreviewSection from './PreviewSection';
import './styles/App.css';

function App() {
  // state for storing personal details
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoItem>({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  // state for holding education details as array
  const [educationItems, setEducationItems] = useState<EducationItem[]>([]);
  // state for holding experience details as array
  const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>([]);

  // function for updating the general Info changes to the state
  const handleGeneralInfoChanges = (newItem: GeneralInfoItem) => setGeneralInfo(newItem);

  // function for adding new education item to array
  const handleEducationItemAddition = (item: EducationItem) => {
    // if the provided item already exists in the array that means we're editing
    // an existing item. Using array.filter to look for an item with the same uid as
    // provided item
    const searchElem = educationItems.filter(
      (currentItem) => currentItem.uid === item.uid,
    );
    // if an item is found we'll use array.map to replace only the item with the same
    // uid as the provided item's uid. If an item is not found just add the provided 
    // item to the end of the list
    if (searchElem[0]) {
      setEducationItems(
        educationItems.map((currentItem) =>
          currentItem.uid === item.uid ? item : currentItem,
        ),
      );
    } else {
      setEducationItems([...educationItems, item]);
    }
  };

  // function for adding new experience item to array
  const handleExperienceItemAddition = (item: ExperienceItem) => {
    // same logic as the above handleEducationItemAddition function
    const searchElem = experienceItems.filter(
      (currentItem) => currentItem.uid === item.uid,
    );
    if (searchElem[0]) {
      setExperienceItems(
        experienceItems.map((currentItem) =>
          currentItem.uid === item.uid ? item : currentItem,
        ),
      );
    } else {
      setExperienceItems([...experienceItems, item]);
    }
  };

  // function for deleting the provided education item from the list
  const deleteEduItem = (item: EducationItem) => {
    setEducationItems(educationItems.filter((items) => items.uid !== item.uid));
  };

  // function for deleting the provided experience item from the list
  const deleteExpItem = (item: ExperienceItem) => {
    setExperienceItems(
      experienceItems.filter((items) => items.uid !== item.uid),
    );
  };

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <EditingSection
          generalInfo={generalInfo}
          handleGeneralInfoChange={handleGeneralInfoChanges}
          educationItems={educationItems}
          handleEducationItemAddition={handleEducationItemAddition}
          handleEducationItemDeletion={deleteEduItem}
          experienceItems={experienceItems}
          handleExperienceItemAddition={handleExperienceItemAddition}
          handleExperienceItemDeletion={deleteExpItem}
        />
        <PreviewSection
          generalInfo={generalInfo}
          educationItems={educationItems}
          experienceItems={experienceItems}
        />
      </main>
      <footer>
        <p>
          Project by{' '}
          <a href="https://github.com/Ashish-Krishna-K">Ashish-Krishna-K</a>
        </p>
        <p>
          Design Inspiration:{' '}
          <a href="https://rmathr.github.io/cv-project/">
            Matheus Rodrigues's Project
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
