import React, { useState } from "react";
import ComponentB from "./ComponentB";

export default function ComponentA() {
  const [message, setMessage] = useState("Initial message from ComponentA");

  return (
    <div style={{ backgroundColor: 'yellow'}}>
      <h2>ComponentA (1 Level)</h2>
      <button onClick={() => setMessage("Updated at " + new Date().toLocaleTimeString())}>
        Update Message
      </button>
      <ComponentB text={message} />
    </div>
  );
}
