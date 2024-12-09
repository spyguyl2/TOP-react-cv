import { useState } from "react";

const CustomInput = ({ text = "Change me!", type = "text", id }) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        id={id}
        name={text}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </>
  );
};

export default CustomInput;
