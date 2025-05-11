import React from "react";
import { useMessage } from "../context/MessageContext";
import ComponentB from "./ComponentB";

export const MessageContext = createContext(null);

export default function ComponentA() {
  const { message, setMessage } = useMessage();

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>ComponentA (1 Level)</h2>
      <button
        onClick={() =>
          setMessage("Updated at " + new Date().toLocaleTimeString())
        }
      >
        Update Message
      </button>
      <ComponentB />
    </div>
  );
}
