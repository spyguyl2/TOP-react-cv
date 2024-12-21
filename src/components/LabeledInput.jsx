const LabeledInput = ({
  text = "Change me!",
  type = "text",
  id,
  value,
  handleChange,
}) => (
  <>
    <label htmlFor={id}>{`${text}:`}</label>
    <input
      type={type}
      name={id}
      id={id}
      value={value}
      onChange={handleChange}
    />
  </>
);

export default LabeledInput;
