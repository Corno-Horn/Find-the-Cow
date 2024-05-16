import "./App.css";

function App() {
  const handleClick = () => {
    alert("Moo");
  };

  return (
    <div>
      <h1>Find the Cow...</h1>
      <button onClick={handleClick}>Click Me?</button>
    </div>
  );
}

export default App;
