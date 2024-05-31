import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCount] = useState(0);

  let addvalue = () => {
    if (counter < 20) {
      setCount(counter + 1);
    }
    else{
      alert("value is out of range")
    }
  };

  let removevalue = () => {
    if (counter > 0) {
      setCount(counter - 1);
    }
    else{
      alert("value is out of range")
    }
  };

  return (
    <>
      <h1>Mitu</h1>
      <h2>value:{counter}</h2>

      <button onClick={addvalue}>add:{counter}</button>
      <button onClick={removevalue}>remove:{counter}</button>
    </>
  );
}

export default App;
