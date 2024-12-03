import "./styles/reset.css";
import Card from "./components/Card";
import Input from "./components/LabeledInput";
import { useState } from "react";

function App() {
  return (
    <>
      <div id="form">
        <button id="btn-submit">Submit</button>
        <div className="content">
          <Card title="General Info">
            <Input text="First Name" />
            <Input text="Last Name" />
            <Input text="Phone Number" type="tel" />
            <Input text="Email" type="email" />
          </Card>
          <Card title="Education">
            <Input text="School Name"></Input>
            <Input text="Title of Study"></Input>
            <Input text="Date of Study" type="date"></Input>
          </Card>
          <Card title="Practical Experience">
            <Input text="Company Name"></Input>
            <Input text="Title"></Input>
            <label htmlFor="responsibilities">
              Describe your responsibilities:
            </label>
            <textarea name="responsibilities" id="responsibilities"></textarea>
            <Input text="Start Date" type="date"></Input>
            <Input text="End Date" type="date"></Input>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
