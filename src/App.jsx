import "./App.css";

function App() {
  return (
    <>
      <section>
        <h1>General Information</h1>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName"></input>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName"></input>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" name="phoneNumber"></input>
      </section>
    </>
  );
}

export default App;
