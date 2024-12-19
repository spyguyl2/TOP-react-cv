import CustomInput from "./CustomInput";

const LabeledInput = ({ text = "Change me!", type = "text", formData }) => (
  <>
    <label htmlFor={text}>{`${text}:`}</label>
    <CustomInput type={type} name={text} id={text}></CustomInput>
  </>
);

export default LabeledInput;
