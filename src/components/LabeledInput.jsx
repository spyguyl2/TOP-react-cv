const LabeledInput = ({
  text = "Change me!",
  type = "text",
  formDataValue,
}) => (
  <>
    <label htmlFor={text}>{`${text}:`}</label>
    <input type={type} name={text} formDataValue />
  </>
);

export default LabeledInput;
