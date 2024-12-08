import { useState } from "react";

const CustomInput = ({ text = "Change me!", type = "text" }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor={text}>{`${text}:`}</label>
      <input
        id={text}
        name={text}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};

export default CustomInput;
