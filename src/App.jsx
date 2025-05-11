import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import { MessageProvider } from "./context/MessageContext";

function App() {
  return (
    <section>
      <h2
        style={{
          backgroundColor: "#ccc",
          padding: "10px 30px",
        }}
      >
        Context demo
      </h2>
      <MessageProvider>
        <ComponentA />
      </MessageProvider>
    </section>
  );
}

export default App;
