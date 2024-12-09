const Button = ({ text = "Change me!", id, onClick }) => {
  return (
    <button onClick={onClick} id={id}>
      {text}
    </button>
  );
};

export default Button;
