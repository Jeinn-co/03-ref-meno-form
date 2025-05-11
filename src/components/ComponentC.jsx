import React, { useContext } from "react";
import { MessageContext } from "./ComponentA";

export default function ComponentC({ text }) {
  const value = useContext(MessageContext);
  console.log(value); // "hello"

  return (
    <div style={{ paddingLeft: 40, backgroundColor: "lightgreen" }}>
      <h4>ComponentC (3 Level)</h4>
      <p>Received message: {text}</p>
      <p>{value}</p>
      {/* <button onClick={() => value.setMessage("update!!")}>update</button> */}
    </div>
  );
}
