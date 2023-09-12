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

  return (
    <>
      <EditingSection
        generalInfo={generalInfo}
        handleGeneralInfoChange={(newItem: GeneralInfoItem) =>
          setGeneralInfo(newItem)
        }
        educationItems={educationItems}
        handleEducationItemAddition={(item: EducationItem) =>
          setEducationItems([...educationItems, item])
        }
        experienceItems={experienceItems}
        handleExperienceItemAddition={(item: ExperienceItem) =>
          setExperienceItems([...experienceItems, item])
        }
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
