import { ChangeEvent, useState } from "react";
import { type EducationItem, type ExperienceItem } from "./types/appTypes";
import EditingSection from "./components/EditingSection";
import PreviewSection from "./components/PreviewSection";
import "./styles/App.css";

function App() {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [educationItems, setEducationItems] = useState<EducationItem[]>([]);
  const [schoolName, setSchoolName] = useState<string>("");
  const [degreeName, setDegreeName] = useState<string>("");
  const [eduStartDate, setEduStartDate] = useState<string>("");
  const [eduEndDate, setEduEndDate] = useState<string>("");
  const [eduLocation, setEduLocation] = useState<string>("");
  const [experienceItems, setExperienceItems] = useState<ExperienceItem[]>([]);
  const [companyName, setCompanyName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [jobStartDate, setJobStartDate] = useState<string>("");
  const [jobEndDate, setJobEndDate] = useState<string>("");
  const [jobLocation, setJobLocation] = useState<string>("");
  const [jobDescription, setJobDescription] = useState<string>("");

  return (
    <>
      <EditingSection
        fullName={fullName}
        handleFullNameChange={(event: ChangeEvent<HTMLInputElement>) =>
          setFullName(event.target.value)
        }
        email={email}
        handleEmailChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEmail(event.target.value)
        }
        phoneNumber={phoneNumber}
        handlePhoneNumberChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPhoneNumber(event.target.value)
        }
        address={address}
        handleAddressChange={(event: ChangeEvent<HTMLInputElement>) =>
          setAddress(event.target.value)
        }
        educationItems={educationItems}
        handleEducationItemAddition={(item: EducationItem) =>
          setEducationItems([...educationItems, item])
        }
        schoolName={schoolName}
        handleSchoolNameChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSchoolName(event.target.value)
        }
        degreeName={degreeName}
        handleDegreeNameChange={(event: ChangeEvent<HTMLInputElement>) =>
          setDegreeName(event.target.value)
        }
        eduStartDate={eduStartDate}
        handleEduStartDateChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEduStartDate(event.target.value)
        }
        eduEndDate={eduEndDate}
        handleEduEndDateChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEduEndDate(event.target.value)
        }
        eduLocation={eduLocation}
        handleLocationChange={(event: ChangeEvent<HTMLInputElement>) =>
          setEduLocation(event.target.value)
        }
        clearEduFrmState={() => {
          setSchoolName("");
          setDegreeName("");
          setEduStartDate("");
          setEduEndDate("");
          setEduLocation("");
        }}
        experienceItems={experienceItems}
        handleExperienceItemAddition={(item: ExperienceItem) =>
          setExperienceItems([...experienceItems, item])
        }
        companyName={companyName}
        handleCompanyNameChange={(event: ChangeEvent<HTMLInputElement>) =>
          setCompanyName(event.target.value)
        }
        jobTitle={jobTitle}
        handleJobTitleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setJobTitle(event.target.value)
        }
        jobStartDate={jobStartDate}
        handleJobStartDateChange={(event: ChangeEvent<HTMLInputElement>) =>
          setJobStartDate(event.target.value)
        }
        jobEndDate={jobEndDate}
        handleJobEndDateChange={(event: ChangeEvent<HTMLInputElement>) =>
          setJobEndDate(event.target.value)
        }
        jobLocation={jobLocation}
        handleJobLocationChange={(event: ChangeEvent<HTMLInputElement>) =>
          setJobLocation(event.target.value)
        }
        jobDescription={jobDescription}
        handleJobDescriptionChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setJobDescription(event.target.value)
        }
        clearExpFrmState={() => {
          setCompanyName("");
          setJobTitle("");
          setJobStartDate("");
          setJobEndDate("");
          setJobLocation("");
          setJobDescription("");
        }}
      />
      <PreviewSection
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        educationItems={educationItems}
        schoolName={schoolName}
        degreeName={degreeName}
        eduStartDate={eduStartDate}
        eduEndDate={eduEndDate}
        eduLocation={eduLocation}
        experienceItems={experienceItems}
        companyName={companyName}
        jobTitle={jobTitle}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
        jobLocation={jobLocation}
        jobDescription={jobDescription}
      />
    </>
  );
}

export default App;
