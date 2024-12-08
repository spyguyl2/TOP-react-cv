import "./styles/reset.css";
import Card from "./components/Card";
import CustomInput from "./components/CustomInput";
import { useState } from "react";

function App() {
  return (
    <>
      <div id="form">
        <button id="btn-submit">Submit</button>
        <div className="content">
          <Card title="General Info">
            <CustomInput text="First Name" />
            <CustomInput text="Last Name" />
            <CustomInput text="Phone Number" type="tel" />
            <CustomInput text="Email" type="email" />
          </Card>
          <Card title="Education">
            <CustomInput text="School Name"></CustomInput>
            <CustomInput text="Title of Study"></CustomInput>
            <CustomInput text="Date of Study" type="date"></CustomInput>
          </Card>
          <Card title="Practical Experience">
            <CustomInput text="Company Name"></CustomInput>
            <CustomInput text="Title"></CustomInput>
            <label htmlFor="responsibilities">
              Describe your responsibilities:
            </label>
            <textarea name="responsibilities" id="responsibilities"></textarea>
            <CustomInput text="Start Date" type="date"></CustomInput>
            <CustomInput text="End Date" type="date"></CustomInput>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
