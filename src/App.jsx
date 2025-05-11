import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RefSetFocusInput from "./components/RefSetFocusInput";
// import RefPreValue from "./components/RefPreValue";

function App() {
  const [count, setCount] = useState(0);

  const handleChangeColor = () =>{
  }

  return (
    <>
      <h2>ref demo</h2>
      <RefSetFocusInput />
      {/* <RefPreValue/> */}
      <div>
        <button 
          onClick={handleChangeColor}
        style={{ padding: "20 30" }}>change bg color to red</button>
      </div>
    </>
  );
}

export default App;
