import { useState } from 'react';
import {
  GeneralInfoItem,
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
  return (
    <>
      <EditingSection
        generalInfo={generalInfo}
        handleGeneralInfoChange={(newItem: GeneralInfoItem) =>
          setGeneralInfo(newItem)
        }
        educationItems={educationItems}
        handleEducationItemAddition={handleEducationItemAddition}
        experienceItems={experienceItems}
        handleExperienceItemAddition={handleExperienceItemAddition}
      />
      <PreviewSection
        generalInfo={generalInfo}
        educationItems={educationItems}
        experienceItems={experienceItems}
      />
    </>
  );
}

export default App;
