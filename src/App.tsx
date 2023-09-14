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
  const [generalInfo, setGeneralInfo] = useState<GeneralInfoItem>({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [educationItems, setEducationItems] = useState<EducationItem[]>([]);
  const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>([]);

  const handleEducationItemAddition = (item: EducationItem) => {
    const searchElem = educationItems.filter(
      (currentItem) => currentItem.uid === item.uid,
    );
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
  const handleExperienceItemAddition = (item: ExperienceItem) => {
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
  const deleteEduItem = (item: EducationItem) => {
    setEducationItems(educationItems.filter((items) => items.uid !== item.uid));
  };
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
          handleGeneralInfoChange={(newItem: GeneralInfoItem) =>
            setGeneralInfo(newItem)
          }
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
