import React from "react";
import { useMessage } from "../context/MessageContext";

export default function ComponentC() {
  const { message } = useMessage();

  return (
    <div style={{ paddingLeft: 40, backgroundColor: "lightgreen" }}>
      <h4>ComponentC (3 Level)</h4>
      <p>Received message from context: {message}</p>
    </div>
  );
}
