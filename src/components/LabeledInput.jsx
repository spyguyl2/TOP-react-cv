const Input = ({ text = "Change me!", type = "text" }) => (
  <>
    <label htmlFor={text}>{`${text}:`}</label>
    <input type={type} name={text} id={text}></input>
  </>
);

export default Input;
