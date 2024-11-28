import "./styles/reset.css";
import Input from "./components/Input";

function App() {
  return (
    <>
      <section>
        <h1>General Information</h1>
        <Input text="First Name" />
        <Input text="Last Name" />
        <Input text="Email" type="email" />
        <Input text="Phone Number" />
      </section>
    </>
  );
}

export default App;
