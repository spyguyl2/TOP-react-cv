import CustomInput from "./CustomInput";
const LabeledInput = ({ text = "Change me!", type = "text", id }) => (
  <>
    <label htmlFor={text}>{`${text}:`}</label>
    <CustomInput type={type} id={id}></CustomInput>
  </>
);

export default LabeledInput;
