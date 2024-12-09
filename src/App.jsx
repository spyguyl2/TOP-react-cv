import "./styles/reset.css";
import Card from "./components/Card";
import LabeledInput from "./components/LabeledInput";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  return (
    <>
      <input id="plainTest" />
      <p id="test">test</p>
      <div id="form">
        <Button text="Submit" id="btn-submit" onClick={handleSubmit} />
        <div className="content">
          <Card title="General Info">
            <LabeledInput text="First Name" id="first-name-input" />
            <LabeledInput text="Last Name" />
            <LabeledInput text="Phone Number" type="tel" />
            <LabeledInput text="Email" type="email" />
          </Card>
          <Card title="Education">
            <LabeledInput text="School Name"></LabeledInput>
            <LabeledInput text="Title of Study"></LabeledInput>
            <LabeledInput text="Date of Study" type="date"></LabeledInput>
          </Card>
          <Card title="Practical Experience">
            <LabeledInput text="Company Name"></LabeledInput>
            <LabeledInput text="Title"></LabeledInput>
            <label htmlFor="responsibilities">
              Describe your responsibilities:
            </label>
            <textarea name="responsibilities" id="responsibilities"></textarea>
            <LabeledInput text="Start Date" type="date"></LabeledInput>
            <LabeledInput text="End Date" type="date"></LabeledInput>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
