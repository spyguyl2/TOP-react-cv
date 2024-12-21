import Card from "./Card";
import LabeledInput from "./LabeledInput";

const Form = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div id="form">
      <button id="btn-submit" onClick={handleSubmit}>
        Submit
      </button>
      <div className="content">
        <Card title="General Info">
          <LabeledInput
            text="First Name"
            value={formData.firstName}
            handleChange={handleChange}
            id="firstName"
          />
          <LabeledInput
            text="Last Name"
            value={formData.lastName}
            handleChange={handleChange}
            id="lastName"
          />
          <LabeledInput
            text="Phone Number"
            type="tel"
            value={formData.phoneNumber}
            handleChange={handleChange}
            id="phoneNumber"
          />
          <LabeledInput
            text="Email"
            type="email"
            value={formData.email}
            handleChange={handleChange}
            id="email"
          />
        </Card>
        <Card title="Education">
          <LabeledInput
            text="School Name"
            value={formData.schoolName}
            handleChange={handleChange}
            id="schoolName"
          />
          <LabeledInput
            text="Title of Study"
            value={formData.titleOfStudy}
            handleChange={handleChange}
            id="titleOfStudy"
          />
          <LabeledInput
            text="Date of Study"
            type="date"
            value={formData.dateOfStudy}
            handleChange={handleChange}
            id="dateOfStudy"
          />
        </Card>
        <Card title="Practical Experience">
          <LabeledInput
            text="Company Name"
            value={formData.companyName}
            handleChange={handleChange}
            id="companyName"
          />
          <LabeledInput
            text="Title"
            value={formData.title}
            handleChange={handleChange}
            id="title"
          />
          <label htmlFor="responsibilities">
            Describe your responsibilities:
          </label>
          <textarea
            name="responsibilities"
            id="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
          />
          <LabeledInput
            text="Start Date"
            type="date"
            value={formData.startDate}
            handleChange={handleChange}
            id="startDate"
          />
          <LabeledInput
            text="End Date"
            type="date"
            value={formData.endDate}
            handleChange={handleChange}
            id="endDate"
          />
        </Card>
      </div>
    </div>
  );
};

export default Form;
