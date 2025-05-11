import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DemoCallback from "./components/demoCallback";

function App() {
  return (
    <section>
      <h2
        style={{
          backgroundColor: "#ccc",
          padding: "10px 30px",
        }}
      >
        Performance hooks demo
      </h2>
      <DemoCallback />
    </section>
  );
}

export default App;
