import CustomInput from "../components/CustomInput.jsx";

const Input = ({ text = "Change me!", type = "text" }) => (
  <>
    <label htmlFor={text}>{`${text}:`}</label>
    <CustomInput type={type} name={text} id={text}></CustomInput>
  </>
);

export default Input;
