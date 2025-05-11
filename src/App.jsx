import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RefPreValue from "./components/RefPreValue";

function App() {
  const [count, setCount] = useState(0);

  const handleChangeColor = () =>{
  }

  return (
    <>
      <h2>ref demo</h2>
      <RefPreValue/>
      {/* <div>
        <button 
          onClick={handleChangeColor}
        style={{ padding: "20 30" }}>number count</button>
      </div> */}
    </>
  );
}

export default App;
