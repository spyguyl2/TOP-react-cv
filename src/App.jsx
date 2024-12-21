import "./styles/reset.css";
import Form from "./components/Form";
import Cv from "./components/Cv";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    title: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const newData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  };

  return (
    <>
      {isSubmitted ? (
        <Cv formData={formData} handleSubmit={handleSubmit} />
      ) : (
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default App;
