import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToggleBoolean from "./components/ToggleBoolean";

function App() {
  return (
    <section>
      <h2
        style={{
          backgroundColor: "#ccc",
          padding: "10px 30px",
        }}
      >
        Custom hook demo
      </h2>
      <ToggleBoolean/>

    </section>
  );
}

export default App;
