import "../styles/Card.css";

const Card = ({ title = "Change me!", children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);

export default Card;
