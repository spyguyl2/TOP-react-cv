const Input = ({ text = "Change me!", type = "text" }) => (
  <div>
    <label htmlFor={text}>{`${text}:`}</label>
    <input type={type} name={text} id={text}></input>
  </div>
);

export default Input;
