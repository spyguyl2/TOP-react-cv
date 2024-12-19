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

  return (
    <>
      {isSubmitted ? <Cv formData={formData} /> : <Form formData={formData} />}
    </>
  );
}

export default App;
