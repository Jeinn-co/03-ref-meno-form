import React from "react";
import { useMessage } from "../context/MessageContext";
import ComponentC from "./ComponentC";

export default function ComponentB() {
  const { message } = useMessage();

  return (
    <div style={{ paddingLeft: 20, backgroundColor: "pink" }}>
      <h3>ComponentB (2 Level)</h3>
      <p>Message in B: {message}</p>
      <ComponentC />
    </div>
  );
}
