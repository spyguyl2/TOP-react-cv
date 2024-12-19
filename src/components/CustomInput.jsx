import { useState } from "react";

const CustomInput = ({ text = "Change me!", type = "text", formData }) => {
  const [value, setValue] = useState("");

  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export default CustomInput;
