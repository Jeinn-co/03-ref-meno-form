import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const MessageContext = createContext(null);

export default function ComponentA() {
  const [message, setMessage] = useState("Initial message from ComponentA");

  return (
    <MessageContext.Provider value={{message, setMessage}}>
      <div style={{ backgroundColor: "yellow" }}>
        <h2>ComponentA (1 Level)</h2>
        <button
          onClick={() =>
            setMessage("Updated at " + new Date().toLocaleTimeString())
          }
        >
          Update Message
        </button>
        <ComponentB text={message} />
      </div>
    </MessageContext.Provider>
  );
}
