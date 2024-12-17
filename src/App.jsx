import "./styles/reset.css";
import Card from "./components/Card";
import LabeledInput from "./components/LabeledInput";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = () => {
    const firstName = document.getElementById("firstName").value;
    setFormData(firstName);
  };

  return (
    <>
      <h1 id="firstNameTest">{formData}</h1>
      <div id="form">
        <button id="btn-submit" onClick={handleSubmit}>
          Submit
        </button>
        <div className="content">
          <Card title="General Info">
            <LabeledInput text="First Name" id="firstName" />
            <LabeledInput text="Last Name" id="lastName" />
            <LabeledInput text="Phone Number" type="tel" id="phoneNumber" />
            <LabeledInput text="Email" type="email" id="email" />
          </Card>
          <Card title="Education">
            <LabeledInput text="School Name" id="schoolName"></LabeledInput>
            <LabeledInput
              text="Title of Study"
              id="titleOfStudy"
            ></LabeledInput>
            <LabeledInput
              text="Date of Study"
              type="date"
              id="dateOfStudy"
            ></LabeledInput>
          </Card>
          <Card title="Practical Experience">
            <LabeledInput text="Company Name" id="companyName"></LabeledInput>
            <LabeledInput text="Title" id="title"></LabeledInput>
            <label htmlFor="responsibilities">
              Describe your responsibilities:
            </label>
            <textarea name="responsibilities" id="responsibilities"></textarea>
            <LabeledInput
              text="Start Date"
              type="date"
              id="startDate"
            ></LabeledInput>
            <LabeledInput
              text="End Date"
              type="date"
              id="endDate"
            ></LabeledInput>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
