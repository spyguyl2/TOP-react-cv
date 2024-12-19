import Card from "./Card";
import LabeledInput from "./LabeledInput";

const Form = (formData) => {
  return (
    <div id="form">
      <button id="btn-submit">Submit</button>
      <div className="content">
        <Card title="General Info">
          <LabeledInput text="First Name" />
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
  );
};

export default Form;
