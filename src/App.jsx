import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RefChangeColor from "./components/RefChangeColor";
// import RefSetFocusInput from "./components/RefSetFocusInput";
// import RefPreValue from "./components/RefPreValue";

function App() {
  const [count, setCount] = useState(0);
  const refDiv = useRef();

  // console.log('test', refDiv)

  // useEffect(() => {
  //   if (refDiv.current) {
  //     console.log("effect test", refDiv);
  //     // refDiv.current.style.backgroundColor = 'red'
  //   }
  // }, []);

  const handleChangeColor = () =>{
    // refDiv.current.style.backgroundColor = 'red'
    refDiv.current.innerText = 'Updated'
  }

  return (
    <>
      <h2>ref demo</h2>
      <RefChangeColor ref={refDiv} />
      {/* <RefSetFocusInput /> */}
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
