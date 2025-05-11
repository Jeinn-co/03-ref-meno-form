import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RefChangeColor from "./components/RefChangeColor";
import RefSetFocusInput from "./components/RefSetFocusInput";
import RefPreValue from "./components/RefPreValue";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>ref demo</h2>
      {/* <RefChangeColor /> */}
      <RefSetFocusInput />
      {/* <RefPreValue/> */}
      <button style={{padding:'20 30'}}>hello</button>
    </>
  );
}

export default App;
